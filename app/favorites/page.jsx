"use client";

import { useEffect, useState } from "react";

import { Details } from "@/components/details";
import { categories } from "@/constants/data";

const Favorites = () => {
    const [loading, setLoading] = useState(true);
    const [wallpapers, setWallpapers] = useState([]);

    useEffect(() => {
        const favoriteList = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : [];

        const filteredWallpapers = categories.reduce((acc, category) => {
            const matchingWallpapers = category.wallpapers.filter(wallpaper => favoriteList.includes(wallpaper.id));
            return acc.concat(matchingWallpapers);
        }, []);

        setWallpapers(filteredWallpapers);
        setLoading(false);
    }, []);

    return (
        <section className="favorites-section">
            <div className="favorites-container container">
                {!loading && (
                    <Details
                        data={wallpapers}
                        type="wallpapers"
                        message="Your favorites collection is currently empty. Start adding wallpapers to your favorites to personalize your experience!"
                        heading="Favorites"
                        quote='"Cats rule the world." - Jim Davis'
                    />
                )}
            </div>
        </section>
    );
}

export default Favorites;