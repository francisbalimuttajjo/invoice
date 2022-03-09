import InputComponent from "./InputLabel";
import TwoStepInputComponent from "./TwoStepInput";

type Props = {
    issuerStreet: string
    errorIssuerStreet: string
    issuerCity: string
    errorIssuerCity: string
     issuerPostalAddress: string
    errorIssuerPostalAddress: string
    issuerCountry: string
    errorIssuerCountry:string
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    
}
const Issuer: React.FC<Props> = (props) => {
  return (
    <div className="px-3">
      {/* issuer details */}
      <InputComponent
        name="issuerStreet"
        inputValue={props.issuerStreet}
        handleInputChange={props.handleChange}
        error={props.errorIssuerStreet}
        description="Street  Address"
      />

      <TwoStepInputComponent
        name1="issuerCity"
        name2="issuerPostalAddress"
        inputValue1={props.issuerCity}
        error1={props.errorIssuerCity}
        error2={props.errorIssuerPostalAddress}
        inputValue2={props.issuerPostalAddress}
        handleInputChange1={props.handleChange}
        handleInputChange2={props.handleChange}
        label1="City"
        label2="Postal Code"
      />

      <InputComponent
        inputValue={props.issuerCountry}
        name="issuerCountry"
        handleInputChange={props.handleChange}
        error={props.errorIssuerCountry}
        description="Country"
      />
    </div>
  );
};
  export default Issuer