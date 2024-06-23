import { Button, buttonVariants } from "../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModeToggle } from "../components/ui/mode-toggle";

const NavBar = () => {
  const [isSelected, setIsSelected] = useState(null);

  const HandleClick = (button: any) => {
    setIsSelected(button);
    if (button === "home") {
      navigate("/"); // Navigate to home
    } else if (button === "teams") {
      navigate("/team"); // Navigate to teams
    }
  };
  const navigate = useNavigate();

  return (
    <div className={` bg-slate-200 flex justify-between items-center rounded-3xl border dark:border-slate-800 py-3 px-6 my-4 mx-4 dark:bg-[#1B1C1E] `}>
      <div className=" max-w-16">
        <img src="../../public/logo.jpg" alt="not available" />
      </div>
      <div className=" flex gap-3">
        <Button
          variant="secondary"
          className={`${
            isSelected === "home"
              ? "bg-white text-black"
              : buttonVariants({ variant: "secondary" })
          } `}
          onClick={() => HandleClick("home")}
        >
          Home
        </Button>
        <Button
          variant="secondary"
          className={`${
            isSelected === "teams"
              ? "text-black bg-slate-50 "
              : buttonVariants({ variant: "secondary" })
          } `}
          onClick={() => HandleClick("teams")}
        >
          Teams
        </Button>
      </div>
      <div className="flex gap-5">
        <ModeToggle />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default NavBar;
