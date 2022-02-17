import React from 'react'

//types

type Props={
    
    debtor:string
    status:string
    dark:boolean
     amount:number
     number:number | string
    // handleToggleTheme:()=>void
}

// type colorFn = () => string;

//types

const Invoice:React.FC<Props>=(props)=>{

 
    function handleBackgroundColor(){
    if(props.status==='pending') return 'bg-orange-100'
    if(props.status==='paid') return 'bg-green-100'
    if(props.status==='draft') return 'bg-gray-100'
    }
    function handleColor(){
        if(props.status==='pending') return 'orange-500'
        if(props.status==='paid') return 'green-500'
        if(props.status==='draft') return 'black'
        }
        function handleCircleColor(){
            if(props.status==='pending') return 'bg-orange-500'
            if(props.status==='paid') return 'bg-green-500'
            if(props.status==='draft') return 'bg-black'
            }
    
    return(
        
            <div
            onClick={()=>console.log(props.number)}
             className={` ${props.dark? 'bg-slate-800':'bg-white'}  sm:w-11/12
              hover:cursor-pointer hover:border-solid hover:border-2 hover:border-purple-300
              mx-auto px-5 flex justify-between  py-3 my-2 h-28 rounded-md w-10/12 `}>
                
                <div className='flex flex-col justify-between' >
                    <h1 className='text-neutral-400 font-bold'>#<span
                        className= {`${props.dark ? "text-white":"text-black"}`}
                    
                    >UG{props.number}</span></h1>
                    <div>
                        <p className='opacity-50 text-sm'>Due <span>27 Aug 2022</span></p>
                        <p className='font-light'>UGX <span className=' font-bold'>{props.amount}</span></p>
                        
                    </div>
                    
                </div>
                <div className='flex justify-between flex-col  ' >
                    <h1 className={`${!props.dark? 'opacity-50':''} text-sm `}>{props.debtor}</h1>
                    <div className={`${handleBackgroundColor()} rounded-md py-2 px-4 flex`}>
                        <div className={`${handleCircleColor()} h-2 w-2 rounded-full my-auto mr-2`}></div>
                        <p className={`text-${handleColor()} font-semibold`}>{props.status}</p> 
            
                    </div>
                    
                </div>
            </div>
            
    )
}

export default Invoice