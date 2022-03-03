import React from 'react'
import {Address} from '../../types/types'

const Address:React.FC<Address>=(props)=>{
    return(
        <address>
            {props.address.street}<br/>
            {props.address.city}<br/>
            {props.address.postalAddress}<br/>
            {props.address.country}<br/>
                   
        </address>
    )
}

export default Address