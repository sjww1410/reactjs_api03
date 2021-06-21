import {withRouter} from "react-router";
import TextField from "@material-ui/core/TextField";
import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import {Switch} from "@material-ui/core";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import PageTemplate from "../templates/Template";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputLabel from '@material-ui/core/InputLabel';
import history from '../../history';
import {addTransaction_Item, getTransaction_Item,getOneTransaction_Item, updateTransaction_Item} from "../../repo/transaction_itemRepo";



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const Transaction_ItemAddUpdatePage = (props)=>{
    const [alertState, setAlertstate] = useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'center',
        severity: "success",
        message:"",
      });
    const { vertical, horizontal, open, severity, message } = alertState;
    const [errorMessages, setErrorMessages] = useState({});
    const [transaction_item,setTransaction_Item] = useState(undefined)
    

    const checkErrors = () => {
        let errorList = {}
        if(transaction_item.transaction_id === "" || transaction_item.transaction_id === undefined)
{
   errorList = { ...errorList,transaction_id: "Required field!"}
}
if(transaction_item.item_id === "" || transaction_item.item_id === undefined)
{
   errorList = { ...errorList,item_id: "Required field!"}
}
if(transaction_item.created_by === "" || transaction_item.created_by === undefined)
{
   errorList = { ...errorList,created_by: "Required field!"}
}
if(transaction_item.creation_date === "" || transaction_item.creation_date === undefined)
{
   errorList = { ...errorList,creation_date: "Required field!"}
}
if(transaction_item.last_updated_by === "" || transaction_item.last_updated_by === undefined)
{
   errorList = { ...errorList,last_updated_by: "Required field!"}
}
if(transaction_item.last_update_date === "" || transaction_item.last_update_date === undefined)
{
   errorList = { ...errorList,last_update_date: "Required field!"}
}


        setErrorMessages(errorList)
        return errorList
    }

    useEffect(()=>{
    
      
        if(props.match.params.id) {
            getOneTransaction_Item(props.match.params.id).then((res) => {
                setTransaction_Item(res.data.document)
            })
        }else{
            setTransaction_Item({})
        }
    },[props.match.params.id])
   

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        const errors = checkErrors()
        //if no errors then send data
        if(Object.keys(errors).length<1) {
            if (transaction_item.transaction_item_id) {
               var updateResponse =  await updateTransaction_Item(transaction_item);
               if(updateResponse && updateResponse.data){
                   if(updateResponse.data.code===1){
                    setAlertstate({ open: true, vertical: 'bottom', horizontal: 'center', message:"Record Updated Successfully.",severity:"success"});
                     }else{
                    setAlertstate({ open: true, vertical: 'bottom', horizontal: 'center', message:"Updated failed. Please try again.", severity:"error"});
                }
               }else{
                setAlertstate({ open: true, vertical: 'bottom', horizontal: 'center', message:"Updated failed. Please try again.", severity:"error"});
            }
                //props.history.push("/");
            } else {
                var addResponse = await addTransaction_Item(transaction_item)
                if(addResponse && addResponse.data){
                    if(addResponse.data.code===1){
                        setAlertstate({ open: true, vertical: 'bottom', horizontal: 'center', message:"Record Added Successfully.",severity:"success"});
                          }else{
                        setAlertstate({ open: true, vertical: 'bottom', horizontal: 'center', message:"Add Record Failed. Please try again.",severity:"error"});
                    }
                }else{
                    setAlertstate({ open: true, vertical: 'bottom', horizontal: 'center', message:"Add Record Failed. Please try again.",severity:"error"});
                    
                }
                //props.history.push("/");
            }
        }else{
            setAlertstate({ open: true, vertical: 'bottom', horizontal: 'center', message:"Invalid Data. Please try again.",severity:"error"});
                   
        } 
    }catch (e) {
        setAlertstate({ open: true, vertical: 'bottom', horizontal: 'center', message:"Invalid Data. Please try again.",severity:"error"});
            
    }

    }
   
    const hideAlert = () => {
        setAlertstate({ ...alertState, open: false });
      };
    return(
        <PageTemplate title="Add/Update Transaction_Item">
            <Card>
            <CardContent>
                <form onSubmit={handleSubmit} noValidate autoComplete="off">
               
                    {(transaction_item!==undefined )?
                        <Grid spacing={3} container>
                           <Grid xs={12} md={6} key={"0"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.transaction_id}
type ={"number"}
onChange={(e)=>{setTransaction_Item({...transaction_item,transaction_id:e.target.value});checkErrors()}}
defaultValue ={transaction_item.transaction_id}
error ={(errorMessages.transaction_id)?true:false}
label ={"transaction_id"}/>
</ Grid >
<Grid xs={12} md={6} key={"1"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.item_id}
type ={"number"}
onChange={(e)=>{setTransaction_Item({...transaction_item,item_id:e.target.value});checkErrors()}}
defaultValue ={transaction_item.item_id}
error ={(errorMessages.item_id)?true:false}
label ={"item_id"}/>
</ Grid >
<Grid xs={12} md={6} key={"2"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.created_by}
type ={"number"}
onChange={(e)=>{setTransaction_Item({...transaction_item,created_by:e.target.value});checkErrors()}}
defaultValue ={transaction_item.created_by}
error ={(errorMessages.created_by)?true:false}
label ={"created_by"}/>
</ Grid >
<Grid xs={12} md={6} key={"3"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.creation_date}
type ={"date"}
InputLabelProps ={{ shrink: true, }}
onChange={(e)=>{setTransaction_Item({...transaction_item,creation_date:e.target.value});checkErrors()}}
defaultValue ={transaction_item.creation_date}
error ={(errorMessages.creation_date)?true:false}
label ={"creation_date"}/>
</ Grid >
<Grid xs={12} md={6} key={"4"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.last_updated_by}
type ={"number"}
onChange={(e)=>{setTransaction_Item({...transaction_item,last_updated_by:e.target.value});checkErrors()}}
defaultValue ={transaction_item.last_updated_by}
error ={(errorMessages.last_updated_by)?true:false}
label ={"last_updated_by"}/>
</ Grid >
<Grid xs={12} md={6} key={"5"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.last_update_date}
type ={"date"}
InputLabelProps ={{ shrink: true, }}
onChange={(e)=>{setTransaction_Item({...transaction_item,last_update_date:e.target.value});checkErrors()}}
defaultValue ={transaction_item.last_update_date}
error ={(errorMessages.last_update_date)?true:false}
label ={"last_update_date"}/>
</ Grid >
<Grid xs={12}  md={6} item key={"6"}>
<Grid container justify={"flex-end"} alignContent={"flex-end"}>
<Button onClick={() => history.push('/transaction_item')} variant={"contained"} type={"Button"} color="secondary">Cancel</Button>
</Grid>
</Grid>
<Grid xs={12}  md={6} item key={"7"}>
<Grid container justify={"flex-end"} alignContent={"flex-end"}>
<Button variant={"contained"} color="primary"  type={"Sumbit"}>Save</Button>
</Grid>
</Grid>

                        </Grid>
                        :null}
                </form>
                
               
                </CardContent>
                </Card>
                <Snackbar autoHideDuration={6000}
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={hideAlert}
                    key={vertical + horizontal}>
                       <Alert onClose={hideAlert}  severity={severity}>
                       {message}
                    </Alert>
                </Snackbar>
        </PageTemplate>
    )
}

export default withRouter(Transaction_ItemAddUpdatePage)
