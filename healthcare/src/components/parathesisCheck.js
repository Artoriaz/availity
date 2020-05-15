import React, { useState }  from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({ 
  container: {
    textAlign: "center", paddingTop: '25%'
  }
})
let isMatchingBrackets =  str => {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < str.length; i++) {

        if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
            stack.push(str[i]);
        }
        else {
            let last = stack.pop();
            if (str[i] !== map[last]) {return false};
        }
    }
        if (stack.length !== 0) {return false};

    return true;
}
const parenthesisChange = (e, setter) => {
    setter(e.target.value);
}
const  Example = () => {
  const {classes} = useStyles()
  const [parenthesisCheck, setparenthesisCheck] = useState('');
  return (
  
    <div style={{textAlign: "center", paddingTop: '25%'}}>
      <  >
      Please enter LISP, i.e ([]()): <br/>
        {/* Didnt add controls to limit to allowable characters due to time constraints */}
       <TextField
        variant="filled"
        value={parenthesisCheck}
        onChange={e => parenthesisChange(e, setparenthesisCheck)}
      />
    </>
    <div >  Status: {isMatchingBrackets(parenthesisCheck) ? 'true' : 'false'}</div >
    </div>
  );
}

export default Example;