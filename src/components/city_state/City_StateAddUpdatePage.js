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
import {addCity_State, getCity_State,getOneCity_State, updateCity_State} from "../../repo/city_stateRepo";



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const City_StateAddUpdatePage = (props)=>{
    const [alertState, setAlertstate] = useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'center',
        severity: "success",
        message:"",
      });
    const { vertical, horizontal, open, severity, message } = alertState;
    const [errorMessages, setErrorMessages] = useState({});
    const [city_state,setCity_State] = useState(undefined)
    

    const checkErrors = () => {
        let errorList = {}
        if(city_state.city_id === "" || city_state.city_id === undefined)
{
   errorList = { ...errorList,city_id: "Required field!"}
}
if(city_state.state_id === "" || city_state.state_id === undefined)
{
   errorList = { ...errorList,state_id: "Required field!"}
}
if(city_state.created_by === "" || city_state.created_by === undefined)
{
   errorList = { ...errorList,created_by: "Required field!"}
}
if(city_state.creation_date === "" || city_state.creation_date === undefined)
{
   errorList = { ...errorList,creation_date: "Required field!"}
}
if(city_state.last_updated_by === "" || city_state.last_updated_by === undefined)
{
   errorList = { ...errorList,last_updated_by: "Required field!"}
}
if(city_state.last_update_date === "" || city_state.last_update_date === undefined)
{
   errorList = { ...errorList,last_update_date: "Required field!"}
}


        setErrorMessages(errorList)
        return errorList
    }

    useEffect(()=>{
    
      
        if(props.match.params.id) {
            getOneCity_State(props.match.params.id).then((res) => {
                setCity_State(res.data.document)
            })
        }else{
            setCity_State({})
        }
    },[props.match.params.id])
   

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        const errors = checkErrors()
        //if no errors then send data
        if(Object.keys(errors).length<1) {
            if (city_state.city_state_id) {
               var updateResponse =  await updateCity_State(city_state);
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
                var addResponse = await addCity_State(city_state)
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
        <PageTemplate title="Add/Update City_State">
            <Card>
            <CardContent>
                <form onSubmit={handleSubmit} noValidate autoComplete="off">
               
                    {(city_state!==undefined )?
                        <Grid spacing={3} container>
                           <Grid xs={12} md={6} key={"0"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.city_id}
type ={"number"}
onChange={(e)=>{setCity_State({...city_state,city_id:e.target.value});checkErrors()}}
defaultValue ={city_state.city_id}
error ={(errorMessages.city_id)?true:false}
label ={"city_id"}/>
</ Grid >
<Grid xs={12} md={6} key={"1"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.state_id}
type ={"number"}
onChange={(e)=>{setCity_State({...city_state,state_id:e.target.value});checkErrors()}}
defaultValue ={city_state.state_id}
error ={(errorMessages.state_id)?true:false}
label ={"state_id"}/>
</ Grid >
<Grid xs={12} md={6} key={"2"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.created_by}
type ={"number"}
onChange={(e)=>{setCity_State({...city_state,created_by:e.target.value});checkErrors()}}
defaultValue ={city_state.created_by}
error ={(errorMessages.created_by)?true:false}
label ={"created_by"}/>
</ Grid >
<Grid xs={12} md={6} key={"3"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.creation_date}
type ={"date"}
InputLabelProps ={{ shrink: true, }}
onChange={(e)=>{setCity_State({...city_state,creation_date:e.target.value});checkErrors()}}
defaultValue ={city_state.creation_date}
error ={(errorMessages.creation_date)?true:false}
label ={"creation_date"}/>
</ Grid >
<Grid xs={12} md={6} key={"4"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.last_updated_by}
type ={"number"}
onChange={(e)=>{setCity_State({...city_state,last_updated_by:e.target.value});checkErrors()}}
defaultValue ={city_state.last_updated_by}
error ={(errorMessages.last_updated_by)?true:false}
label ={"last_updated_by"}/>
</ Grid >
<Grid xs={12} md={6} key={"5"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.last_update_date}
type ={"date"}
InputLabelProps ={{ shrink: true, }}
onChange={(e)=>{setCity_State({...city_state,last_update_date:e.target.value});checkErrors()}}
defaultValue ={city_state.last_update_date}
error ={(errorMessages.last_update_date)?true:false}
label ={"last_update_date"}/>
</ Grid >
<Grid xs={12}  md={6} item key={"6"}>
<Grid container justify={"flex-end"} alignContent={"flex-end"}>
<Button onClick={() => history.push('/city_state')} variant={"contained"} type={"Button"} color="secondary">Cancel</Button>
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

export default withRouter(City_StateAddUpdatePage)
