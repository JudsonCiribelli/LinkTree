import { useState } from "react";
import { FiTrash } from "react-icons/fi";

import HeaderComponent from "../../components/header-Component/header-Component";
import InputComponent from "../../components/Input-Component/Input-Component";

const AdminPage = () => {
  
  const [nameInput, setNameInput] = useState('')
  const [urlInput, setUrlInput ] = useState('')
  const [textColorInput, setTextColorInput] = useState('#f1f1f1')
  const [backgroundColorInput, setBackgroundColorInput] = useState('#121212')

  const handleSubmitLinks = () => {
    console.log('Dados enviados com sucesso!')
  }
  
  return ( 
    <div className="flex flex-col items-center min-h-screen pb-7">
      <HeaderComponent/>
      <form className="flex flex-col my-8 w-full max-w-xl">
         <label className="text-white font-medium my-2">Nome do link</label>
          <InputComponent
           placeholder="Digite o nome do seu link..."
           value={nameInput}
           onChange={(e) => setNameInput(e.target.value)}
          />
          <label className="text-white font-medium my-2">Url do link</label>
          <InputComponent
           type="url"
           placeholder="Digite a url..."
           value={urlInput}
           onChange={(e) => setUrlInput(e.target.value)}
          />


          <div className="flex my-4 gap-5">
            
            <div>
              <label className="text-white font-medium my-2 mx-2">Cor do link</label>
              <input 
               type="color" 
               value={textColorInput} 
               onChange={(e) => setTextColorInput(e.target.value)}
              />
            </div>

            <div>
              <label className="text-white font-medium my-2 mx-2">Fundo do link</label>
              <input 
               type="color" 
               value={backgroundColorInput} 
               onChange={(e) => setBackgroundColorInput(e.target.value)}
              />
            </div>
          </div>
            
            {nameInput !== '' && (
              <div className="flex flex-col items-center justify-center mb-7 p-1 border-gray-100/25 border rounded">
                <label className="text-white font-medium my-2 mx-2">Veja como esta ficando</label>
                <article 
                 className="w-11/12 max-w-lg flex flex-col items-center justify-between bg-zinc-900 rounded px-1 py-3"
                 style={{marginBottom: 8, marginTop: 8, backgroundColor: backgroundColorInput}}
                 >
                 <p className="font-medium" style={{color: textColorInput}}>{nameInput}</p>
                </article>
              </div>
            ) }

            <button
             type="submit" 
             className="bg-blue-400 rounded-md text-white font-medium h-9 gap-4 flex items-center justify-center mb-7 cursosr pointer"
             onClick={handleSubmitLinks}
            >Cadastrar</button>
      </form>


      <h2 className="text-white text-3xl font-medium mb-4">Meus links</h2>

      <article 
      className="flex items-center justify-between w-11/12 max-w-xl rounded py-3 px-3 mb-2 select-none"
      style={{backgroundColor: "#5e4a4a47", color: '#ffffff'}}
      >
        <p>Canal do Youtube</p>
        <div>
          <button className="border border-dashed py-1 px-2 rounded cursor-pointer bg-black">
            <FiTrash size={24} color="#FFF"/>
          </button>
        </div>
      </article>
    
    
    
    </div>
   );
}
 
export default AdminPage;