import { useUserContext } from "../useContext/context";

interface SidebarProps {
}

const Sidebar = ({ }: SidebarProps) => {
  const value = useUserContext()
  console.log(value.user?.isStudent);
  
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md text-3xl">
      <div>{value.user?.name}</div>
      <div>student Status : {String(value.user?.isStudent)}</div>
    </div>
  );
};

export default Sidebar;
