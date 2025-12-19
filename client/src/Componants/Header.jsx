import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  TextInput,
} from "flowbite-react";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  const path = useLocation().pathname;
  return (
    <>
     <div className="">
       <Navbar fluid rounded >
        <NavbarBrand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Sachin<span>Blog</span>
          </span>
        </NavbarBrand>
          
        <div className="flex gap-4">
          <Dropdown 
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" className="hidden" img="" rounded />}
          >
            <DropdownHeader className="flex justify-between w-full">
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </DropdownHeader>
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Earnings</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown>
        
          <NavbarToggle />
        </div>
       

        <NavbarCollapse>
          <NavbarLink active={path === "/"} as={"div"} className="text-black">
            <Link to={"/"}>Home</Link>
          </NavbarLink>
          <NavbarLink active={path === "/about"} as={"div"}>
            <Link to={"/about"} className="text-black">
              Abouts
            </Link>
          </NavbarLink>
          <NavbarLink active={path === "/projects"} as={"div"}>
            <Link to={"/projects"}>Projects</Link>
          </NavbarLink>
          <NavbarLink active={path === "/blogs"} as={"div"}>
            <Link to={"blogs"}>Blogs</Link>
          </NavbarLink>
          <Button className="bg-purple-400 lg:hidden" outline>
            <Link to={"/login"}>SignIn</Link>
          </Button>
        </NavbarCollapse>
        <div className="flex gap-2">
          <TextInput
            className="hidden lg:inline"
            type="text"
            placeholder="Search..."
            rightIcon={FaSearch}
          />
          <Button className="bg-purple-400 hidden lg:inline ">
            <Link to={"/signup"}>SignIn</Link>
          </Button>
        </div>
      </Navbar>
     </div>
    </>
  );
};

export default Header;
