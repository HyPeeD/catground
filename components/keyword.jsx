"use client";

import { Search } from "lucide-react";

import { useSearch } from "@/providers/search-provider";

export const Keyword = ({ keyword }) => {
    const { showSearchModal, setKeyword } = useSearch();

    const searchByKeyword = () => {
        setKeyword(keyword);
        showSearchModal(true);
    }

    return (
        <div className="wallpaper-tag" onClick={searchByKeyword}>
            <Search className="search-keyword-icon" />
            <span className="wallpaper-keyword">
                {keyword}
            </span>
        </div>
    );
}