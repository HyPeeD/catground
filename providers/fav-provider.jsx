"use client";

import { createContext, useContext, useState, useEffect } from "react";

const FavContext = createContext();

export const useFav = () => {
    return useContext(FavContext);
};

export const FavProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [isSaved, setIsSaved] = useState(false);
    const [favCount, setFavCount] = useState(0);

    const toggleFavorite = (id) => {
        const favoriteList = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : [];
        
        if(isSaved) {
            const newFavoriteList = favoriteList.filter(i => i != id);

            localStorage.setItem("favorites", JSON.stringify(newFavoriteList));

            setIsSaved(prevState => !prevState);

            setFavCount(newFavoriteList.length);
        } else {
            favoriteList.push(id);

            localStorage.setItem("favorites", JSON.stringify(favoriteList));

            setIsSaved(prevState => !prevState);

            setFavCount(favoriteList.length);
        }
    }

    const loadFav = (id) => {
        const favoriteList = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : [];
    
        const isSaved = favoriteList.includes(id);
    
        setIsSaved(isSaved);
    
        setFavCount(favoriteList.length);
    
        setLoading(false);
    }

    useEffect(() => {
        const favoriteList = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : [];
        
        setFavCount(favoriteList.length);
    }, []);

    return (
        <FavContext.Provider value={{ loading, isSaved, toggleFavorite, favCount, loadFav }}>
            {children}
        </FavContext.Provider>
    );
}