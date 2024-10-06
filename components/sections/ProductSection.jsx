import { useState, useEffect } from "react";
import style from "@/styles/ProductSection.module.css";
import sortBykey from "@/components/features/sortByKey";
import { categoryData } from "@/components/features/categoryData";
import CategoryFilter from "./CategoryFilter"
import ProductCard from "../elements/ProductCard";

const ProductSection = ({ productData = [] }) => {

    const [data, setData] = useState([]);
    const [isFilter, setIsFilter] = useState(false);
    const [selectedCatgory, setSelectedCatgory] = useState([]);

    useEffect(() => {
        if (selectedCatgory.length === 0) {
            setData(productData);
        } else {
            const filterData = categoryData(productData, selectedCatgory);
            setData(categoryData(productData, selectedCatgory));
        }
    }, [selectedCatgory]);

    const handleFilterSection = () => {
        setIsFilter((prev) => !prev);
    };

    const handleSelectionFilter = (e) => {
        switch (e.target.value) {
            case "RECOMMENDED":
                setData(productData);
                break;
            case "POPULAR":
                setData(() => sortBykey(productData, "rating.rate"));
                break;
            case "PRICE: LOW TO HIGH":
                setData(() => sortBykey(productData, "price"));
                break;
            case "PRICE: HIGH TO LOW":
                setData(() => {
                    let arr = sortBykey(productData, "price");
                    return arr.toReversed();
                });
                break;
            default:
                setData(productData);
        }
    };

    return (
        <div className={style.productContainer}>
            <div className={style.sectionHeader}>
                <div className={style.headerLeft}>
                    <p className={style.itemCount}>{data.length} Items</p>
                    {isFilter ? (
                        <p className={style.showFilter} onClick={handleFilterSection}>
                            &lt; Hide Filter
                        </p>
                    ) : (
                        <p className={style.showFilter} onClick={handleFilterSection}>
                            &gt; Show Filter
                        </p>
                    )}
                </div>
                <div className={style.headerRight}>
                    <select
                        name="selectedFilterType"
                        defaultValue="RECOMMENDED"
                        onChange={handleSelectionFilter}
                    >
                        <option value="RECOMMENDED">RECOMMENDED</option>
                        <option value="POPULAR">POPULAR</option>
                        <option value="PRICE: LOW TO HIGH">PRICE: LOW TO HIGH</option>
                        <option value="PRICE: HIGH TO LOW">PRICE: HIGH TO LOW</option>
                    </select>
                </div>
            </div>
            <div className={style.mainContent}>
                {isFilter && (
                    <CategoryFilter setSelectedCatgory={setSelectedCatgory} />
                )}
                <div className={style.products}>
                    {data.length ? (
                        data.map((productItem, i) => (
                            <ProductCard productInfo={productItem} key={productItem.id} />
                        ))
                    ) : (
                        <div className={style.message}>
                            <h1>SELECTED CATEGORY PRODUCT IS NOT AVAILABLE</h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductSection