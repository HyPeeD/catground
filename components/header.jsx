"use client";

import "@/styles/header.css";

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

import { useTheme } from "@/providers/theme-provider";
import { useFav } from "@/providers/fav-provider";
import { SearchModal } from "./search-modal";
import { useSearch } from "@/providers/search-provider";

export const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const { favCount } = useFav()
    const { searchModal, showSearchModal } = useSearch();

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
                <Link href="/" className="wrapper-link">
                    <li className="menu-item">
                        <Home className="menu-icon" strokeWidth={1.5} />
                        <span className="menu-title">Home</span>
                    </li>
                </Link>

                <Link href="/favorites" className="wrapper-link">
                    <li className="menu-item">
                        <Heart className="menu-icon" strokeWidth={1.5} />
                        <span className="menu-title">
                            Saved {favCount > 0 ? `(${favCount})` : ""}
                        </span>
                    </li>
                </Link>

                <Link href="/categories" className="wrapper-link">
                    <li className="menu-item">
                        <LayoutPanelLeft className="menu-icon" strokeWidth={1.5}  />
                        <span className="menu-title">Categories</span>
                    </li>
                </Link>

                <Link href="/top" className="wrapper-link">
                    <li className="menu-item">
                        <Award className="menu-icon" strokeWidth={1.5} />
                        <span className="menu-title">Top</span>
                    </li>
                </Link>
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