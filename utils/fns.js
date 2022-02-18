 export function handleBackgroundColor(props){
    if(props.status==='pending') return 'bg-orange-100'
    if(props.status==='paid') return 'bg-green-100'
    if(props.status==='draft') return 'bg-gray-100'
    }
   export  function handleColor(props){
        if(props.status==='pending') return 'text-orange-500'
        if(props.status==='paid') return 'text-green-500'
        if(props.status==='draft') return 'text-black'
        }
   export function handleCircleColor(props){
            if(props.status==='pending') return 'bg-orange-500'
            if(props.status==='paid') return 'bg-green-500'
            if(props.status==='draft') return 'bg-black'
            }