import { Fragment } from "react";

import { Category } from "@/components/category";
import { categories } from "@/constants/data";

const Home = () => {

    return (
        <Fragment>
            <section className="home-section">
                <div className="home-container container">
                    {categories.map((category, index) => (
                        <Category
                            key={index}
                            id={category.id}
                            title={category.name}
                            wallpapers={category.wallpapers}
                        />
                    ))}
                </div>
            </section>
        </Fragment>
    );
}

export default Home;