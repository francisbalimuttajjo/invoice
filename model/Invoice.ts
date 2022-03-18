import mongoose from "mongoose";
import { InvoiceFormat } from "../types/home";

const InvoiceSchema = new mongoose.Schema<InvoiceFormat>({
  debtor: { type: String, required: true },
  status: { type: String, required: true },
  description: { type: String, required: true },
  invoiceNumber: { type: Number, required: true },
  terms: { type: Number, required: true },
  issuingDate: { type: Date, required: true },
  paymentDate: { type: String, required: true },
  email: { type: String, required: true },
  debtorsAddress: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    postalAddress: { type: String, required: true },
    country: { type: String, required: true },
  },

  issuingAddress: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    postalAddress: { type: Number, required: true },
    country: { type: String, required: true },
  },
  items: [{ qty: Number, price: Number, name: String }],
});

export default mongoose.models["Invoice"] ||
  mongoose.model("Invoice", InvoiceSchema);
