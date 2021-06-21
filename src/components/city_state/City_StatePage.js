import PageTemplate from "../templates/Template";
import City_StateTable from "./City_StateTable";
import React from "react";

const City_StatePage = (props) => {
    return(
    <PageTemplate title="City_State List">
        <City_StateTable/>
    </PageTemplate>)
}
export default City_StatePage;
