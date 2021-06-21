import PageTemplate from "../templates/Template";
import System_User_TypeTable from "./System_User_TypeTable";
import React from "react";

const System_User_TypePage = (props) => {
    return(
    <PageTemplate title="System_User_Type List">
        <System_User_TypeTable/>
    </PageTemplate>)
}
export default System_User_TypePage;
