import { useState } from 'react'
import style from "@/styles/Dropdown.module.css"

const FilterDropdown = ({ filterHead, filterTopics, setSelectedCatgory }) => {

    const [isActive, setIsActive] = useState(false);

    const handleActive = () => {
        setIsActive(!isActive)
    }

    const handleCheckList = (e) => {
        const { id, checked } = e.target;
        if (checked) {
            setSelectedCatgory((prev) => [...prev, id]);
        } else {
            setSelectedCatgory((prev) => prev.filter((item) => item !== id));
        }
    }

    return (
        <div className={style.dropdownContainer}>
            <div className={style.dropdownHeader} onClick={handleActive}>
                <h1 >
                    {filterHead}
                </h1>
                {isActive
                    ? <span><img src="/icons/upArrow.svg" /></span>
                    : <span ><img src="/icons/downArrow.svg" /></span>
                }
            </div>
            <p>ALL</p>
            {isActive && filterTopics?.map((topic, i) =>
                <div className={style.dropdownItem} key={i}>
                    <input type='checkbox' onChange={handleCheckList} id={topic} />
                    <label htmlFor={topic}>{topic}</label>
                </div>
            )}
        </div>
    )
}

export default FilterDropdown