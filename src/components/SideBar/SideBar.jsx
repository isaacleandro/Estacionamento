"use client";
import { usePathname, useRouter } from "next/navigation";
import { Car, LetterCircleP, SignOut } from "@phosphor-icons/react/dist/ssr"
export default function SideBar() {

    const pathname = usePathname();
    const router = useRouter();

    function goTopage(page) {
        router.push(page);
    }

    return (
        <div className="absolute left-0 min-h-screen min-w-20 p-3 flex 
        justify-start items-center bg-blue-950 text-white flex-col space-y-3">

            <div onClick={() => goTopage("/dashboard")}
                className={pathname === "/dashboard" ? "bg-green-600 p-1 rounded-md cursor-pointer" : "cursor-pointer"}>
                <Car color="white" size={26} />
            </div>

            <div onClick={() => goTopage("/park")}
                className={pathname === "/park" ? "bg-green-600 p-1 rounded-md cursor-pointer" : "cursor-pointer"}>
                <LetterCircleP color="white" size={26} />
            </div>
            
            <div onClick={() => goTopage("/")}
                className={"cursor-pointer"}>
                <SignOut color="white" size={26} />
            </div>
        </div>
    )
}