import PageTemplate from "../templates/Template";
import AddressTable from "./AddressTable";
import React from "react";

const AddressPage = (props) => {
    return(
    <PageTemplate title="Address List">
        <AddressTable/>
    </PageTemplate>)
}
export default AddressPage;
