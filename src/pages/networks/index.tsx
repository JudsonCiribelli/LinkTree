import {doc,getDoc,setDoc} from 'firebase/firestore'
import { FormEvent, useEffect,useState } from "react";

import HeaderComponent from "../../components/header-Component/header-Component";
import InputComponent from "../../components/Input-Component/Input-Component";
import { db } from '../../services/firebaseConnection'


const NetworksPage = () => {

  const [facebookLink, setFacebookLink] = useState('')
  const [instagramLink, setInstagramLink] = useState('')
  const [youtubeLink, setYoutubeLink] = useState('')


  useEffect(() => {
    
    const loadLinks = () => {

      const docRef = doc(db, 'social', 'link')
      getDoc(docRef).then((snapshot) => {

        if(snapshot.data() !== undefined){

          setFacebookLink(snapshot.data()?.facebookLink);
          setInstagramLink(snapshot.data()?.instagramLink);
          setYoutubeLink(snapshot.data()?.youtubeLink);
       
        }

      }).catch((error) => {
        console.log(error)
      })

    }

    loadLinks()
  
  },[])

  const handleRegister = (e: FormEvent) => {
    e.preventDefault()

    setDoc(doc(db, 'social', 'link'), {
      facebook: facebookLink,
      instagram: instagramLink,
      youtube: youtubeLink
    }).then(() => {
      console.log('Cadastrado com sucesso!')
    }).catch((error) => {
      console.log(error)
    })
  }

  return ( 
    <div className="flex flex-col items-center min-h-screen pb-7 px-2 ">
      <HeaderComponent/>
      
      <h1 className="text-white font-medium  text-2xl mt-8 mb-4">Minhas redes sociais</h1>
      
      <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
        
        <label className="text-white font-medium my-3 ">Link do Facebook</label>
        <InputComponent
          value={facebookLink}
          type="url"
          placeholder="Digite a url do Facebook..."
          onChange={(e) => setFacebookLink(e.target.value) }
        />

        <label className="text-white font-medium my-3 ">Link do Instagram</label>
        <InputComponent
          value={instagramLink}
          type="url"
          placeholder="Digite a url do Instagram..."
          onChange={(e) => setInstagramLink(e.target.value) }
        />
        
        <label className="text-white font-medium my-3 ">Link do Youtube</label>
        <InputComponent
          value={youtubeLink}
          type="url"
          placeholder="Digite a url do Youtube..."
          onChange={(e) => setYoutubeLink(e.target.value) }
        />

        <button 
         type="submit"
         className="text-white font-medium h-9 bg-blue-400 flex items-center justify-center my-7 rounded-md">
         Salvar links
        </button>
      

      </form>
    
    </div>
   );
}
 
export default NetworksPage;