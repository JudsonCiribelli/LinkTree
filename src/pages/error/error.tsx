import { Link } from "react-router-dom";


const ErrorPage = () => {
  return ( 
    <div className="flex w-full justify-center items-center flex-col text-white min-h-screen">
      <h1 className="font-bold text-4xl mb-4">Página não encontrada</h1>
      <p className="italic text-2xl mb-4">Voce caiu em uma página que não existe!</p>

      <Link to="/" className="bg-gray-50/20 py-1 px-4 rounded-md">Voltar para Home</Link>
    </div>
   );
}
 
export default ErrorPage;