import "@/styles/footer.css";

import { Facebook, Instagram, Sun } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container container">
                <div className="footer-icons-container">
                    <Link href="/" className="footer-social-link">
                        <Instagram className="footer-icon" />
                    </Link>

                    <Link href="/" className="footer-social-link">
                        <Facebook className="footer-icon" />
                    </Link>

                    <button className="footer-theme-btn">
                        <Sun className="footer-icon" />
                    </button>
                </div>

                <p className="footer-copy">
                    &copy; {new Date().getFullYear()} CatGround. All rights are reserved
                </p>
            </div>
        </footer>
    );
}