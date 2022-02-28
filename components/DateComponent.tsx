// import * as React from 'react';
 import TextField from '@mui/material/TextField';
 import AdapterDateFns from '@mui/lab/AdapterDateFns';
 import LocalizationProvider from '@mui/lab/LocalizationProvider';
 import DatePicker from '@mui/lab/DatePicker';
// import MobileDatePicker from '@mui/lab/MobileDatePicker';
 import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
// import Stack from '@mui/material/Stack';

// export default function ResponsiveDatePickers() {
//   const [value, setValue] = React.useState(new Date());
//   console.log('value',value)

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <Stack spacing={3}>
//         {/* <MobileDatePicker
//           label="For mobile"
//           value={value}
//           onChange={(newValue) => {
//             setValue(newValue);
//           }}
//           renderInput={(params) => <TextField {...params} />}
//         />*/}
//         <DesktopDatePicker
//           label="For desktop"
//           value={value}
//           minDate={new Date('2017-01-01')}
//           onChange={(newValue) => {
//             setValue(newValue);
//           }}
//           renderInput={(params) => <TextField {...params} />}
//         /> 
//         {/* <DatePicker
//           disableFuture
//           label="Responsive"
//           openTo="year"
//           views={['year', 'month', 'day']}
//           value={value}
//           onChange={(newValue) => {
//             setValue(newValue);
//           }}
//           renderInput={(params) => <TextField {...params} />}
//         /> */}
//       </Stack>
//     </LocalizationProvider>
//   );
// }

    import React from 'react'
//    import DatePicker from 'react-datepicker';
  type Props={
      terms:{desc:string,value:number}[]
    //   date:string
      changeDate:(e:any)=>void
      changeTerms:(e:any)=>void
      date:Date
    //   k:(e:any)=>void
  }
 
 const DateComponent:React.FC<Props>=(props)=>{
 
    return(
        <div className="flex  w-full md:w-9/12 sm:w-11/12  px-3 mt-2 mb-0 justify-between">
        <div className="w-1/2 md:w-7/12 z-40  ">
            <label className= 'dark:text-white text-gray-700  block  mb-2  tracking-wide  text-sm'>
                Invoice Date
            </label>
            {/* <input className= 'dark:text-white dark:bg-slate-800 text-gray-700 appearance-none block w-full hover:cursor-pointer  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
            // value={props.date} 
            // onChange={props.changeDate} 
         
            
            type="date" /> */}
            <div  className= 'dark:text-white dark:bg-slate-800 text-gray-700'>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
            // label="For desktop"
            value={props.date}
            minDate={new Date()}
            onChange={props.changeDate}
            renderInput={(params) => <TextField {...params} />}
          />
          </LocalizationProvider>
          </div>
        </div>
         <div className="w-1/3 md:w-4/12   mb-6 ">
            <label className= 'dark:text-white text-gray-700  block mb-2 tracking-wide text-sm'>
               <span className='hidden sm:inline'>Payment</span>  Terms
            </label>
            <select className=  'dark:text-white dark:bg-slate-800 text-gray-700 appearance-none block w-full hover:cursor-pointer   border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
            onChange={props.changeTerms}
            >
                                {props.terms.map(term=>  <option key={term.value} value={term.value}>{term.desc}</option>)}
                                                     
            </select>
        </div>
       
        
   </div>
    )
}
export default DateComponent