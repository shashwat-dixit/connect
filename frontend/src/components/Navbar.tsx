import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  const linkVariants = {
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
    tap: { scale: 0.95 },
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 py-4 shadow-lg">
      <div className="container px-8 mx-auto">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink to="/">
              <h1 className="text-3xl font-bold text-white p-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Connect
              </h1>
            </NavLink>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/login">
              <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
                <Button variant="ghost" className="text-white hover:text-blue-400">Log In</Button>
              </motion.div>
            </NavLink>
            <NavLink to="/signup">
              <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
                <Button variant="default" className="bg-blue-600 hover:bg-blue-700">Sign Up</Button>
              </motion.div>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center space-y-4 mt-4">
                <NavLink to="/login" onClick={toggleMenu}>
                  <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
                    <Button variant="ghost" className="w-full text-white hover:text-blue-400">Log In</Button>
                  </motion.div>
                </NavLink>
                <NavLink to="/signup" onClick={toggleMenu}>
                  <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
                    <Button variant="default" className="w-full bg-blue-600 hover:bg-blue-700">Sign Up</Button>
                  </motion.div>
                </NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;