import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

import SocialIcons from "../../components/Social-Icons/social-Icons";

const HomePage = () => {
  return ( 
    <div className="flex flex-col w-full py-4  items-center justify-center">
      <h1 className="md:text-4xl text-3xl text-white font-bold mt-10">Link Tree</h1>
      <span className="text-white mt-3 mb-5">Veja seus Links</span>
      <main className="flex flex-col w-11/12 max-w-xl text-center">
        <section className="bg-white mb-4 w-full py-2 rounded-lg  select-none transition-transform hover:scale-105 cursor-pointer">
          <a>
            <p className="md:text-lg text-base">
              Canal no Youtube
            </p>
          </a>
        </section>

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