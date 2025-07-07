"use client"

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { showerror, showsuccess } from "@/lib/toasts"
import { useDeleteBlog } from "../../api/mutations"

const DeleteBlog = ({ id, open, setOpen }: { id: string, open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const { deleteBlog, isPending: isDeleting } = useDeleteBlog()

  const handleDeleteBog = async (id: string) => {
    try {
      const res = await deleteBlog(id)
      showsuccess(res.message)
      setOpen(false)
    } catch (error: any) {
      showerror(error.message)
    }
  }
  return (
    <div className="flex items-center justify-center  bg-gray-100">
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className="sm:max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle className="sr-only">Confirm Deletion</AlertDialogTitle>
            <AlertDialogDescription className="text-center text-base font-normal text-foreground">
              Are you sure to delete this Blog?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-row justify-between gap-2 sm:gap-2">
            <AlertDialogCancel className="mt-0 bg-black text-white hover:bg-black/90 flex-1">Close</AlertDialogCancel>
            <Button onClick={() => handleDeleteBog(id)} className="bg-main hover:bg-yellow-900  flex-1">
              {isDeleting ? "Deleting..." : "Delete"}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default DeleteBlog