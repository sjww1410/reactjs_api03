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
import {addSystem_User, getSystem_User,getOneSystem_User, updateSystem_User} from "../../repo/system_userRepo";



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const System_UserAddUpdatePage = (props)=>{
    const [alertState, setAlertstate] = useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'center',
        severity: "success",
        message:"",
      });
    const { vertical, horizontal, open, severity, message } = alertState;
    const [errorMessages, setErrorMessages] = useState({});
    const [system_user,setSystem_User] = useState(undefined)
    

    const checkErrors = () => {
        let errorList = {}
        if(system_user.system_user_name === "" || system_user.system_user_name === undefined)
{
   errorList = { ...errorList,system_user_name: "Required field!"}
}
if(system_user.system_user_type === "" || system_user.system_user_type === undefined)
{
   errorList = { ...errorList,system_user_type: "Required field!"}
}
if(system_user.created_by === "" || system_user.created_by === undefined)
{
   errorList = { ...errorList,created_by: "Required field!"}
}
if(system_user.creation_date === "" || system_user.creation_date === undefined)
{
   errorList = { ...errorList,creation_date: "Required field!"}
}
if(system_user.last_updated_by === "" || system_user.last_updated_by === undefined)
{
   errorList = { ...errorList,last_updated_by: "Required field!"}
}
if(system_user.last_update_date === "" || system_user.last_update_date === undefined)
{
   errorList = { ...errorList,last_update_date: "Required field!"}
}


        setErrorMessages(errorList)
        return errorList
    }

    useEffect(()=>{
    
      
        if(props.match.params.id) {
            getOneSystem_User(props.match.params.id).then((res) => {
                setSystem_User(res.data.document)
            })
        }else{
            setSystem_User({})
        }
    },[props.match.params.id])
   

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        const errors = checkErrors()
        //if no errors then send data
        if(Object.keys(errors).length<1) {
            if (system_user.system_user_id) {
               var updateResponse =  await updateSystem_User(system_user);
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
                var addResponse = await addSystem_User(system_user)
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
        <PageTemplate title="Add/Update System_User">
            <Card>
            <CardContent>
                <form onSubmit={handleSubmit} noValidate autoComplete="off">
               
                    {(system_user!==undefined )?
                        <Grid spacing={3} container>
                           <Grid xs={12} md={6} key={"0"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.system_user_name}
type ={"text"}
onChange={(e)=>{setSystem_User({...system_user,system_user_name:e.target.value});checkErrors()}}
defaultValue ={system_user.system_user_name}
error ={(errorMessages.system_user_name)?true:false}
label ={"system_user_name"}/>
</ Grid >
<Grid xs={12} md={6} key={"1"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.system_user_type}
type ={"number"}
onChange={(e)=>{setSystem_User({...system_user,system_user_type:e.target.value});checkErrors()}}
defaultValue ={system_user.system_user_type}
error ={(errorMessages.system_user_type)?true:false}
label ={"system_user_type"}/>
</ Grid >
<Grid xs={12} md={6} key={"2"} item>
<TextField  autoFocus fullWidth
helperText ={errorMessages.first_name}
type ={"text"}
onChange={(e)=>{setSystem_User({...system_user,first_name:e.target.value});checkErrors()}}
defaultValue ={system_user.first_name}
error ={(errorMessages.first_name)?true:false}
label ={"first_name"}/>
</ Grid >
<Grid xs={12} md={6} key={"3"} item>
<TextField  autoFocus fullWidth
helperText ={errorMessages.middle_name}
type ={"text"}
onChange={(e)=>{setSystem_User({...system_user,middle_name:e.target.value});checkErrors()}}
defaultValue ={system_user.middle_name}
error ={(errorMessages.middle_name)?true:false}
label ={"middle_name"}/>
</ Grid >
<Grid xs={12} md={6} key={"4"} item>
<TextField  autoFocus fullWidth
helperText ={errorMessages.last_name}
type ={"text"}
onChange={(e)=>{setSystem_User({...system_user,last_name:e.target.value});checkErrors()}}
defaultValue ={system_user.last_name}
error ={(errorMessages.last_name)?true:false}
label ={"last_name"}/>
</ Grid >
<Grid xs={12} md={6} key={"5"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.created_by}
type ={"number"}
onChange={(e)=>{setSystem_User({...system_user,created_by:e.target.value});checkErrors()}}
defaultValue ={system_user.created_by}
error ={(errorMessages.created_by)?true:false}
label ={"created_by"}/>
</ Grid >
<Grid xs={12} md={6} key={"6"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.creation_date}
type ={"date"}
InputLabelProps ={{ shrink: true, }}
onChange={(e)=>{setSystem_User({...system_user,creation_date:e.target.value});checkErrors()}}
defaultValue ={system_user.creation_date}
error ={(errorMessages.creation_date)?true:false}
label ={"creation_date"}/>
</ Grid >
<Grid xs={12} md={6} key={"7"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.last_updated_by}
type ={"number"}
onChange={(e)=>{setSystem_User({...system_user,last_updated_by:e.target.value});checkErrors()}}
defaultValue ={system_user.last_updated_by}
error ={(errorMessages.last_updated_by)?true:false}
label ={"last_updated_by"}/>
</ Grid >
<Grid xs={12} md={6} key={"8"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.last_update_date}
type ={"date"}
InputLabelProps ={{ shrink: true, }}
onChange={(e)=>{setSystem_User({...system_user,last_update_date:e.target.value});checkErrors()}}
defaultValue ={system_user.last_update_date}
error ={(errorMessages.last_update_date)?true:false}
label ={"last_update_date"}/>
</ Grid >
<Grid xs={12}  md={6} item key={"9"}>
<Grid container justify={"flex-end"} alignContent={"flex-end"}>
<Button onClick={() => history.push('/system_user')} variant={"contained"} type={"Button"} color="secondary">Cancel</Button>
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

export default withRouter(System_UserAddUpdatePage)
