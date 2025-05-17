import {collection, doc, getDoc,getDocs, orderBy, query  } from 'firebase/firestore'
import { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

import SocialIcons from "../../components/Social-Icons/social-Icons";
import { db } from '../../services/firebaseConnection'

interface HomePageProps{
  id: string,
  name: string,
  url: string,
  bg: string,
  color: string
}

interface HomeSocialLinkProps{
  instagram: string,
  facebook: string,
  youtube: string,
}

const HomePage = () => {

  const [links, setLinks] = useState<HomePageProps[]>([])
  const [socialLinks, setSocialLinks] = useState<HomeSocialLinkProps>()

  useEffect(() => {
   
    const loadLinks = () => {
      const linkRef = collection(db, 'links');
      const queryRef = query(linkRef, orderBy("created", 'asc'))

      getDocs(queryRef)
      .then((snapshot) => {
        const lista = [] as HomePageProps[];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            name: doc.data().name,
            url: doc.data().url,
            bg: doc.data().bg,
            color: doc.data().color,
          })
        })
        setLinks(lista)
      })
    }

    loadLinks()
  
  
  },[])
  
  
  return ( 
    <div className="flex flex-col w-full py-4  items-center justify-center">
      <h1 className="md:text-4xl text-3xl text-white font-bold mt-10">Link Tree</h1>
      <span className="text-white mt-3 mb-5">Veja seus Links</span>
      <main className="flex flex-col w-11/12 max-w-xl text-center">
        {links.map((link) => (
          
          <section 
           key={link.id} 
           className="bg-white mb-4 w-full py-2 rounded-lg  select-none transition-transform hover:scale-105 cursor-pointer"
           style={{background: link.bg}}
           >
            <a href={link.url} target='_blank'>
              <p style={{color: link.color}} className="md:text-lg text-base">
                {link.name}
              </p>
            </a>
          </section>
        ))}

        <footer className="flex  justify-center gap-3 my-4">
          <SocialIcons url="">
            <FaFacebook size={35} color="#FFF"/>
          </SocialIcons>
          <SocialIcons url="">
            <FaInstagram size={35} color="#FFF"/>
          </SocialIcons>
          <SocialIcons url="">
            <FaYoutube size={35} color="#FFF"/>
          </SocialIcons>
        </footer>
      </main>
    </div>
   );
}
 
export default HomePage;