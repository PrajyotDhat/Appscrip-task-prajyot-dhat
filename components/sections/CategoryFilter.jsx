import style from "@/styles/CategoryFilter.module.css"
import FilterDropdown from "../elements/FilterDropdown";

const CategoryFilter = ({setSelectedCatgory}) => {
    
    let filterConfig = [
        {
            filterHeading: "CLOTHINGS",
            category: ["men's clothing", "women's clothing", "kid's clothing"],
        },
        {
            filterHeading: "JEWELERYS",
            category: ["Rings", "Bracelets", "Ear rings"],
        },
        {
            filterHeading: "ELECTRONICS",
            category: ["Monitor", "SSD", "laptop bag"],
        },
        {
            filterHeading: "MOBILE",
            category: ["Samsung", "Motorola"],
        },
        {
            filterHeading: "LAPTOPS",
            category: ["Asus", "HP", "Dell", "Alienware", "Lenovo"],
        },
    ];

    return (
        <div className={style.categoryFilter}>
            {filterConfig.map((item, i) => (
                <FilterDropdown
                    filterHead={item.filterHeading}
                    filterTopics={item.category}
                    setSelectedCatgory={setSelectedCatgory}
                    key={i}
                />
            ))}
        </div>
    )
}

export default CategoryFilter