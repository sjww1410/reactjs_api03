import PageTemplate from "../templates/Template";
import Telephone_TypeTable from "./Telephone_TypeTable";
import React from "react";

const Telephone_TypePage = (props) => {
    return(
    <PageTemplate title="Telephone_Type List">
        <Telephone_TypeTable/>
    </PageTemplate>)
}
export default Telephone_TypePage;
