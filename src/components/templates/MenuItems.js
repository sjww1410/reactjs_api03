import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TableChartIcon from '@material-ui/icons/TableChart';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import history from './../../history';

export const mainListItems = (
  <div>
    <ListItem button onClick={() => history.push('/dashboard')}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button onClick={() => history.push('/account')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Account" />
</ListItem><ListItem button onClick={() => history.push('/account_type')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Account_Type" />
</ListItem><ListItem button onClick={() => history.push('/address')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Address" />
</ListItem><ListItem button onClick={() => history.push('/address_type')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Address_Type" />
</ListItem><ListItem button onClick={() => history.push('/city')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="City" />
</ListItem><ListItem button onClick={() => history.push('/city_state')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="City_State" />
</ListItem><ListItem button onClick={() => history.push('/contact')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Contact" />
</ListItem><ListItem button onClick={() => history.push('/contact_type')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Contact_Type" />
</ListItem><ListItem button onClick={() => history.push('/credit_card')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Credit_Card" />
</ListItem><ListItem button onClick={() => history.push('/credit_card_type')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Credit_Card_Type" />
</ListItem><ListItem button onClick={() => history.push('/item')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Item" />
</ListItem><ListItem button onClick={() => history.push('/item_category')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Item_Category" />
</ListItem><ListItem button onClick={() => history.push('/item_subcategory')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Item_Subcategory" />
</ListItem><ListItem button onClick={() => history.push('/postal_code')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Postal_Code" />
</ListItem><ListItem button onClick={() => history.push('/price')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Price" />
</ListItem><ListItem button onClick={() => history.push('/price_type')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Price_Type" />
</ListItem><ListItem button onClick={() => history.push('/state')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="State" />
</ListItem><ListItem button onClick={() => history.push('/system_user')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="System_User" />
</ListItem><ListItem button onClick={() => history.push('/system_user_type')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="System_User_Type" />
</ListItem><ListItem button onClick={() => history.push('/telephone')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Telephone" />
</ListItem><ListItem button onClick={() => history.push('/telephone_type')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Telephone_Type" />
</ListItem><ListItem button onClick={() => history.push('/transaction')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Transaction" />
</ListItem><ListItem button onClick={() => history.push('/transaction_item')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Transaction_Item" />
</ListItem><ListItem button onClick={() => history.push('/transaction_type')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Transaction_Type" />
</ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button onClick={() => history.push('/signup')}>
      <ListItemIcon>
        <LockOpenIcon />
      </ListItemIcon>
      <ListItemText primary="SignUp" />
    </ListItem>
    <ListItem button onClick={() => history.push('/')}>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
   
  </div>
);
