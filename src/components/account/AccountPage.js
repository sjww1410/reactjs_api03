import PageTemplate from "../templates/Template";
import AccountTable from "./AccountTable";
import React from "react";

const AccountPage = (props) => {
    return(
    <PageTemplate title="Account List">
        <AccountTable/>
    </PageTemplate>)
}
export default AccountPage;
