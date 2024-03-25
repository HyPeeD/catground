import "@/styles/header.css";

import Link from "next/link";
import {
    Award,
    Facebook,
    Home,
    Instagram,
    LayoutPanelLeft,
    Search,
    SunMedium
} from "lucide-react";

export const Header = () => {
    return (
        <header className="header">
            <nav className="nav container">
                <div className="logo-container">
                    <Link href="/" className="logo">
                        CatGround.
                    </Link>
                </div>

                <div className="search-container">
                    <Search className="header-search-icon" />

                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search backgrounds..."
                    />
                </div>

                <div className="header-icons">
                    <Link href="/" className="header-icon">
                        <Instagram strokeWidth={1.5} />
                    </Link>
                    <Link href="/" className="header-icon">
                        <Facebook strokeWidth={1.5} />
                    </Link>
                    <Link href="/" className="header-icon">
                        <SunMedium strokeWidth={1.5} />
                    </Link>
                </div>
            </nav>

            <ul className="menu">
                <li className="menu-item">
                    <Home className="menu-icon" strokeWidth={1.5} />
                    <span className="menu-title">Home</span>
                </li>

                <li className="menu-item">
                    <LayoutPanelLeft className="menu-icon" strokeWidth={1.5}  />
                    <span className="menu-title">Categories</span>
                </li>

                <li className="menu-item">
                    <Award className="menu-icon" strokeWidth={1.5} />
                    <span className="menu-title">Top</span>
                </li>

                <li className="menu-item">
                    <LayoutPanelLeft className="menu-icon" strokeWidth={1.5} />
                    <span className="menu-title">Categories</span>
                </li>
            </ul>
        </header>
    );
}