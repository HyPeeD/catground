import "@/styles/details.css";

import Link from "next/link";
import { Fragment } from "react";

export const Details = ({ data, message, type, heading, quote }) => {
    if(type == "wallpapers") {
        return (
            <Fragment>
                {data.length == 0 ? (
                    <div className="details-not-found-wrapper">
                        <p className="details-not-found">
                            {message}
                        </p>
                    </div>
                ) : (
                    <Fragment>
                        <div className="details-headings">
                            <h3 className="details-title">
                                {heading}
                            </h3>
    
                            <p className="details-quote">
                                {quote}
                            </p>
                        </div>
    
                        <div className="details-images-wrapper">
                            {data.map((wallpaper, index) => (
                                <div className="details-image-container" key={index}>
                                    <Link href={`/wallpaper/${wallpaper.id}`}>
                                        <img
                                            src={wallpaper.imageUrl}
                                            alt={wallpaper.title}
                                            className="details-image"
                                        />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </Fragment>
                )}
            </Fragment>
        );
    }

    if(type == "category") {
        return (
            <Fragment>
                {!data ? (
                    <div className="details-not-found-wrapper">
                        <p className="details-not-found">
                            {message}
                        </p>
                    </div>
                ) : (
                    <Fragment>
                        <div className="details-headings">
                            <h3 className="details-title">
                                {data.name}
                            </h3>
    
                            <p className="details-quote">
                                {data.quote}
                            </p>
                        </div>
    
                        <div className="details-images-wrapper">
                            {data.wallpapers.map((wallpaper, index) => (
                                <div className="details-image-container" key={index}>
                                    <Link href={`/wallpaper/${wallpaper.id}`}>
                                        <img
                                            src={wallpaper.imageUrl}
                                            alt={wallpaper.title}
                                            className="details-image"
                                        />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </Fragment>
                )}
            </Fragment>
        );
    }
}