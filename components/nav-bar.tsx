"use client";

import { Menu } from "antd";
import { ItemType } from "antd/es/menu/interface";
import { redirect, usePathname } from "next/navigation";
import { FaGraduationCap } from "react-icons/fa6";
import { IoMdAddCircleOutline } from "react-icons/io";

const NAVIGATION_ITEMS: ItemType[] = [
  {
    key: "/learn",
    label: "Learn",
    icon: <FaGraduationCap />,
  },
  {
    key: "/add",
    label: "Add",
    icon: <IoMdAddCircleOutline />,
  },
];

function NavBar() {
  const pathName = usePathname();

  function handleItemSelect({ key }: { key: string }) {
    redirect(key);
  }

  return (
    <Menu
      theme="dark"
      items={NAVIGATION_ITEMS}
      mode="horizontal"
      onSelect={handleItemSelect}
      selectedKeys={[pathName.split("/").slice(0, 2).join("/")]}
      multiple
      classNames={{
        root: "fixed right-2 left-2 bottom-4 z-40 rounded-2xl justify-evenly",
      }}
    />
  );
}

export default NavBar;
