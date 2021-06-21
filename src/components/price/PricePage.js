import PageTemplate from "../templates/Template";
import PriceTable from "./PriceTable";
import React from "react";

const PricePage = (props) => {
    return(
    <PageTemplate title="Price List">
        <PriceTable/>
    </PageTemplate>)
}
export default PricePage;
