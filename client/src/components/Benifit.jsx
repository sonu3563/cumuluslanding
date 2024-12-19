import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, ChevronLeft ,  PartyPopper} from "lucide-react";
import nominee from "../Assets/Nominee.png";
import Benifitfamily from "../Assets/benifitfamily1.png";
import frame from "../Assets/framebackground.png";


const Benifit = () => {
    const [index, setIndex] = useState(0);
    const [activeTab, setActiveTab] = useState("families");

    const content = {
        families: [
            {
                title: "Ease of access",
                description:
                    "Securely store and share your family documents with your chosen nominees. Ensure important documents are accessible.",
                buttonText: "Get Started",
                image: Benifitfamily,
            },
            {
                title: "Efficiency",
                description: "Enhance business productivity with secure document sharing.",
                buttonText: "Explore",
                image: Benifitfamily,
            },
        ],
        business: [
            {
                title: "Efficiency",
                description: "Enhance business productivity with secure document sharing.",
                buttonText: "Explore",
                image: nominee,
            },
            {
                title: "Collaboration",
                description: "Collaborate with your team efficiently and securely.",
                buttonText: "Learn More",
                image: nominee,
            },
            {
                title: "Security",
                description: "Ensure your sensitive data is secure and accessible only to trusted members.",
                buttonText: "Start Now",
                image: nominee,
            },
            {
                title: "Control",
                description: "Maintain control over document access and permissions.",
                buttonText: "Discover",
                image: nominee,
            },
        ],
    };

    const maxSlides = activeTab === "families" ? content.families.length : content.business.length;

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % maxSlides);
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + maxSlides) % maxSlides);
    };

    const currentContent = activeTab === "families" ? content.families[index] : content.business[index];

    return (
        <div className="flex flex-col items-center justify-center h-screen md:h-auto lg:min-h-auto lg:py-4 bg-[#2E2E2E] text-white px-4"
        
        style={{
            backgroundImage: `url(${frame})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
        }}
        >
            {/* Tabs */}
            <div className="p-2 rounded-lg bg-white my-4  flex">
                <PartyPopper className="text-black mr-1 h-5"/>
                <p  className="text-black text-sx ">Benifits For You</p>
            </div>
            <div className="text-center mb-6">

                <h1 className="text-4xl font-bold mb-4">Benefits you can expect</h1>
                <div className="flex gap-6 justify-center">
                    <button
                        onClick={() => {
                            setActiveTab("families");
                            setIndex(0);
                        }}
                        className={`text-lg px-4 py-2 rounded-md ${
                            activeTab === "families" ? "bg-blue-500 text-white" : "text-gray-400"
                        }`}
                    >
                        For Families
                    </button>
                    <button
                        onClick={() => {
                            setActiveTab("business");
                            setIndex(0);
                        }}
                        className={`text-lg px-4 py-2 rounded-md ${
                            activeTab === "business" ? "bg-blue-500 text-white" : "text-gray-400"
                        }`}
                    >
                        For Business
                    </button>
                </div>
            </div>

            {/* Content Slider */}
            <div className="relative w-full max-w-5xl mx-auto flex items-center">
                {/* Main Content with Animation */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index} // Important for triggering animation
                        className="flex flex-col md:flex-row items-center justify-between gap-8 bg-[#2E2E2E] p-6 rounded-lg"
                        initial={{ opacity: 0, x: 0, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -20, scale: 0.8 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        {/* Text Section */}
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold mb-4">{currentContent.title}</h2>
                            <p className="text-gray-300 mb-4">{currentContent.description}</p>
                            <button className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition w-full md:w-36 flex justify-between items-center">
                                {currentContent.buttonText}
                                <ChevronRight className="h-5"/>
                            </button>
                        </div>

                        {/* Image Section */}
                        <div className="flex-1 h-full">
                            <img
                                src={currentContent.image}
                                alt={currentContent.title}
                                className="w-full h-auto rounded-md shadow-lg"
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center w-full max-w-xl mx-auto">
                {/* Chevron Left */}
                <button
                    onClick={handlePrev}
                    className="p-2 rounded-full hover:bg-gray-600 transition"
                >
                    <ChevronLeft size={28} />
                </button>

                {/* Chevron Right */}
                <button
                    onClick={handleNext}
                    className="p-2 rounded-full hover:bg-gray-600 transition"
                >
                    <ChevronRight size={28} />
                </button>
            </div>
        </div>
    );
};

export default Benifit;
