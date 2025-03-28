"use client"

import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { NAV_ITEMS } from "@/constant/navitems"



export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="h-screen sticky top-0 left-0 hidden   w-[320px] bg-black md:flex flex-col overflow-y-auto">
      <div className="p-6">
        <Image src="/img/azanypay.png" alt="AZANYPAY" width={207} height={87} className="mx-auto" />
      </div>

      <div className="mt-6 flex-1 mx-3 max-h-[60rem] overflow-y-auto">
        <ul className="space-y-2">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname?.startsWith(item.path)
            return (
            <li key={item.name}>
              {item.subItems ? (
                <Accordion
                  type="single"
                    collapsible
                  className="border-none"
                >
                  <AccordionItem value={item.name} className="border-none">
                    <AccordionTrigger
                      className={cn(
                        "flex items-center hover:no-underline whitespace-nowrap gap-3 px-3 py-3 text-gray-400 hover:text-white transition-colors rounded-[10px] mx-4",
                        isActive && "bg-white text-red-600 hover:text-red-600",
                      )}
                    >
                      <div className="flex items-center">
                        {item.icon}
                        <span className="font-medium">{item.name}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-0">
                      <ul className="space-y-2 pl-10">
                          {item.subItems.map((subItem) => {
                            const subItemActiveItem = pathname?.startsWith(subItem.path)
                            return (
                          <li key={subItem.name}>
                            <Link
                              href={subItem.path}
                              className={cn(
                                "flex items-center gap-2 py-1 transition-colors  text-main",
                                subItemActiveItem && "font-medium text-white",
                              )}
                            >
                                  <span className="text-lg">•••</span>
                              <span>{subItem.name}</span>
                            </Link>
                          </li>
                            )
                          })}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <Link
                  href={item.path}
                  className={cn(
                    "flex items-center px-6 py-3 text-gray-400 hover:text-white whitespace-nowrap transition-colors",
                    isActive && "text-white",
                  )}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              )}
            </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

