import PageTemplate from "../templates/Template";
import System_UserTable from "./System_UserTable";
import React from "react";

const System_UserPage = (props) => {
    return(
    <PageTemplate title="System_User List">
        <System_UserTable/>
    </PageTemplate>)
}
export default System_UserPage;
