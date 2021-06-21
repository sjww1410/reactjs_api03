import PageTemplate from "../templates/Template";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DashCard from "./DashboardCard"

const DashboardPage = () => {

    return(
    <PageTemplate title="Dashboard">
    <Grid container direction="row"  justify="center" alignItems="center">
    <DashCard pagename='account'/>
<DashCard pagename='account_type'/>
<DashCard pagename='address'/>
<DashCard pagename='address_type'/>
<DashCard pagename='city'/>
<DashCard pagename='city_state'/>
<DashCard pagename='contact'/>
<DashCard pagename='contact_type'/>
<DashCard pagename='credit_card'/>
<DashCard pagename='credit_card_type'/>
<DashCard pagename='item'/>
<DashCard pagename='item_category'/>
<DashCard pagename='item_subcategory'/>
<DashCard pagename='postal_code'/>
<DashCard pagename='price'/>
<DashCard pagename='price_type'/>
<DashCard pagename='state'/>
<DashCard pagename='system_user'/>
<DashCard pagename='system_user_type'/>
<DashCard pagename='telephone'/>
<DashCard pagename='telephone_type'/>
<DashCard pagename='transaction'/>
<DashCard pagename='transaction_item'/>
<DashCard pagename='transaction_type'/>

    
    
    
    </Grid>
    </PageTemplate>)
}
export default DashboardPage;

