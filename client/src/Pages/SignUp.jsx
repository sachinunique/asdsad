import { TextInput, Label, HelperText ,FloatingLabel,Button} from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      SignUp
      <div className="flex p-7 flex-col md:flex-row justify-between ">
        {/* left side */}
        <div className="p-2 flex-1">
          <h1 className="font-semibold text-3xl">
            Sachin_Blog Login and SignUp Page For Admin...
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            non autem accusantium a magni in qui necessitatibus odit quasi
            voluptatem quas expedita, vel exercitationem quae eum laudantium
            facilis nemo sunt?
          </p>
        </div>
        {/* right side */}
        <div className=" flex-1">
          <form className="flex flex-col gap-3">
            <div className="p-1">
              <Label>User Name</Label>
              <TextInput
              type="text"
              placeholder="Your Name"
              id="username"
               />
            </div>

            <div className="p-1">
              <Label>Email</Label>
              <TextInput
              type="email"
              placeholder="email"
              id="email"
               />
            </div>

            <div className="p-1">
              <Label value="Your Password">Your Password</Label>
              <TextInput
              type="password"
              placeholder="password"
              id="password"
               />
            </div>
             <Button color="cyan" type="submit" className="">SignUp</Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
          <span>Have an Account !</span>
         <Link to={'/login'}  className="text-blue-500">Sign In</Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
