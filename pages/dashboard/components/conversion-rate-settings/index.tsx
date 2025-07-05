"use client"
import { useState } from "react";
import { ConfigData } from "../../@types/dashbaord";
import ConversionRateMarkupDialog from "../conversion-rate-markup";

export default function ConversionRateSettings({ config, isLoadingConfig }: { config: ConfigData, isLoadingConfig: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    type: "",
    title: "",
    description: "",
    footer: "",
    markup: 0
  })

  if (isLoadingConfig) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className="">
      <h1 className="text font-semibold text-[#1C2A53] mb-8">Conversion Rate Settings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-[#1e3a8a] rounded-xl p-3 min-w-[150px]">
          <div className="text-gray-500 mb-2">Conversion Rate Markup</div>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-[#04103B]">{config?.markup_percent}%</div>
            <button onClick={() => {
              setModalContent({
                type: "conversion-rate-markup",
                title: "Conversion Rate Markup",
                description: "Set a markup value",
                footer: "How much markup will the system add to the real-time market value of currency pairs?",
                markup: config.markup_percent
              });
              setIsOpen(true)
            }}
              className="text-[#d97706] text-[10px] hover:underline">
              Edit Rate
            </button>
          </div>
        </div>

        <div className="border border-[#1e3a8a] rounded-xl p-3 min-w-[150px]">
          <div className="text-gray-500 mb-2">Update Frequency</div>
          <div className="flex items-center gap-4 justify-between">
            <div className="text-2xl font-bold text-[#04103B]">{config?.card_fee}</div>
            <button
              onClick={() => {
                setModalContent({
                  type: "card-fee",
                  title: "Card Fee",
                  description: "Set a card fee",
                  footer: "How often should the system refresh the conversion rates?",
                  markup: config.card_fee
                });
                setIsOpen(true)
              }}
              className="text-[#d97706] text-[10px] hover:underline">
              Edit Frequency
            </button>
          </div>
        </div>
      </div>

      <ConversionRateMarkupDialog
        modalContent={modalContent}
        open={isOpen}
        onOpenChange={setIsOpen}
      />
    </div>
  )
}
