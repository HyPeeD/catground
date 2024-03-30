import { Details } from "@/components/details";
import { categories } from "@/constants/data";

const Category = ({ params }) => {
    const category = categories.find(category => category.id == params.id);
    
    return (
        <section className="category-section">
            <div className="category-container container">
                <Details
                    data={category}
                    type="category"
                    message="No category found by given ID."
                />
            </div>
        </section>
    );
}

export default Category;