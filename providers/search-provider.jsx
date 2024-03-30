"use client";

import { createContext, useContext, useState, useEffect } from "react";

const SearchContext = createContext();

export const useSearch = () => {
    return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
    const [keyword, setKeyword] = useState("");
    const [searchModal, showSearchModal] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("scroll-lock", searchModal);
    }, [searchModal]);

    return (
        <SearchContext.Provider value={{ searchModal, showSearchModal, keyword, setKeyword }}>
            {children}
        </SearchContext.Provider>
    );
}