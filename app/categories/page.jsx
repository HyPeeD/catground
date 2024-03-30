import "@/styles/categories.css";

import Link from "next/link";
import { ChevronRight, Image } from "lucide-react";

import { categories } from "@/constants/data";

const Categories = () => {
    return (
        <section className="categories-section">
            <div className="categories-container container">
                <div className="mb-4">
                    <h3 className="fs-900 text-center">
                        All Categories
                    </h3>

                    <p className="fs-400 text-center foreground-muted">
                        "I was normal 3 cats ago!"
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    {categories.map((category, index) => (
                        <Link
                            key={index}
                            className="color-inherit"
                            href={`/categories/${category.id}`}
                        >
                            <div className="flex items-center gap-2 p-2 on-surface rounded">
                                <div className="h-full w-max grid grid-cols-2 gap-1">
                                    {category.wallpapers.slice(0, 4).map((wallpaper, index) => (
                                        <div className="w-10 h-10" key={index}>
                                            <img
                                                src={wallpaper.imageUrl}
                                                alt={wallpaper.title}
                                                className="w-full h-full object-cover rounded"
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col gap-1 justify-between foreground-muted flex-1 overflow-hidden">
                                    <h3 className="fs-400 fw-medium py-1 px-2 rounded-full on-surface-alt w-max truncate">
                                        {category.name}
                                    </h3>

                                    <p className="fs-300 truncate">
                                        {category.quote}
                                    </p>

                                    <div className="flex items-center gap-1">
                                        <Image className="w-4 h-4" />
                                        <span className="fs-300 fw-medium truncate">
                                            {`(${category.wallpapers.length}) Wallpapers`}
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <ChevronRight className="w-4 h-4 foreground-muted" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Categories;