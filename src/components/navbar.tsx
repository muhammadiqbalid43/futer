import Logo from "./logo";
import { ShoppingBag, User } from "lucide-react";
import Navlink from "./navlink";
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";

export default function Navbar() {
  return (
    <div className="w-full p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />

        <div className="flex gap-x-8">
          <Navlink href="/">Home</Navlink>
          <Navlink href="/about">About</Navlink>
          <Navlink href="/products">Products</Navlink>
          <Navlink href="/cart">Cart</Navlink>
        </div>

        <div className="flex items-center gap-5">
          <div className="relative cursor-pointer hover:opacity-80 transition-opacity">
            <ShoppingBag size={24} />
            <span className="absolute -top-2 -right-2 bg-coloryellow text-colorblack rounded-full text-xs w-5 h-5 flex items-center justify-center">
              3
            </span>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="outline-none">
                  <User size={24} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40 bg-white">
                <DropdownMenuGroup>
                  <DropdownMenuItem>Login</DropdownMenuItem>
                  <DropdownMenuItem>Register</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
