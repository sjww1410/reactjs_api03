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
import {addCredit_Card, getCredit_Card,getOneCredit_Card, updateCredit_Card} from "../../repo/credit_cardRepo";



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const Credit_CardAddUpdatePage = (props)=>{
    const [alertState, setAlertstate] = useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'center',
        severity: "success",
        message:"",
      });
    const { vertical, horizontal, open, severity, message } = alertState;
    const [errorMessages, setErrorMessages] = useState({});
    const [credit_card,setCredit_Card] = useState(undefined)
    

    const checkErrors = () => {
        let errorList = {}
        if(credit_card.account_id === "" || credit_card.account_id === undefined)
{
   errorList = { ...errorList,account_id: "Required field!"}
}
if(credit_card.credit_card_number === "" || credit_card.credit_card_number === undefined)
{
   errorList = { ...errorList,credit_card_number: "Required field!"}
}
if(credit_card.credit_card_type === "" || credit_card.credit_card_type === undefined)
{
   errorList = { ...errorList,credit_card_type: "Required field!"}
}
if(credit_card.expiration_date === "" || credit_card.expiration_date === undefined)
{
   errorList = { ...errorList,expiration_date: "Required field!"}
}
if(credit_card.created_by === "" || credit_card.created_by === undefined)
{
   errorList = { ...errorList,created_by: "Required field!"}
}
if(credit_card.creation_date === "" || credit_card.creation_date === undefined)
{
   errorList = { ...errorList,creation_date: "Required field!"}
}
if(credit_card.last_updated_by === "" || credit_card.last_updated_by === undefined)
{
   errorList = { ...errorList,last_updated_by: "Required field!"}
}
if(credit_card.last_update_date === "" || credit_card.last_update_date === undefined)
{
   errorList = { ...errorList,last_update_date: "Required field!"}
}


        setErrorMessages(errorList)
        return errorList
    }

    useEffect(()=>{
    
      
        if(props.match.params.id) {
            getOneCredit_Card(props.match.params.id).then((res) => {
                setCredit_Card(res.data.document)
            })
        }else{
            setCredit_Card({})
        }
    },[props.match.params.id])
   

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        const errors = checkErrors()
        //if no errors then send data
        if(Object.keys(errors).length<1) {
            if (credit_card.credit_card_id) {
               var updateResponse =  await updateCredit_Card(credit_card);
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
                var addResponse = await addCredit_Card(credit_card)
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
        <PageTemplate title="Add/Update Credit_Card">
            <Card>
            <CardContent>
                <form onSubmit={handleSubmit} noValidate autoComplete="off">
               
                    {(credit_card!==undefined )?
                        <Grid spacing={3} container>
                           <Grid xs={12} md={6} key={"0"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.account_id}
type ={"number"}
onChange={(e)=>{setCredit_Card({...credit_card,account_id:e.target.value});checkErrors()}}
defaultValue ={credit_card.account_id}
error ={(errorMessages.account_id)?true:false}
label ={"account_id"}/>
</ Grid >
<Grid xs={12} md={6} key={"1"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.credit_card_number}
type ={"text"}
onChange={(e)=>{setCredit_Card({...credit_card,credit_card_number:e.target.value});checkErrors()}}
defaultValue ={credit_card.credit_card_number}
error ={(errorMessages.credit_card_number)?true:false}
label ={"credit_card_number"}/>
</ Grid >
<Grid xs={12} md={6} key={"2"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.credit_card_type}
type ={"number"}
onChange={(e)=>{setCredit_Card({...credit_card,credit_card_type:e.target.value});checkErrors()}}
defaultValue ={credit_card.credit_card_type}
error ={(errorMessages.credit_card_type)?true:false}
label ={"credit_card_type"}/>
</ Grid >
<Grid xs={12} md={6} key={"3"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.expiration_date}
type ={"date"}
InputLabelProps ={{ shrink: true, }}
onChange={(e)=>{setCredit_Card({...credit_card,expiration_date:e.target.value});checkErrors()}}
defaultValue ={credit_card.expiration_date}
error ={(errorMessages.expiration_date)?true:false}
label ={"expiration_date"}/>
</ Grid >
<Grid xs={12} md={6} key={"4"} item>
<TextField  autoFocus fullWidth
helperText ={errorMessages.cvv}
type ={"text"}
onChange={(e)=>{setCredit_Card({...credit_card,cvv:e.target.value});checkErrors()}}
defaultValue ={credit_card.cvv}
error ={(errorMessages.cvv)?true:false}
label ={"cvv"}/>
</ Grid >
<Grid xs={12} md={6} key={"5"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.created_by}
type ={"number"}
onChange={(e)=>{setCredit_Card({...credit_card,created_by:e.target.value});checkErrors()}}
defaultValue ={credit_card.created_by}
error ={(errorMessages.created_by)?true:false}
label ={"created_by"}/>
</ Grid >
<Grid xs={12} md={6} key={"6"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.creation_date}
type ={"date"}
InputLabelProps ={{ shrink: true, }}
onChange={(e)=>{setCredit_Card({...credit_card,creation_date:e.target.value});checkErrors()}}
defaultValue ={credit_card.creation_date}
error ={(errorMessages.creation_date)?true:false}
label ={"creation_date"}/>
</ Grid >
<Grid xs={12} md={6} key={"7"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.last_updated_by}
type ={"number"}
onChange={(e)=>{setCredit_Card({...credit_card,last_updated_by:e.target.value});checkErrors()}}
defaultValue ={credit_card.last_updated_by}
error ={(errorMessages.last_updated_by)?true:false}
label ={"last_updated_by"}/>
</ Grid >
<Grid xs={12} md={6} key={"8"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.last_update_date}
type ={"date"}
InputLabelProps ={{ shrink: true, }}
onChange={(e)=>{setCredit_Card({...credit_card,last_update_date:e.target.value});checkErrors()}}
defaultValue ={credit_card.last_update_date}
error ={(errorMessages.last_update_date)?true:false}
label ={"last_update_date"}/>
</ Grid >
<Grid xs={12}  md={6} item key={"9"}>
<Grid container justify={"flex-end"} alignContent={"flex-end"}>
<Button onClick={() => history.push('/credit_card')} variant={"contained"} type={"Button"} color="secondary">Cancel</Button>
</Grid>
</Grid>
<Grid xs={12}  md={6} item key={"10"}>
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

export default withRouter(Credit_CardAddUpdatePage)
