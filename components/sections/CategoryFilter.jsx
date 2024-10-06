import style from "@/styles/CategoryFilter.module.css"
import FilterDropdown from "../elements/FilterDropdown";

const CategoryFilter = ({ setSelectedCatgory }) => {

    let filterConfig = [
        {
            filterHeading: "IDEAL FOR",
            category: ["All", "Men", "Women", "Baby & Kids"],
        },
        {
            filterHeading: "OCCASION",
            category: ["All", "Casual", "Formal", "Party", "Wedding"],
        },
        {
            filterHeading: "WORK",
            category: ["All", "Embroidered", "Printed", "Solid"],
        },
        {
            filterHeading: "FABRIC",
            category: ["All", "Cotton", "Silk", "Linen", "Wool"],
        },
        {
            filterHeading: "SEGMENT",
            category: ["All", "Luxury", "Economy", "Premium"],
        },
        {
            filterHeading: "SUITABLE FOR",
            category: ["All", "Summer", "Winter", "All Seasons"],
        },
        {
            filterHeading: "RAW MATERIALS",
            category: ["All", "Natural", "Synthetic", "Blended"],
        },
        {
            filterHeading: "PATTERN",
            category: ["All", "Floral", "Geometric", "Abstract", "Plain"],
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