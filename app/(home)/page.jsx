import { Fragment } from "react";

import { Category } from "@/components/category";

const Home = () => {
    const images = [
        "/cat-1.jpg",
        "/cat-2.jpg",
        "/cat-3.jpg",
        "/cat-4.png",
        "/cat-2.jpg",
        "/cat-1.jpg",
        "/cat-4.png",
        "/cat-3.jpg"
    ];

    return (
        <Fragment>
            <section className="home-section">
                <div className="home-container container">
                    <Category
                        title="Cute Cats"
                        id="398e989afce1"
                        images={images}
                    />

                    <Category
                        title="Orange Cats"
                        id="398e989afce1"
                        images={images}
                    />

                    <Category
                        title="Funny Cats"
                        id="398e989afce1"
                        images={images}
                    />
                </div>
            </section>
        </Fragment>
    );
}

export default Home;