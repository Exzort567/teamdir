import { FaHouse, FaBell, FaUser } from "react-icons/fa6";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import { BiLogOut } from "react-icons/bi";
import SidebarPostButton from "./SidebarPostButton";

const Sidebar = () => {
  const items = [
    {
        label: 'Home',
        href: '/',
        icon: FaHouse
    },
    {
        label: 'Notifications',
        href: '/notifications',
        icon: FaBell
    },
    {
        label: 'Profile',
        href: '/users/567',
        icon: FaUser
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
                    />
                ))}
                <SidebarItem onClick={() => {}} icon={BiLogOut} label="logout"/>
                <SidebarPostButton/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;
