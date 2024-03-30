"use client";

import "@/styles/search-modal.css";

import Link from "next/link";
import { ChevronRight, Search, X } from "lucide-react";

import { categories } from "@/constants/data";
import { useSearch } from "@/providers/search-provider";

export const SearchModal = ({ closeModal }) => {
    const { keyword, setKeyword } = useSearch();

    const outsideClose = (event) => {
        if(event.target === event.currentTarget) {
            closeModal();
        }
    };
    
    const searched = categories.map(category => category.wallpapers).flat().filter(wallpaper => wallpaper.title.toLowerCase().includes(keyword.toLowerCase()) || wallpaper.keywords.some(w => w.toLowerCase().includes(keyword.toLowerCase())))

    return (
        <div className="search-modal-wrapper" onClick={outsideClose}>
            <div className="search-modal">
                <div className="search-modal-header">
                    <Search className="modal-search-icon" />

                    <input
                        type="text"
                        placeholder="Search backgrounds"
                        className="modal-search-input"
                        value={keyword}
                        onChange={(event) => setKeyword(event.target.value)}
                    />

                    <button
                        className="search-modal-close-btn"
                        onClick={closeModal}    
                    >
                        <X className="modal-close-icon" />
                    </button>
                </div>

                <div className="search-modal-content">

                    {keyword == "" || searched.length == 0 ? (
                        <p className="search-modal-default-result">
                            No recent searches
                        </p>
                    ) : (
                        <div className="search-modal-result">
                            {searched.map((wallpaper, index) => (
                                <Link
                                    key={index}
                                    href={`/wallpaper/${wallpaper.id}`}
                                    onClick={closeModal}
                                    className="color-inherit"
                                >
                                    <div className="search-result-box">
                                        <div className="search-modal-image-container">
                                            <img
                                                src={wallpaper.imageUrl}
                                                alt="cats"
                                                className="search-modal-image"
                                            />
                                        </div>

                                        <div className="search-result-box-content">
                                            <h3 className="search-result-box-title">
                                                {wallpaper.title}
                                            </h3>

                                            <p className="search-result-box-keywords">
                                                {wallpaper.keywords.join(", ")}
                                            </p>
                                        </div>

                                        <ChevronRight className="search-result-box-icon" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}