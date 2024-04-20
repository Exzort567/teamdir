import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router"
import { useCallback } from "react";
import { IoMdAdd } from "react-icons/io";


const SidebarPostButton = () => {
    
    const router = useRouter();
    const loginModal = useLoginModal();

    const onClick = useCallback(() => {
        loginModal.onOpen();
    }, [loginModal])

    return (
    <div onClick={onClick}>
        <div className="mt-6 lg:hidden rounded-full h-12 w-12 p-4 flex items-center justify-center bg-red-600 bg-opacity-80 transition cursor-pointer">
        <IoMdAdd size={20} color="white"/>
        </div>
        <div className="mt-4 hidden lg:block rounded-full px-2 py-2 bg-red-600 bg-opacity-90 transition cursor-pointer hover:bg-opacity-70">
            <p className="hidden lg:block text-center font-semibold text-white text-[20px]">
                Post
            </p>
        </div>
    </div>
  )
}

export default SidebarPostButton