  type AddressFormat={
    street:string
    city:string
    blockNumber:Number
    country:string

 }

 export type Address={
     address:AddressFormat
 }


 export type Props={
    status:string
    title:string
    debtor:string
    street:string
    country:string
    block:string
    city:string
    email:string
    issuingDate:string
    paymentDate:string
    number:number
    items:{description:string,amount:number}[]
    IssuingAddress:AddressFormat
    debtorsAddress:AddressFormat
     
}



{/* 20,Kampala Rd <br/>
                      Kampala <br/>
                    231<br/>
                    Uganda  */}