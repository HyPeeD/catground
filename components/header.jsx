"use client";

import "@/styles/header.css";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
    Award,
    Heart,
    Home,
    LayoutPanelLeft,
    MoonStar,
    Search,
    SunMedium
} from "lucide-react";

import { SearchModal } from "./search-modal";

export const Header = () => {
    const [theme, setTheme] = useState("light");
    const [searchModal, showSearchModal] = useState(false);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        if(theme === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [theme]);

    useEffect(() => {
        document.body.classList.toggle("scroll-lock", searchModal);
    }, [searchModal]);

    return (
        <header className="header">
            <nav className="nav container">
                <div className="logo-container">
                    <Link href="/" className="logo">
                        CatGround.
                    </Link>
                </div>

                <button
                    className="search-container mobile-hidden"
                    onClick={() => showSearchModal(true)}
                >
                    <Search className="header-search-icon" />

                    <span className="search-placeholder">
                        Search backgrounds...
                    </span>
                </button>

                <div className="header-icons">
                    <button className="header-icon" onClick={toggleTheme}>
                        {
                            theme === "dark" ? <MoonStar /> : <SunMedium />
                        }
                    </button>
                </div>
            </nav>

            <ul className="menu">
                <li className="menu-item">
                    <Home className="menu-icon" strokeWidth={1.5} />
                    <span className="menu-title">Home</span>
                </li>

                <li className="menu-item">
                    <Heart className="menu-icon" strokeWidth={1.5} />
                    <span className="menu-title">Saved (3)</span>
                </li>

                <li className="menu-item">
                    <LayoutPanelLeft className="menu-icon" strokeWidth={1.5}  />
                    <span className="menu-title">Categories</span>
                </li>

                <li className="menu-item">
                    <Award className="menu-icon" strokeWidth={1.5} />
                    <span className="menu-title">Top</span>
                </li>
            </ul>

            <div className="container desktop-hidden">
                <button
                    className="search-container desktop-hidden"
                    onClick={() => showSearchModal(true)}
                >
                    <Search className="header-search-icon" />

                    <span className="search-placeholder">
                        Search backgrounds...
                    </span>
                </button>
            </div>

            {searchModal && (
                <SearchModal
                    closeModal={() => showSearchModal(false)}
                />
            )}
        </header>
    );
}