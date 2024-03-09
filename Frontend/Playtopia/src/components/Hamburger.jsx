import React, { useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { title: "Sign In", href: "/signUp" },
  { title: "Home", href: "/" },
  { title: "About Us", href: "/" },
  { title: "Events", href: "/" },
  { title: "Gallery", href: "/" },
  { title: "Sponsers", href: "/" },
  { title: "Contact Us", href: "/" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <header>
      <nav className="flex justify-between items-center py-8 lg:py-4 px-2">
        <div className="lg:flex hidden gap-12 text-md text-zinc-400">
        </div>
        <div className="cursor-pointer lg:hidden text-2xl text-white" onClick={toggleMenu}>
          Menu
        </div>
      </nav>
      <motion.div
        variants={menuVars}
        initial="initial"
        animate={open ? "animate" : "initial"}
        exit="exit"
        className={`fixed left-0 top-0 w-full h-screen origin-top bg-transparent backdrop-blur-lg text-white p-10 ${open ? "" : "hidden"}`}
      >
        <div className="flex h-full flex-col">
            <p className="cursor-pointer text-md text-white text-end text-2xl" onClick={toggleMenu}>
              Close
            </p>
          <motion.div
            variants={containerVars}
            initial="initial"
            animate={open ? "open" : "initial"}
            exit="initial"
            className="flex flex-col h-full justify-center font-lora items-center gap-12"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { y: "30vh" },
                  open: { y: 0 },
                }}
                className="text-2xl uppercase text-white"
              >
                <a href={link.href}>{link.title}</a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
