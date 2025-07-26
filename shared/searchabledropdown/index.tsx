"use client"

import type React from "react"

import { ChevronDown, Search, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface SearchableDropdownProps<T> {
  items: T[]
  displayKey: keyof T
  valueKey: keyof T
  value?: T[keyof T]
  defaultValue?: T[keyof T]
  onSelect: (item: T) => void
  placeholder?: string
  className?: string
  disabled?: boolean
}

export default function SearchableDropdown<T extends Record<string, any>>({
  items,
  displayKey,
  valueKey,
  defaultValue,
  onSelect,
  value,
  placeholder = "Select an option...",
  className = "",
  disabled = false,
}: SearchableDropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedItem, setSelectedItem] = useState<T | null>(null)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)

  const dropdownRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const targetValue = value !== undefined ? value : defaultValue
    if (targetValue) {
      const targetItem = items?.find((item) => item[valueKey] === targetValue)
      if (targetItem) {
        setSelectedItem(targetItem)
        onSelect(targetItem)
      }
    } else if (value === null || value === undefined) {
      setSelectedItem(null)
    }
  }, [value, defaultValue, items, valueKey])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSearchTerm("")
        setHighlightedIndex(-1)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isOpen])

  const filteredItems = items?.filter((item) =>
    String(item[displayKey]).toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault()
        setIsOpen(true)
      }
      return
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setHighlightedIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0))
        break
      case "ArrowUp":
        e.preventDefault()
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1))
        break
      case "Enter":
        e.preventDefault()
        if (highlightedIndex >= 0 && filteredItems[highlightedIndex]) {
          handleSelect(filteredItems[highlightedIndex])
        }
        break
      case "Escape":
        setIsOpen(false)
        setSearchTerm("")
        setHighlightedIndex(-1)
        break
    }
  }

  const handleSelect = (item: T) => {
    setSelectedItem(item)
    setIsOpen(false)
    setSearchTerm("")
    setHighlightedIndex(-1)
    onSelect(item)
  }

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedItem(null)
    setSearchTerm("")
    onSelect(null as any)
  }

  const toggleDropdown = () => {
    if (disabled) return
    setIsOpen(!isOpen)
    if (!isOpen) {
      setSearchTerm("")
      setHighlightedIndex(-1)
    }
  }

  return (
    <div
      ref={dropdownRef}
      className={`relative w-full ${className}`}
      onKeyDown={handleKeyDown}
      tabIndex={disabled ? -1 : 0}
    >
      <button
        type="button"
        onClick={toggleDropdown}
        disabled={disabled}
        className={`
          w-full px-4 py-3 text-left bg-white border border-gray-300 rounded-lg shadow-sm
          transition-all duration-200 ease-in-out
          ${disabled
            ? "bg-gray-50 text-gray-400 cursor-not-allowed"
            : "hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          }
          ${isOpen ? "border-blue-500 ring-2 ring-blue-500" : ""}
        `}
      >
        <div className="flex items-center justify-between">
          <span className={selectedItem ? "text-gray-900" : "text-gray-500"}>
            {selectedItem ? String(selectedItem[displayKey]) : placeholder}
          </span>
          <div className="flex items-center gap-2">
            {selectedItem && !disabled && (
              <X className="w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors" onClick={handleClear} />
            )}
            <ChevronDown
              className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            />
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="p-3 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setHighlightedIndex(-1)
                }}
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
          </div>

          <div className="max-h-60 overflow-y-auto">
            {filteredItems?.length === 0 ? (
              <div className="px-4 py-3 text-gray-500 text-center">No options found</div>
            ) : (
                filteredItems?.map((item, index) => (
                  <button
                    key={`${String(item[valueKey])}-${index}`}
                    type="button"
                    onClick={() => handleSelect(item)}
                    className={`
                    w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-150
                    ${highlightedIndex === index ? "bg-blue-50 text-blue-700" : "text-gray-900"}
                    ${selectedItem && selectedItem[valueKey] === item[valueKey]
                        ? "bg-blue-100 text-blue-700 font-medium"
                        : ""
                      }
                  `}
                    onMouseEnter={() => setHighlightedIndex(index)}
                >
                    {String(item[displayKey])}
                  </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}
