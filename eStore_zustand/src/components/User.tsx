import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Button } from "./ui/button";
import { UserIcon } from "lucide-react";
import { useStore } from "@/store/store";
import { useShallow } from "zustand/shallow";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useEffect } from "react";

const User = () => {
  const { address, setAddress, fullname, userName, fetchUser } = useStore(
    useShallow((state) => ({
      fullname: state.fullName,
      userName: state.userName,
      address: state.address,
      setAddress: state.setAddress,
      fetchUser: state.fetchUser,
    }))
  );

  useEffect(() => {
    async function fetchData() {
      await fetchUser();
    }
    fetchData();
  }, [fetchUser]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"secondary"} size={"icon"}>
          <UserIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="overflow-y-scroll scrollbar-hide space-y-2 w-96 bg-background p-2 border-2 rounded-2xl">
        <div className="flex gap-2 items-center ">
          <p>{fullname}</p>
          <p className="text-xs text-gray-400 font-bold">'{userName}'</p>
        </div>

        <Label htmlFor="address">Your Address :</Label>
        <Input
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </PopoverContent>
    </Popover>
  );
};

export default User;
