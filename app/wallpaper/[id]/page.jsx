import "@/styles/wallpaper.css";

import { Fragment } from "react";
import { File, FileKey2 } from "lucide-react";

import { categories } from "@/constants/data";
import { SaveFavoriteBtn } from "@/components/save-favorite-button";
import { Keyword } from "@/components/keyword";
import { DownloadButton } from "@/components/download-button";

const Wallpaper = async ({ params }) => {
    const allWallpapers = categories.reduce((acc, category) => [...acc, ...category.wallpapers], []);
    const wallpaper = allWallpapers.find(wallpaper => wallpaper.id == params.id);

    return (
        <section className="wallpaper-section">
            <div className="wallpaper-container container">
                {!wallpaper ? (
                    <p className="no-wallpaper-found">
                        There seems to be no wallpaper with the ID {params.id} in our collection.
                    </p>
                ) : (
                    <Fragment>
                        <div className="wallpaper-wrapper">
                            <div className="wallpaper-image-container">
                                <img
                                    src={wallpaper.imageUrl}
                                    alt={wallpaper.title}
                                    className="wallpaper-image"
                                />
                            </div>

                            <div className="wallpaper-content">
                                <h3 className="wallpaper-title-name">
                                    {wallpaper.title}
                                </h3>

                                <ul className="wallpaper-file-properties">
                                    <li className="wallpaper-file-property">
                                        <File className="wallpaper-file-icon" />
                                        <span className="wallpaper-file-title">File type: </span>
                                        <span className="wallpaper-file-prop">
                                            {wallpaper.imageUrl.split(".").pop().toUpperCase()}
                                        </span>
                                    </li>

                                    <li className="wallpaper-file-property">
                                        <FileKey2 className="wallpaper-file-icon" />
                                        <span className="wallpaper-file-title">License: </span>
                                        <span className="wallpaper-file-prop">
                                            Free
                                        </span>
                                    </li>
                                </ul>

                                <div className="wallpaper-actions-container">
                                    <DownloadButton imageUrl={wallpaper.imageUrl} />

                                    <SaveFavoriteBtn id={wallpaper.id} />
                                </div>

                                <div className="wallpaper-related-tags">
                                    <h3 className="wallpaper-related-tags-title">Related tags:</h3>

                                    <div className="wallpaper-tags">
                                        {wallpaper.keywords.map((keyword, index) => (
                                            <Keyword
                                                key={index}
                                                keyword={keyword}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                )}
            </div>
        </section>
    );
}

export default Wallpaper;