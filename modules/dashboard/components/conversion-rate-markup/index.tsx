"use client"
import { useForm } from "react-hook-form"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useEffect } from "react"
import { useUpdateMarkupConfigMutation } from "../../api/mutation"
import { showsuccess } from "@/lib/toasts"

interface ConversionRateMarkupFormData {
  markup: string
}

interface ConversionRateMarkupDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  defaultMarkup?: string
  modalContent: {
    type: string;
    title: string;
    description: string;
    footer: string;
    markup: number;
  }
}

export default function ConversionRateMarkupDialog({
  open,
  onOpenChange,
  modalContent
}: ConversionRateMarkupDialogProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ConversionRateMarkupFormData>({
    defaultValues: {
      markup: modalContent.markup.toString(),
    },
  })
  const { updateMarkupConfig, isUpdatingMarkupConfig } = useUpdateMarkupConfigMutation()

  useEffect(() => {
    reset({
      markup: modalContent.markup.toString(),
    })
  }, [modalContent])

  const onSubmit = async (data: ConversionRateMarkupFormData) => {
    try {
      const formData = new FormData()
      if (modalContent.type === "conversion-rate-markup") {
        formData.append("markup_percent", data.markup)
        const res = await updateMarkupConfig(formData)
        showsuccess(res.message)
      } else {
        formData.append("card_fee", data.markup)
        const res = await updateMarkupConfig(formData)
        showsuccess(res.message)
      }
      onOpenChange(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-md p-0 overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <AlertDialogTitle className="text-xl font-semibold text-gray-800">{modalContent.title}</AlertDialogTitle>
            <AlertDialogCancel className="p-0 m-0 h-auto bg-transparent border-0 hover:bg-transparent">
              <X className="h-5 w-5 text-gray-500 hover:text-gray-700" />
              <span className="sr-only">Close</span>
            </AlertDialogCancel>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div>
                <label htmlFor="markup" className="block text-base font-medium text-gray-700 mb-2">
                  {modalContent.description}
                </label>
                <input
                  id="markup"
                  type="text"
                  className={`w-full px-4 py-3 border ${errors.markup ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  {...register("markup", {
                    required: "Markup value is required",
                    pattern: {
                      value: /^(\d*\.?\d+)%?$/,
                      message: "Please enter a valid percentage",
                    },
                  })}
                />
                {errors.markup && <p className="mt-1 text-sm text-red-500">{errors.markup.message}</p>}
              </div>

              <AlertDialogDescription className="text-sm text-gray-500 mt-2">
                {modalContent.footer}
              </AlertDialogDescription>
            </div>

            <AlertDialogFooter className="mt-6 flex justify-end space-x-2">
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                Save
              </Button>
            </AlertDialogFooter>
          </form>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}
