import { InputHTMLAttributes } from "react";

interface InputComponentProps extends InputHTMLAttributes<HTMLInputElement>{}

const InputComponent = (props: InputComponentProps) => {
  return ( 
    <input
     className="border-0 h-9 rounded-md outline-none bg-white px-2 mb-3"
     {...props}
    />
   );
}
 
export default InputComponent;