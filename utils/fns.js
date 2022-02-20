export function handleBackgroundColor(props) {
  if (props.status === "pending") return "bg-orange-100";
  if (props.status === "paid") return "bg-green-100";
  if (props.status === "draft") return "bg-gray-100";
}
export function handleColor(props) {
  if (props.status === "pending") {
    return "text-orange-500";
  } else if (props.status === "paid") {
    return "text-green-500";
  } else {
    return "text-black";
  }
}
export function handleCircleColor(props) {

     switch(props.status) {
          case 'pending':
           return 'bg-orange-500';
           case 'paid':
           return 'bg-green-500'; 

          default:
           return 'bg-blank';
     }
//   if (props.status === "pending") {
//     return "bg-orange-500";
//   } else if (props.status === "paid") {
//     return "bg-green-500";
//   } else {
//     return "bg-black";
//   }
}
export function getSum(arr) {
  const arrayOfNumbers = arr.map((el) => el.amount);
  return arrayOfNumbers.reduce((acc, cv) => acc + cv, 0);
}
