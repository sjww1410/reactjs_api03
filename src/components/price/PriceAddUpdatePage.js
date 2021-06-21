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
import {addPrice, getPrice,getOnePrice, updatePrice} from "../../repo/priceRepo";



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const PriceAddUpdatePage = (props)=>{
    const [alertState, setAlertstate] = useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'center',
        severity: "success",
        message:"",
      });
    const { vertical, horizontal, open, severity, message } = alertState;
    const [errorMessages, setErrorMessages] = useState({});
    const [price,setPrice] = useState(undefined)
    

    const checkErrors = () => {
        let errorList = {}
        if(price.item_id === "" || price.item_id === undefined)
{
   errorList = { ...errorList,item_id: "Required field!"}
}
if(price.active_flag === "" || price.active_flag === undefined)
{
   errorList = { ...errorList,active_flag: "Required field!"}
}
if(price.start_date === "" || price.start_date === undefined)
{
   errorList = { ...errorList,start_date: "Required field!"}
}
if(price.amount === "" || price.amount === undefined)
{
   errorList = { ...errorList,amount: "Required field!"}
}
if(price.created_by === "" || price.created_by === undefined)
{
   errorList = { ...errorList,created_by: "Required field!"}
}
if(price.creation_date === "" || price.creation_date === undefined)
{
   errorList = { ...errorList,creation_date: "Required field!"}
}
if(price.last_updated_by === "" || price.last_updated_by === undefined)
{
   errorList = { ...errorList,last_updated_by: "Required field!"}
}
if(price.last_update_date === "" || price.last_update_date === undefined)
{
   errorList = { ...errorList,last_update_date: "Required field!"}
}


        setErrorMessages(errorList)
        return errorList
    }

    useEffect(()=>{
    
      
        if(props.match.params.id) {
            getOnePrice(props.match.params.id).then((res) => {
                setPrice(res.data.document)
            })
        }else{
            setPrice({})
        }
    },[props.match.params.id])
   

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        const errors = checkErrors()
        //if no errors then send data
        if(Object.keys(errors).length<1) {
            if (price.price_id) {
               var updateResponse =  await updatePrice(price);
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
                var addResponse = await addPrice(price)
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
        <PageTemplate title="Add/Update Price">
            <Card>
            <CardContent>
                <form onSubmit={handleSubmit} noValidate autoComplete="off">
               
                    {(price!==undefined )?
                        <Grid spacing={3} container>
                           <Grid xs={12} md={6} key={"0"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.item_id}
type ={"number"}
onChange={(e)=>{setPrice({...price,item_id:e.target.value});checkErrors()}}
defaultValue ={price.item_id}
error ={(errorMessages.item_id)?true:false}
label ={"item_id"}/>
</ Grid >
<Grid xs={12} md={6} key={"1"} item>
<TextField  autoFocus fullWidth
helperText ={errorMessages.price_type}
type ={"number"}
onChange={(e)=>{setPrice({...price,price_type:e.target.value});checkErrors()}}
defaultValue ={price.price_type}
error ={(errorMessages.price_type)?true:false}
label ={"price_type"}/>
</ Grid >
<Grid xs={12} md={6} key={"2"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.active_flag}
type ={"text"}
onChange={(e)=>{setPrice({...price,active_flag:e.target.value});checkErrors()}}
defaultValue ={price.active_flag}
error ={(errorMessages.active_flag)?true:false}
label ={"active_flag"}/>
</ Grid >
<Grid xs={12} md={6} key={"3"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.start_date}
type ={"date"}
InputLabelProps ={{ shrink: true, }}
onChange={(e)=>{setPrice({...price,start_date:e.target.value});checkErrors()}}
defaultValue ={price.start_date}
error ={(errorMessages.start_date)?true:false}
label ={"start_date"}/>
</ Grid >
<Grid xs={12} md={6} key={"4"} item>
<TextField  autoFocus fullWidth
helperText ={errorMessages.end_date}
type ={"date"}
InputLabelProps ={{ shrink: true, }}
onChange={(e)=>{setPrice({...price,end_date:e.target.value});checkErrors()}}
defaultValue ={price.end_date}
error ={(errorMessages.end_date)?true:false}
label ={"end_date"}/>
</ Grid >
<Grid xs={12} md={6} key={"5"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.amount}
type ={"number"}
onChange={(e)=>{setPrice({...price,amount:e.target.value});checkErrors()}}
defaultValue ={price.amount}
error ={(errorMessages.amount)?true:false}
label ={"amount"}/>
</ Grid >
<Grid xs={12} md={6} key={"6"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.created_by}
type ={"number"}
onChange={(e)=>{setPrice({...price,created_by:e.target.value});checkErrors()}}
defaultValue ={price.created_by}
error ={(errorMessages.created_by)?true:false}
label ={"created_by"}/>
</ Grid >
<Grid xs={12} md={6} key={"7"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.creation_date}
type ={"date"}
InputLabelProps ={{ shrink: true, }}
onChange={(e)=>{setPrice({...price,creation_date:e.target.value});checkErrors()}}
defaultValue ={price.creation_date}
error ={(errorMessages.creation_date)?true:false}
label ={"creation_date"}/>
</ Grid >
<Grid xs={12} md={6} key={"8"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.last_updated_by}
type ={"number"}
onChange={(e)=>{setPrice({...price,last_updated_by:e.target.value});checkErrors()}}
defaultValue ={price.last_updated_by}
error ={(errorMessages.last_updated_by)?true:false}
label ={"last_updated_by"}/>
</ Grid >
<Grid xs={12} md={6} key={"9"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.last_update_date}
type ={"date"}
InputLabelProps ={{ shrink: true, }}
onChange={(e)=>{setPrice({...price,last_update_date:e.target.value});checkErrors()}}
defaultValue ={price.last_update_date}
error ={(errorMessages.last_update_date)?true:false}
label ={"last_update_date"}/>
</ Grid >
<Grid xs={12}  md={6} item key={"10"}>
<Grid container justify={"flex-end"} alignContent={"flex-end"}>
<Button onClick={() => history.push('/price')} variant={"contained"} type={"Button"} color="secondary">Cancel</Button>
</Grid>
</Grid>
<Grid xs={12}  md={6} item key={"11"}>
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

export default withRouter(PriceAddUpdatePage)
