import PageTemplate from "../templates/Template";
import StateTable from "./StateTable";
import React from "react";

const StatePage = (props) => {
    return(
    <PageTemplate title="State List">
        <StateTable/>
    </PageTemplate>)
}
export default StatePage;
