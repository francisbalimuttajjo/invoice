const invoice={
    debtor:'francis bafra mayanja' ,
    invoiceNumber:456353,
    debtorsAddress:{
        street:'Kampala Rd',
                 city:' Makindye',
                  postalAddress:  '2E',
                  country:' Uganda'
    },
    issuingDate:'Thu Mar 27 2022 16:55:42 GMT+0300',
    status:'pending', description:'Re-branding', InvoiceNumber:674345,
    terms:7,
    issuingAddress:{
    street:'19 Mobutu Roard',
    
    country:'Uganda', postalAddress:'411', city:'Kampala' 
   
},paymentDate:'21 Jan 2022',email:'bafra@gmail.com',issuingDate:'01 Jan 2022',items:[
 
   

    { qty: 4, price: 41, name: "iik",errorName:'',errorQty:'',errorPrice:'' },
    { qty: 13, price: 1, name: "jjj",errorName:'',errorQty:'',errorPrice:'' },
    { qty: 7, price: 40, name: "eggs",errorName:'',errorQty:'',errorPrice:'' },
    { qty: 20, price: 911, name: "eggs",errorName:'',errorQty:'',errorPrice:'' },
    { qty: 11, price: 230, name: "eggs",errorName:'',errorQty:'',errorPrice:'' },
    { qty: 4, price: 100, name: "eggs2",errorName:'',errorQty:'',errorPrice:'' },
    { qty: 6, price: 200, name: "eggs",errorName:'',errorQty:'',errorPrice:'' }
   
],
}


const values={
    issuerStreet:props.invoice.issuingAddress.street,
    issuerCity:props.invoice.issuingAddress.city,
    issuerCountry:props.invoice.issuingAddress.country,
    receiverStreet:props.invoice.debtorsAddress.street,
    receiverCity:props.invoice.debtorsAddress.city,
    receiverCountry:props.invoice.debtorsAddress.country,
    receiverName:props.invoice.debtor,
    receiverEmail:props.invoice.email,
    description:props.invoice.description,
    terms:props.invoice.terms,
     issuingDate:props.invoice.issuingDate,
    receiverPostalAddress:props.invoice.debtorsAddress.postalAddress,
    issuerPostalAddress:props.invoice.issuingAddress.postalAddress,

}
export {invoice,values}

