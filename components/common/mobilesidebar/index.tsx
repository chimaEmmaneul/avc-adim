import Link from "next/link"
import { redirect, usePathname } from "next/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"

import {
  Sheet,
  SheetContent,
  // SheetDescription,
  // SheetHeader,
  // SheetTitle,
  // SheetTrigger,
} from "@/components/ui/sheet"

import { cn } from "@/lib/utils"
import { NAV_ITEMS } from "@/constant/navitems"
import { LogOutIcon } from "lucide-react"
import { useLogOut } from "@/modules/authentication/api/mutations"
import Cookies from "js-cookie"
import { showerror, showsuccess } from "@/lib/toasts"

type MobileSidebarProps = {
  open: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MobileSidebar({ open, setIsOpen }: MobileSidebarProps) {
  const pathname = usePathname()

  const { logout } = useLogOut()

  const handleLogOut = async () => {
    try {
      const res = await logout()
      Cookies.remove("token")
      showsuccess("Logged out successfully")
      redirect("/auth/login")
    } catch (error) {
      showerror("something went wrong")
    }
  }

  return (

    <Sheet open={open} onOpenChange={setIsOpen}>
      <SheetContent side="left" className="max-w-full w-full bg-black p-0 m-0">
        <div className="h-screen  flex-col">
          <div className="p-6">
            <Image src="/img/avclogo.png" alt="AZANYPAY" width={190} height={85} className="mx-auto" />
          </div>

          <div className=" flex-1 mx-3 max-h-[80vh] h-full  overflow-y-auto">
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
                              "flex items-center hover:no-underline whitespace-nowrap gap-3 px-2 py-3 text-gray-400 hover:text-yellow-700 transition-colors rounded-[10px] mx-4",
                              isActive && "bg-white text-main ",
                            )}
                          >
                            <div className="flex items-center gap-4">
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
                                      onClick={() => setIsOpen(false)}
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
                          onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center gap-4 px-6 py-3 text-gray-400 hover:text-white whitespace-nowrap transition-colors",
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
          <div className=" text-center  mx-4 px-4">
            <button onClick={handleLogOut} className="flex items-center justify-center gap-2 text-white">
              <LogOutIcon />
              Log Out
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>


  )
}