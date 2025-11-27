import type { FC } from "react";
import { FiUpload, FiFolder, FiUsers, FiSettings } from "react-icons/fi";

interface SidebarProps {
  onSelect: (menu: string) => void;
}

const Sidebar: FC<SidebarProps> = ({ onSelect }) => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4">
      <button
        className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-100 text-blue-600"
        onClick={() => onSelect("upload")}
      >
        <FiUpload /> Upload
      </button>

      <button
        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100"
        onClick={() => onSelect("assets")}
      >
        <FiFolder /> My Assets
      </button>

      <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
        <FiUsers /> Shared with me
      </button>

      <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
        <FiSettings /> Settings
      </button>
    </aside>
  );
};

export default Sidebar;
