import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-white">Connect</h1>
          <div className="hidden md:flex space-x-4">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
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