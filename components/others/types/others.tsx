
//alert.tsx
export interface Props{
  msg: string;
  handleClick: () => void;
};

//head.tsx
export interface HeadProps{
    
    title:string
}


//header.tsx
export type HeadingProps={
  InvoiceTotal:Number 
  // darkTheme:boolean
  categories:string[]   
  description:string
  handleCategorizingInvoices:(a:string)=>void
  displayNewInvoiceForm:()=>void
 
}