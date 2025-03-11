"use client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import Logo from "../../assets/PrepLogo.png";
import Name from "../../assets/PrepNameW.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle "Get Started" button click
  const handleGetStarted = () => {
    navigate("/auth");
  };

  // Function to handle logout
  const handleLogout = () => {
    // Add your logout logic here (e.g., clear token, session, etc.)
    localStorage.removeItem("token"); // Example: Clear token from localStorage
    setIsLoggedIn(false); // Update login status
    navigate("/"); // Redirect to home page
  };

  // Check if the user is logged in (e.g., on component mount)
  useEffect(() => {
    const token = localStorage.getItem("token"); // Example: Check for token in localStorage
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center group cursor-pointer">
              <div className="flex-shrink-0">
                <img
                  src={Logo}
                  alt="Aspirio Logo"
                  className="h-12 w-12 object-contain transform transition-all duration-300 group-hover:rotate-12 rounded-2xl"
                />
              </div>
              <div className="ml-3">
                <img
                  src={Name}
                  alt="Aspirio"
                  className="h-8 object-contain transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
              Testimonials
            </a>
            {isLoggedIn ? (
              // Logout Button (shown when user is logged in)
              <button
                onClick={handleLogout}
                className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Logout
              </button>
            ) : (
              // Get Started Button (shown when user is not logged in)
              <button
                onClick={handleGetStarted}
                className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Get Started
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}