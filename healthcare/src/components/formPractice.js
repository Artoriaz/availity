import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'; 
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

const changeFunction = (e, setter) => {
    setter(e.target.value)
}
const handleSubmit = async (e, names,npi,business,telephone,email) => {
    e.preventDefault();
    const payload = {
        names,
        npi,
        business,
        telephone,
        email
    }
    // ideally i would add this to an actions folders in a React-Redux applications, given how simple this excercise is, I left it in the file itself.
    const results =  await axios.post('/api/callservice',payload );
}
//I prefer to use hooks as they are more lightweight and from experience, too many classes causes too much load-time. It is also being more deprecated as times goes.
const FormsPractice = () => {
    const [names, setNames] = useState('');
    const [npi, setNpi] = useState('');
    const [business, setBusiness] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    return (
       <Grid style={{paddingTop: '10%'}}alignItems="center" justify="center" container spacing={3}>
         <Grid item xs={6}>
         <form onSubmit={(e) => handleSubmit(e, names,npi,business,telephone,email)}>

            {/*ideally this text field would be in a Higher Order component, similar to the CardComponent, however in the interest in time , I omitted it. */
            }
          <><TextField  required label="First and Last name" variant="filled" value={names} onChange={e => (changeFunction(e, setNames))} /></>
         <> <TextField  required label="NPI Number" variant="filled" value={npi} onChange={ e => changeFunction(e,setNpi)} /></>
          <><TextField  required label= "Business Address" variant="filled" value={business} onChange={e =>changeFunction(e,setBusiness) } /></>
          <> <TextField  required label=" Telephone Number" variant="filled" value={telephone} onChange={e => changeFunction(e,setTelephone)} /></>
          <> <TextField   required label=" Email Address" variant="filled" value={email} onChange={e => changeFunction(e,setEmail)} /></>
         <div style={{textAlign: 'center', paddingTop: '5%'}}> <Button variant="contained" color="primary" type="submit" value="Submit" size="large"> Submit </Button></div>
        </form>
         </Grid>
       </Grid>
    )
}

export default FormsPractice;