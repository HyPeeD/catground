"use client";

import { useFav } from "@/providers/fav-provider";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

export const SaveFavoriteBtn = ({ id }) => {
    const { loading, isSaved, toggleFavorite, loadFav } = useFav();

    useEffect(() => {
        loadFav(id);
    }, []);

    if(loading) return;

    return (
        <button className="save-favorite-btn" onClick={() => toggleFavorite(id)}>
            <Heart className="save-btn-icon" style={{
                fill: isSaved ? "#D20062" : "none",
                color: isSaved ? "#D20062" : "var(--foreground-muted)"
            }} />
            {isSaved ? "Remove from favorites" : "Save to favorites"}
        </button>
    );
}