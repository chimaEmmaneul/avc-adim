import Image from "next/image";

import { AuthCarousel } from "@/components/common/auth/AuthCarousel";
import { MessageIcon } from "@/icon/icon";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const slides = [
    "Input Correctly the 4 digit code sent to your Email..",
    "Usernames  and passwords for  Azany admins are case sensitive take note, 2.",
    "Usernames  and passwords for  Azany admins are case sensitive take note, 3.",
  ];
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 h-screen`} >
      <div className=" flex-col justify-between p-4 bg-onboard bg-repeat bg-center bg-cover hidden md:flex">
        <Image
          src={"/img/azanypay.png"}
          alt="Azany"
          width={180}
          height={45}
          className=""
        />
        <div className="rounded-[1.5rem] max-w-[20rem] min-w-[16rem] mx-auto flex flex-col gap-4 bg-[#3E3838] p-8">
          <div className="bg-guyana p-4 rounded-full w-fit flex mx-auto">
            <MessageIcon className="text-white" />
          </div>
          <AuthCarousel slides={slides} />
        </div>
      </div>

      <div className="">
        {children}
      </div>
    </div>
  )
}