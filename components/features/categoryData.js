export const categoryData = (data, keys) => {
    let filterdata = data?.filter((item) => keys?.includes(item.category));
    return filterdata ? filterdata : null;
};
