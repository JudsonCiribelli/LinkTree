import { Link } from "react-router-dom";

const LoginPage = () => {
  return ( 
    <div className="flex w-full h-screen items-center justify-center flex-col">
      <Link to="/">
       <h1>Dev<span>Link</span></h1>
      </Link>
    </div>
   );
}
 
export default LoginPage;