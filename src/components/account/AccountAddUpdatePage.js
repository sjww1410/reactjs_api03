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
import {addAccount, getAccount,getOneAccount, updateAccount} from "../../repo/accountRepo";



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const AccountAddUpdatePage = (props)=>{
    const [alertState, setAlertstate] = useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'center',
        severity: "success",
        message:"",
      });
    const { vertical, horizontal, open, severity, message } = alertState;
    const [errorMessages, setErrorMessages] = useState({});
    const [account,setAccount] = useState(undefined)
    

    const checkErrors = () => {
        let errorList = {}
        if(account.account_number === "" || account.account_number === undefined)
{
   errorList = { ...errorList,account_number: "Required field!"}
}
if(account.password === "" || account.password === undefined)
{
   errorList = { ...errorList,password: "Required field!"}
}
if(account.created_by === "" || account.created_by === undefined)
{
   errorList = { ...errorList,created_by: "Required field!"}
}
if(account.creation_date === "" || account.creation_date === undefined)
{
   errorList = { ...errorList,creation_date: "Required field!"}
}
if(account.last_updated_by === "" || account.last_updated_by === undefined)
{
   errorList = { ...errorList,last_updated_by: "Required field!"}
}
if(account.last_update_date === "" || account.last_update_date === undefined)
{
   errorList = { ...errorList,last_update_date: "Required field!"}
}


        setErrorMessages(errorList)
        return errorList
    }

    useEffect(()=>{
    
      
        if(props.match.params.id) {
            getOneAccount(props.match.params.id).then((res) => {
                setAccount(res.data.document)
            })
        }else{
            setAccount({})
        }
    },[props.match.params.id])
   

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        const errors = checkErrors()
        //if no errors then send data
        if(Object.keys(errors).length<1) {
            if (account.account_id) {
               var updateResponse =  await updateAccount(account);
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
                var addResponse = await addAccount(account)
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
        <PageTemplate title="Add/Update Account">
            <Card>
            <CardContent>
                <form onSubmit={handleSubmit} noValidate autoComplete="off">
               
                    {(account!==undefined )?
                        <Grid spacing={3} container>
                           <Grid xs={12} md={6} key={"0"} item>
<TextField  autoFocus fullWidth
helperText ={errorMessages.account_type}
type ={"number"}
onChange={(e)=>{setAccount({...account,account_type:e.target.value});checkErrors()}}
defaultValue ={account.account_type}
error ={(errorMessages.account_type)?true:false}
label ={"account_type"}/>
</ Grid >
<Grid xs={12} md={6} key={"1"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.account_number}
type ={"text"}
onChange={(e)=>{setAccount({...account,account_number:e.target.value});checkErrors()}}
defaultValue ={account.account_number}
error ={(errorMessages.account_number)?true:false}
label ={"account_number"}/>
</ Grid >
<Grid xs={12} md={6} key={"2"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.password}
type ={"number"}
onChange={(e)=>{setAccount({...account,password:e.target.value});checkErrors()}}
defaultValue ={account.password}
error ={(errorMessages.password)?true:false}
label ={"password"}/>
</ Grid >
<Grid xs={12} md={6} key={"3"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.created_by}
type ={"number"}
onChange={(e)=>{setAccount({...account,created_by:e.target.value});checkErrors()}}
defaultValue ={account.created_by}
error ={(errorMessages.created_by)?true:false}
label ={"created_by"}/>
</ Grid >
<Grid xs={12} md={6} key={"4"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.creation_date}
type ={"date"}
InputLabelProps ={{ shrink: true, }}
onChange={(e)=>{setAccount({...account,creation_date:e.target.value});checkErrors()}}
defaultValue ={account.creation_date}
error ={(errorMessages.creation_date)?true:false}
label ={"creation_date"}/>
</ Grid >
<Grid xs={12} md={6} key={"5"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.last_updated_by}
type ={"number"}
onChange={(e)=>{setAccount({...account,last_updated_by:e.target.value});checkErrors()}}
defaultValue ={account.last_updated_by}
error ={(errorMessages.last_updated_by)?true:false}
label ={"last_updated_by"}/>
</ Grid >
<Grid xs={12} md={6} key={"6"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.last_update_date}
type ={"date"}
InputLabelProps ={{ shrink: true, }}
onChange={(e)=>{setAccount({...account,last_update_date:e.target.value});checkErrors()}}
defaultValue ={account.last_update_date}
error ={(errorMessages.last_update_date)?true:false}
label ={"last_update_date"}/>
</ Grid >
<Grid xs={12}  md={6} item key={"7"}>
<Grid container justify={"flex-end"} alignContent={"flex-end"}>
<Button onClick={() => history.push('/account')} variant={"contained"} type={"Button"} color="secondary">Cancel</Button>
</Grid>
</Grid>
<Grid xs={12}  md={6} item key={"8"}>
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

export default withRouter(AccountAddUpdatePage)
