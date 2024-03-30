"use client";

import "@/styles/footer.css";

import { Facebook, Instagram, MoonStar, SunMedium } from "lucide-react";
import Link from "next/link";

import { useTheme } from "@/providers/theme-provider";

export const Footer = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <footer className="footer">
            <div className="footer-container container">
                <div className="footer-icons-container">
                    <Link href="https://www.instagram.com/blackcatplex/" target="_blank" className="footer-social-link">
                        <Instagram className="footer-icon" />
                    </Link>

                    <Link href="https://www.instagram.com/blackcatplex/" target="_blank" className="footer-social-link">
                        <Facebook className="footer-icon" />
                    </Link>

                    <button className="footer-theme-btn" onClick={toggleTheme}>
                        {
                            theme === "dark" ? <MoonStar className="footer-icon" /> : <SunMedium className="footer-icon" />
                        }
                    </button>
                </div>

                <p className="footer-copy">
                    &copy; {new Date().getFullYear()} CatGround. All rights are reserved
                </p>
            </div>
        </footer>
    );
}