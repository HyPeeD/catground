import "@/styles/category.css";

import { ArrowRight, Heart } from "lucide-react";

export const Category = ({ title, id, images }) => {
    return (
        <div className="category-container">
            <div className="category-header">
                <h3 className="category-title">{title}</h3>
                <p className="category-link">
                    See more
                    <ArrowRight className="category-link-arrow" />
                </p>
            </div>


            <div className="category-scroll-container">
                <div className="category-grid">
                    {images.map((image, index) => (
                        <div
                            className="category-image-container"
                            data-order={`category-grid-col-${index + 1}`}
                            key={index}
                        >
                            <img
                                src={image}
                                alt="wallpaper"
                                className="category-image"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}