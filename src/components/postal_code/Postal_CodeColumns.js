import { Switch } from '@material-ui/core';
import React from 'react';
import Avatar from 'react-avatar';
import Input from "@material-ui/core/Input";

/*
In order to validate errors on the input field you can
override the editComponent of the Material Table to add a new material-ui Input fields
and use props for validation.
Information on material-ui Input element https://material-ui.com/api/input/
Information on material-table Props https://material-table.com/#/docs/all-props
You can also find an example of an overridden element bellow. Overriding the render method is not a must.
 */
const GetPostal_CodeColumns = (totalCount) => [
  {title: "postal_code_id", field: "postal_code_id",hidden:true},

  {title: "postal_code", field: "postal_code"},
{title: "created_by", field: "created_by"},
{title: "creation_date", field: "creation_date",type:"date"},
{title: "last_updated_by", field: "last_updated_by"},
{title: "last_update_date", field: "last_update_date",type:"date"},

]
export default GetPostal_CodeColumns;
