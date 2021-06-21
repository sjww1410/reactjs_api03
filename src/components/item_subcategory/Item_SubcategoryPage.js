import PageTemplate from "../templates/Template";
import Item_SubcategoryTable from "./Item_SubcategoryTable";
import React from "react";

const Item_SubcategoryPage = (props) => {
    return(
    <PageTemplate title="Item_Subcategory List">
        <Item_SubcategoryTable/>
    </PageTemplate>)
}
export default Item_SubcategoryPage;
