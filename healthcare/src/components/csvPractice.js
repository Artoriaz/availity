// import React, {useState} from 'react';
// import Dropzone, {useDropzone} from 'react-dropzone';
// import { makeStyles } from '@material-ui/core/styles';
// import CSVReader from 'react-csv-reader';
// import { CSVDownload } from "react-csv";
// const useStyles = makeStyles({
//   dropzone: {
//     border: '1px dotted grey',
//     textAlign: 'center',
//     fontSize: '20px',
//     fontWeight: 'bold',
//     borderRadius: '5px',
//     padding: '2em',
//     marginTop: '5px',
//     backgroundColor: '#d3d3d3 ',
//   },
//   container: {
//     textAlign: 'center',
//     padding: '15px',
//     margin: '10px auto',
//   },
//   csv: {
//     padding: '10px',
//     display: 'block',
//     margin: '15px auto',
//     border: '1px solid #d3d3d3',
//     borderRadius: '5px',
//   }
// });

// const handleFile = (data, setter) => {
//   const csvHeaders = [["names", "userID", "version"]];
//   let listofCompanies =[];
//   console.log(data);
//   data.map(item => {
//     if(listofCompanies.includes(item.insurance_company)) {
//       return;
//     }
//     listofCompanies.push(item.insurance_company);
//   });
//   data.map(item => {
//     let tempArray = [];
//         if(!tempArray.includes(item.first_and_last_name)) {

//         }
//         tempArray.push(item.first_and_last_name);
//         tempArray.push(item.user_id);
//         tempArray.push(item.version)
//       csvHeaders.push(tempArray);
//   })
//   console.log('csv headers', csvHeaders);
//   console.log(listofCompanies,' LIST');
//   setter(csvHeaders);
  
// }

// const parserOptions = {
//   header: true,
//   dynamicTyping: true,
//   skipEmptyLines: true,
//   transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
// };

// const MyDropZone = () => {
//   const classes = useStyles();
//   const [csvFile, setcsvFile ] = useState();
//   return (
//     <div className={classes.container}>
//       <CSVReader
//       label="Please input a CSV"
//       onFileLoaded={data => handleFile(data, setcsvFile)}
//       parserOptions={parserOptions}
//     />
//     {csvFile ? (<CSVDownload data={csvFile} target="_blank" />) : null}
//     </div>
//   )
// }


// export default MyDropZone;