import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import AvailityIcon from '../images/availityIcon.jpg';
import SvgIcon from '@material-ui/core/SvgIcon';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import  CardComponent from './CardComponent';
import paranthesisCheck from './parathesisCheck';
import formsPractice from './formPractice';
import csvPractice from './csvPractice';
const App = () => {
  const Parenthesis = CardComponent(paranthesisCheck)
  const Form = CardComponent(formsPractice)
  const CSV = CardComponent(csvPractice)
  return (
  <div>
     <Grid  style={{paddingTop: '10%'}} alignContent={"center"} justify={"center"} container spacing={3}>
        <Grid item>
          <Parenthesis/>
        </Grid>
        <Grid item spacing={2}>
          <Form/>
        </Grid>
        <Grid item spacing={2}>
          {/* I encountered a weird issue when trying to complete this. Given the time constraints I ommited this. However, I would to hear about the
           solution and Node.js integration as I had planned to do this in the front-end. You can see my progress in csvPractice.js, however I only had touched the surface of it. */}
          <CSV/>
        </Grid>
      </Grid>
  </div>
  );
}

export default App;