const easing=[.6,-.05,.01,.99]


const fadeIn={
    initial:{
         y:60,
       // x:20,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:.6,
            ease:easing
        }

    }
}

export{fadeIn}