// import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';
import{AddressFormat} from '../components/home/types/home'


interface Invoice {
  debtor: string;
  status: string;
  description: string;
  issuingDate: string;
  paymentDate: string;
  email: string;
  invoiceNumber:number,
  terms:number,
  debtorsAddress:AddressFormat,
  issuingAddress:AddressFormat,
  items:{qty:number,price: number,name:string}[]
 
}

// 2. Create a Schema corresponding to the document interface.
const InvoiceSchema = new mongoose.Schema<Invoice>({
  debtor: { type: String, required: true },
  status: { type: String, required: true },
  description: { type: String, required: true },
  invoiceNumber: { type: Number, required: true },
  terms: { type: Number, required: true },
  issuingDate: { type: String, required: true },
  paymentDate: { type: String, required: true },
  email: { type: String, required: true },
  debtorsAddress:{
      street:{type: String, required: true},
      city:{type: String, required: true},
      postalAddress: { type: String, required: true},
      country: { type: String, required: true},
  },
  issuingAddress:{
    street:{type: String, required: true},
    city:{type: String, required: true},
    postalAddress: { type: Number, required: true},
    country: { type: String, required: true},
},
items:[{qty:Number, price:Number,name:String}]
  
});
// const InvoiceModel = model<Invoice>('Invoice', InvoiceSchema);

// module.exports.teamModel= mongoose.model('Team', Team);
// export default InvoiceModel;
export default mongoose.models["Invoice"] ||  mongoose.model("Invoice", InvoiceSchema);