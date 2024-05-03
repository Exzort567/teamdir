import { FaHouse, FaBell, FaUser } from "react-icons/fa6";
import useCurrentUser from "@/hooks/useCurrentUser";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import { BiLogOut } from "react-icons/bi";
import SidebarPostButton from "./SidebarPostButton";
import { signOut } from "next-auth/react";


const Sidebar = () => {
  const { data: currentUser} = useCurrentUser();
  const items = [
    {
        label: 'Home',
        href: '/',
        icon: FaHouse
    },
    {
        label: 'Notifications',
        href: '/notifications',
        icon: FaBell,
        auth: true
    },
    {
        label: 'Profile',
        href: `/users/${currentUser?.id}`,
        icon: FaUser,
        auth: true
    }
  ];
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
        <div className="flex flex-col items-end">
            <div className="space-y-2 lg:w-[230px]">
                <SidebarLogo/>
                {items.map((item, index) => (
                    <SidebarItem 
                    key={index} 
                    href={item.href} 
                    label={item.label}
                    icon={item.icon}
                    auth={item.auth}
                    />
                ))}
                {currentUser && (
                    <SidebarItem onClick={() => signOut()} icon={BiLogOut} label="logout"/>
                )}
                <SidebarPostButton/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;
