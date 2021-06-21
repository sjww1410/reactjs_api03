import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import DashboardPage from "./components/dashboard/DashboardPage"
import LoginPage from "./components/login/LoginForm";
import SignUpPage from "./components/login/SignUpPage";
import history from './history';


import AccountPage from "./components/account/AccountPage"
import AccountAddUpdatePage from "./components/account/AccountAddUpdatePage"
import Account_TypePage from "./components/account_type/Account_TypePage"
import Account_TypeAddUpdatePage from "./components/account_type/Account_TypeAddUpdatePage"
import AddressPage from "./components/address/AddressPage"
import AddressAddUpdatePage from "./components/address/AddressAddUpdatePage"
import Address_TypePage from "./components/address_type/Address_TypePage"
import Address_TypeAddUpdatePage from "./components/address_type/Address_TypeAddUpdatePage"
import CityPage from "./components/city/CityPage"
import CityAddUpdatePage from "./components/city/CityAddUpdatePage"
import City_StatePage from "./components/city_state/City_StatePage"
import City_StateAddUpdatePage from "./components/city_state/City_StateAddUpdatePage"
import ContactPage from "./components/contact/ContactPage"
import ContactAddUpdatePage from "./components/contact/ContactAddUpdatePage"
import Contact_TypePage from "./components/contact_type/Contact_TypePage"
import Contact_TypeAddUpdatePage from "./components/contact_type/Contact_TypeAddUpdatePage"
import Credit_CardPage from "./components/credit_card/Credit_CardPage"
import Credit_CardAddUpdatePage from "./components/credit_card/Credit_CardAddUpdatePage"
import Credit_Card_TypePage from "./components/credit_card_type/Credit_Card_TypePage"
import Credit_Card_TypeAddUpdatePage from "./components/credit_card_type/Credit_Card_TypeAddUpdatePage"
import ItemPage from "./components/item/ItemPage"
import ItemAddUpdatePage from "./components/item/ItemAddUpdatePage"
import Item_CategoryPage from "./components/item_category/Item_CategoryPage"
import Item_CategoryAddUpdatePage from "./components/item_category/Item_CategoryAddUpdatePage"
import Item_SubcategoryPage from "./components/item_subcategory/Item_SubcategoryPage"
import Item_SubcategoryAddUpdatePage from "./components/item_subcategory/Item_SubcategoryAddUpdatePage"
import Postal_CodePage from "./components/postal_code/Postal_CodePage"
import Postal_CodeAddUpdatePage from "./components/postal_code/Postal_CodeAddUpdatePage"
import PricePage from "./components/price/PricePage"
import PriceAddUpdatePage from "./components/price/PriceAddUpdatePage"
import Price_TypePage from "./components/price_type/Price_TypePage"
import Price_TypeAddUpdatePage from "./components/price_type/Price_TypeAddUpdatePage"
import StatePage from "./components/state/StatePage"
import StateAddUpdatePage from "./components/state/StateAddUpdatePage"
import System_UserPage from "./components/system_user/System_UserPage"
import System_UserAddUpdatePage from "./components/system_user/System_UserAddUpdatePage"
import System_User_TypePage from "./components/system_user_type/System_User_TypePage"
import System_User_TypeAddUpdatePage from "./components/system_user_type/System_User_TypeAddUpdatePage"
import TelephonePage from "./components/telephone/TelephonePage"
import TelephoneAddUpdatePage from "./components/telephone/TelephoneAddUpdatePage"
import Telephone_TypePage from "./components/telephone_type/Telephone_TypePage"
import Telephone_TypeAddUpdatePage from "./components/telephone_type/Telephone_TypeAddUpdatePage"
import TransactionPage from "./components/transaction/TransactionPage"
import TransactionAddUpdatePage from "./components/transaction/TransactionAddUpdatePage"
import Transaction_ItemPage from "./components/transaction_item/Transaction_ItemPage"
import Transaction_ItemAddUpdatePage from "./components/transaction_item/Transaction_ItemAddUpdatePage"
import Transaction_TypePage from "./components/transaction_type/Transaction_TypePage"
import Transaction_TypeAddUpdatePage from "./components/transaction_type/Transaction_TypeAddUpdatePage"


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                <Route path="/" exact component={LoginPage}/>
                <Route path="/signup" exact component={SignUpPage}/>
                <Route path="/dashboard" exact component={DashboardPage}/>
                <Route path="/account" exact component={AccountPage}/>
