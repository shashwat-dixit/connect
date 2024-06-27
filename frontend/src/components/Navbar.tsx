import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";


const Navbar = () => {
  return (
    <nav className="bg-gray-900 py-4">
      <div className="container px-8 flex justify-between items-center">
        <div className="flex items-center">
          <NavLink to="/"><h1 className="text-2xl font-bold text-white p-2 hover:border focus:translate-x-1">Connect</h1></NavLink>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="">Log In</Button>
          <Button variant="default">Sign Up</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;