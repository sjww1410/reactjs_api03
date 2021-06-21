import PageTemplate from "../templates/Template";
import CityTable from "./CityTable";
import React from "react";

const CityPage = (props) => {
    return(
    <PageTemplate title="City List">
        <CityTable/>
    </PageTemplate>)
}
export default CityPage;
