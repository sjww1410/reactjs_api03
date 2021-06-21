import PageTemplate from "../templates/Template";
import TelephoneTable from "./TelephoneTable";
import React from "react";

const TelephonePage = (props) => {
    return(
    <PageTemplate title="Telephone List">
        <TelephoneTable/>
    </PageTemplate>)
}
export default TelephonePage;
