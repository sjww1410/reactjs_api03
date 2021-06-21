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
const GetSystem_UserColumns = (totalCount) => [
  {title: "system_user_id", field: "system_user_id",hidden:true},

  {title: "system_user_name", field: "system_user_name"},
{title: "system_user_type", field: "system_user_type"},
{title: "first_name", field: "first_name"},
{title: "middle_name", field: "middle_name"},
{title: "last_name", field: "last_name"},
{title: "created_by", field: "created_by"},
{title: "creation_date", field: "creation_date",type:"date"},
{title: "last_updated_by", field: "last_updated_by"},
{title: "last_update_date", field: "last_update_date",type:"date"},

]
export default GetSystem_UserColumns;