<Route path="/account/add" exact component={AccountAddUpdatePage}/>
<Route path="/account/update/:id" exact component={AccountAddUpdatePage}/>
<Route path="/account_type" exact component={Account_TypePage}/>
<Route path="/account_type/add" exact component={Account_TypeAddUpdatePage}/>
<Route path="/account_type/update/:id" exact component={Account_TypeAddUpdatePage}/>
<Route path="/address" exact component={AddressPage}/>
<Route path="/address/add" exact component={AddressAddUpdatePage}/>
<Route path="/address/update/:id" exact component={AddressAddUpdatePage}/>
<Route path="/address_type" exact component={Address_TypePage}/>
<Route path="/address_type/add" exact component={Address_TypeAddUpdatePage}/>
<Route path="/address_type/update/:id" exact component={Address_TypeAddUpdatePage}/>
<Route path="/city" exact component={CityPage}/>
<Route path="/city/add" exact component={CityAddUpdatePage}/>
<Route path="/city/update/:id" exact component={CityAddUpdatePage}/>
<Route path="/city_state" exact component={City_StatePage}/>
<Route path="/city_state/add" exact component={City_StateAddUpdatePage}/>
<Route path="/city_state/update/:id" exact component={City_StateAddUpdatePage}/>
<Route path="/contact" exact component={ContactPage}/>
<Route path="/contact/add" exact component={ContactAddUpdatePage}/>
<Route path="/contact/update/:id" exact component={ContactAddUpdatePage}/>
<Route path="/contact_type" exact component={Contact_TypePage}/>
<Route path="/contact_type/add" exact component={Contact_TypeAddUpdatePage}/>
<Route path="/contact_type/update/:id" exact component={Contact_TypeAddUpdatePage}/>
<Route path="/credit_card" exact component={Credit_CardPage}/>
<Route path="/credit_card/add" exact component={Credit_CardAddUpdatePage}/>
<Route path="/credit_card/update/:id" exact component={Credit_CardAddUpdatePage}/>
<Route path="/credit_card_type" exact component={Credit_Card_TypePage}/>
<Route path="/credit_card_type/add" exact component={Credit_Card_TypeAddUpdatePage}/>
<Route path="/credit_card_type/update/:id" exact component={Credit_Card_TypeAddUpdatePage}/>
<Route path="/item" exact component={ItemPage}/>
<Route path="/item/add" exact component={ItemAddUpdatePage}/>
<Route path="/item/update/:id" exact component={ItemAddUpdatePage}/>
<Route path="/item_category" exact component={Item_CategoryPage}/>
<Route path="/item_category/add" exact component={Item_CategoryAddUpdatePage}/>
<Route path="/item_category/update/:id" exact component={Item_CategoryAddUpdatePage}/>
<Route path="/item_subcategory" exact component={Item_SubcategoryPage}/>
<Route path="/item_subcategory/add" exact component={Item_SubcategoryAddUpdatePage}/>
<Route path="/item_subcategory/update/:id" exact component={Item_SubcategoryAddUpdatePage}/>
<Route path="/postal_code" exact component={Postal_CodePage}/>
<Route path="/postal_code/add" exact component={Postal_CodeAddUpdatePage}/>
<Route path="/postal_code/update/:id" exact component={Postal_CodeAddUpdatePage}/>
<Route path="/price" exact component={PricePage}/>
<Route path="/price/add" exact component={PriceAddUpdatePage}/>
<Route path="/price/update/:id" exact component={PriceAddUpdatePage}/>
<Route path="/price_type" exact component={Price_TypePage}/>
<Route path="/price_type/add" exact component={Price_TypeAddUpdatePage}/>
<Route path="/price_type/update/:id" exact component={Price_TypeAddUpdatePage}/>
<Route path="/state" exact component={StatePage}/>
<Route path="/state/add" exact component={StateAddUpdatePage}/>
<Route path="/state/update/:id" exact component={StateAddUpdatePage}/>
<Route path="/system_user" exact component={System_UserPage}/>
<Route path="/system_user/add" exact component={System_UserAddUpdatePage}/>
<Route path="/system_user/update/:id" exact component={System_UserAddUpdatePage}/>
<Route path="/system_user_type" exact component={System_User_TypePage}/>
<Route path="/system_user_type/add" exact component={System_User_TypeAddUpdatePage}/>
<Route path="/system_user_type/update/:id" exact component={System_User_TypeAddUpdatePage}/>
<Route path="/telephone" exact component={TelephonePage}/>
<Route path="/telephone/add" exact component={TelephoneAddUpdatePage}/>
<Route path="/telephone/update/:id" exact component={TelephoneAddUpdatePage}/>
<Route path="/telephone_type" exact component={Telephone_TypePage}/>
<Route path="/telephone_type/add" exact component={Telephone_TypeAddUpdatePage}/>
<Route path="/telephone_type/update/:id" exact component={Telephone_TypeAddUpdatePage}/>
<Route path="/transaction" exact component={TransactionPage}/>
<Route path="/transaction/add" exact component={TransactionAddUpdatePage}/>
<Route path="/transaction/update/:id" exact component={TransactionAddUpdatePage}/>
<Route path="/transaction_item" exact component={Transaction_ItemPage}/>
<Route path="/transaction_item/add" exact component={Transaction_ItemAddUpdatePage}/>
<Route path="/transaction_item/update/:id" exact component={Transaction_ItemAddUpdatePage}/>
<Route path="/transaction_type" exact component={Transaction_TypePage}/>
<Route path="/transaction_type/add" exact component={Transaction_TypeAddUpdatePage}/>
<Route path="/transaction_type/update/:id" exact component={Transaction_TypeAddUpdatePage}/>

                </Switch>
            </Router>
        )
    }
}
