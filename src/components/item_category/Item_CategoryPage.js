import PageTemplate from "../templates/Template";
import Item_CategoryTable from "./Item_CategoryTable";
import React from "react";

const Item_CategoryPage = (props) => {
    return(
    <PageTemplate title="Item_Category List">
        <Item_CategoryTable/>
    </PageTemplate>)
}
export default Item_CategoryPage;
