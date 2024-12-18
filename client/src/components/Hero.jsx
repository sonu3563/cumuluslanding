// Install Tailwind CSS and Lucide Icons first by running:
// npm install tailwindcss lucide-react
// Then set up Tailwind CSS according to the official docs: https://tailwindcss.com/docs/installation

import { useState } from 'react';
import { ArrowBigUpDashIcon, Menu, MousePointerClickIcon, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from "../Assets/logo.png"
import { motion, AnimatePresence } from "framer-motion";


function Hero() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuVariants = {
        hidden: { height: 0, opacity: 0 },
        visible: { height: "15rem", opacity: 1 },
        exit: { height: 0, opacity: 0 },
    };

    return (
        <div className="font-sans">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full  text-white shadow-2xl z-50 bg-gray-900 ">
                <div className="w-full max-w-full mx-auto px-4 py-3 flex justify-around items-center">
                    {/* Logo */}
                    <div ><img src={logo} alt="" className='h-10' /></div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        <Link to="features" smooth={true} duration={500} className="hover:underline cursor-pointer text-lg">Features</Link>
                        <Link to="how-it-works" smooth={true} duration={500} className="hover:underline cursor-pointer text-lg">How it works</Link>
                        <Link to="testimonials" smooth={true} duration={500} className="hover:underline cursor-pointer text-lg">Testimonials</Link>
                        <Link to="pricing" smooth={true} duration={500} className="hover:underline cursor-pointer text-lg">Plans & Pricing</Link>

                        <Link to="pricing" smooth={true} duration={500} className=" cursor-pointer text-lg p-1 px-2 border text-blue-600 bg-white rounded-lg hover:font-semibold">Get Started</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={menuVariants}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="sm:hidden bg-gray-800 text-white space-y-1 overflow-hidden"
                        >
                            <div className="md:hidden bg-gray-900 text-white space-y-1 ">
                                <Link to="features" smooth={true} duration={500} className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">Features</Link>
                                <Link to="how-it-works" smooth={true} duration={500} className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">How it works</Link>
                                <Link to="testimonials" smooth={true} duration={500} className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">Testimonials</Link>
                                <Link to="pricing" smooth={true} duration={500} className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">Plans & Pricing</Link>
                                <div className=' flex items-end  p-2'>
                                    <Link to="pricing" smooth={true} duration={500} className="w-full cursor-pointer text-center  text-xl py-2 px-4 border text-blue-600 bg-white rounded-lg hover:font-semibold">Get Started</Link>
                                </div>

                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Hero Section */}
            <header className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center text-center font-serif">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 md:w-[50%]">The Secure Digital Vault for Your Life and Beyond</h1>
                <p className="text-lg md:text-xl mb-6">Securely store and share your important documents with your chosen nominees.</p>
                <div className="flex space-x-4">
                    <button className="bg-transparent border px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-500">Learn More</button>
                    <button className="bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-700">Sign Up Now</button>
                </div>
            </header>




            {/* // FEATURES */}
            <div className='flex flex-col justify-center items-center text-center mt-8 '>

                <div className='flex bg-blue-200 p-1 text-blue-700 px-2 rounded-lg gap-x-1'>
                    <MousePointerClickIcon />   Cumulus's Features
                </div>

                <div className='mt-4 p-1 sm:p-4'>
                    <h2 className=' text-3xl sm:text-5xl font-serif font-semibold'>Secure Your Legacy With Cumulus</h2>
                </div>

                <div className=' w-[95%] sm:w-1/2'>
                    <p className='text-lg text-gray-500 '>Securely store and share your family documents with your chosen nominees. Securely store
                        and share your family documents with your chosen nominees.
                    </p>
                </div>

                <div className='p-2 px-3  bg-blue-500 text-white rounded-xl mt-4 shadow-xl'>
                    <button className=''>Get Started</button> 
                </div>
            </div>


        </div>



    );
}

export default Hero;
