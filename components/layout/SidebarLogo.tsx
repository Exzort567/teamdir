import { useRouter } from "next/router"
import Image from 'next/image';
import  logo  from "@/images/logovalo.png"


const SidebarLogo = () => {
  const router = useRouter();

  return (
    <div onClick={() => router.push('/')} className="rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-opacity-10 cursor-pointer transition">
        <Image src={logo} alt="logo" width={24} height={28} />
    </div>
  )
}

export default SidebarLogo