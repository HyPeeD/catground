import { Details } from "@/components/details";
import { categories } from "@/constants/data";

const Top = () => {
    const topWallpapers = [];

    categories.forEach(category => {
        category.wallpapers.forEach(wallpaper => {
            if(wallpaper.isTop) {
                topWallpapers.push(wallpaper);
            }
        });
    });

    return (
        <section className="top-section">
            <div className="top-container container">
                <Details
                    data={topWallpapers}
                    message="We are working on this section right now..."
                    type="wallpapers"
                    heading="Top"
                    quote="Me and my cat talk shit about you"
                />
            </div>
        </section>
    );
}

export default Top;