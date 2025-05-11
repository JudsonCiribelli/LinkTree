import { signOut } from 'firebase/auth';
import { BiLogOut } from 'react-icons/bi'
import { Link } from 'react-router-dom';

import { auth } from '../../services/firebaseConnection'


const HeaderComponent = () => {

  const handleLogOut = async () => {
    
    await signOut(auth)
    
  }

  return ( 
    <header className='w-full max-w-2xl mt-8 px-2'>
      <nav className='w-full bg-white h-12 flex items-center justify-between rounded-md px-3'>
        <div className='flex gap-4 font-medium'>
          <Link to="/">Home</Link>
          <Link to="/admin">Meus links</Link>
          <Link to="/admin/networks">Redes Socias</Link>
        </div>
        <button className='cursor-pointer' onClick={handleLogOut} >
          <BiLogOut size={35} color='#db2629'/>
        </button>
      </nav>
    </header>
   );
}
 
export default HeaderComponent;