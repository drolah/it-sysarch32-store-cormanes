import './Header.css'
import { Link, useNavigate } from 'react-router-dom';

function Header() {
const navigate =useNavigate()
const handleClick = () => {
   navigate('/computers')
}
 

    return (
      <header className="header">
        <h1 className='store' onClick={handleClick}>Kim Store</h1>
      </header>
      
    );
}

export default Header;
