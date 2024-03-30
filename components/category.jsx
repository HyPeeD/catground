import "@/styles/category.css";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Category = ({ title, id, wallpapers }) => {
    return (
        <div className="category-container">
            <Link href={`/categories/${id}`} className="wrapper-link">
                <div className="category-header">
                    <h3 className="category-title">{title}</h3>
                    <p className="category-link">
                        See more
                        <ArrowRight className="category-link-arrow" />
                    </p>
                </div>
            </Link>


            <div className="category-scroll-container">
                <div className="category-grid">
                    {wallpapers.map((wallpaper, index) => (
                        <div
                            key={index}
                            title={wallpaper.title}
                            className="category-image-container"
                            data-order={`category-grid-col-${index + 1}`}
                        >
                            <Link href={`/wallpaper/${wallpaper.id}`} className="wrapper-link">
                                <img
                                    src={wallpaper.imageUrl}
                                    alt="wallpaper"
                                    className="category-image"
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}