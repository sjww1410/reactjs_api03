import PageTemplate from "../templates/Template";
import Postal_CodeTable from "./Postal_CodeTable";
import React from "react";

const Postal_CodePage = (props) => {
    return(
    <PageTemplate title="Postal_Code List">
        <Postal_CodeTable/>
    </PageTemplate>)
}
export default Postal_CodePage;
