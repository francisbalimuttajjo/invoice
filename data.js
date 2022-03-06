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
const categories =['all','pending','paid','draft']
const invoices=[
 {status:'pending',debtor:'bafra mayanja',amount:5000,number:64564,InvoiceDueDate:"2 Aug 2022" },
 {status:'draft',debtor:'francis mayanja',amount:200000,number:6645464,InvoiceDueDate:"2 Sept 2022"},
 {status:'pending',debtor:'francis mayanja',amount:2000,number:6645994,InvoiceDueDate:"1 Jan 2022"},
 {status:'paid',debtor:'francis mayanja',amount:2000,number:6645864,InvoiceDueDate:"2 Aug 2022"},
 {status:'pending',debtor:'francis mayanja',amount:2100,number:6695464,InvoiceDueDate:"2 Aug 2022" },
 {status:'pending',debtor:'francis mayanja',amount:21000,number:6695474,InvoiceDueDate:"2 Aug 2022" },
 {status:'draft',debtor:'bafra mayanja',amount:2900,number:66954649,InvoiceDueDate:"2 Aug 2022" },
 {status:'draft',debtor:'bafra mayanja',amount:29070,number:669580 ,InvoiceDueDate:"2 Aug 2022" }
]

function getValues(props){
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
return values
}

export {invoice,getValues,categories,invoices}

