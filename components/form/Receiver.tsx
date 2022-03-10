import React from "react";
import InputComponent from "./InputLabel";
import DateComponent from "./DateComponent";
import TwoStepInputComponent from "./TwoStepInput";
type Props = {
  receiverName: string;
  errorReceiverName: string;
  receiverStreet: string;
  errorReceiverStreet: string;
  receiverEmail: string;
  errorReceiverEmail: string;
  receiverCity: string;
  errorReceiverCity: string;
  receiverPostalAddress: string;
  errorReceiverPostalAddress: string;
  receiverCountry: string;
  errorReceiverCountry: string;
  startDate: Date;
  errorDate: string;
  terms: number;
  description: string;
  errorDescription: string;
  errorPaymentTerms: string;
  termsArray: { desc: string; value: number }[];
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  changeTerms: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  changeDate: (e: Date) => void;
};

const Receiver: React.FC<Props> = (props) => {
  return (
    <>
      <InputComponent
        name="receiverName"
        inputValue={props.receiverName}
        handleInputChange={props.handleChange}
        error={props.errorReceiverName}
        description="Client's Name"
      />

      <InputComponent
        name="receiverEmail"
        inputValue={props.receiverEmail}
        handleInputChange={props.handleChange}
        description="Client's Email"
        error={props.errorReceiverEmail}
        email
        placeholder="youremail@example.com"
      />

      <InputComponent
        name="receiverStreet"
        inputValue={props.receiverStreet}
        handleInputChange={props.handleChange}
        error={props.errorReceiverStreet}
        description="Street Address"
      />
      




      

      <TwoStepInputComponent
        name1="receiverCity"
        name2="receiverPostalAddress"
        inputValue1={props.receiverCity}
        inputValue2={props.receiverPostalAddress}
        handleInputChange1={props.handleChange}
        error1={props.errorReceiverCity}
        error2={props.errorReceiverPostalAddress}
        handleInputChange2={props.handleChange}
        label1="City"
        label2="Postal Code"
      />

      <InputComponent
        name="receiverCountry"
        inputValue={props.receiverCountry}
        handleInputChange={props.handleChange}
        error={props.errorReceiverCountry}
        description="Country"
      />
      {/* invoice date */}
      <DateComponent
        startDate={props.startDate}
        changeDate={props.changeDate}
        error1={props.errorDate}
        error2={props.errorPaymentTerms}
        changeTerms={props.changeTerms}
        termValue={props.terms}
        terms={props.termsArray}
      />
      <InputComponent
        name="description"
        inputValue={props.description}
        handleInputChange={props.handleChange}
        error={props.errorDescription}
        description="Description"
      />
    </>
  );
};
export default Receiver;
