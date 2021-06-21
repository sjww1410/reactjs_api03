import PageTemplate from "../templates/Template";
import ItemTable from "./ItemTable";
import React from "react";

const ItemPage = (props) => {
    return(
    <PageTemplate title="Item List">
        <ItemTable/>
    </PageTemplate>)
}
export default ItemPage;
