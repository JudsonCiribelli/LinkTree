import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import InputComponent from "../../components/Input-Component/Input-Component";
import {auth} from '../../services/firebaseConnection'

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if(email === '' || password === ''){
      alert("Preencha todos os campos")
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("Login efetuado com sucesso!")
      navigate('/admin', {replace: true})
    }).catch((error) => {
      console.log("Ocorreu algum error ao efetuar login!")
      return error;
    })

  }
  
  return ( 
    <div className="flex w-full h-screen items-center justify-center flex-col">
      <Link to="/">
        <h1 className="mt-11 text-white mb-7 font-bold text-5xl">Dev
          <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">Link</span>
        </h1>
      </Link>
      <form className="w-full max-w-xl flex flex-col px-4" onSubmit={handleSubmit}>
        <InputComponent
         placeholder="Digite seu e-mail"
         type="email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
        />
        <InputComponent
         placeholder="******"
         type="password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className=" cursor-pointer h-9 bg-blue-400 rounded border-0 text-lg font-medium text-white">Acessar</button>
      </form>
    </div>
   );
}
 
export default LoginPage;