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
        <Link to={'/cart'}> <img src='https://cdn-icons-gif.flaticon.com/12414/12414305.gif' className='cart'/></Link>
      </header>
      
    );
}

export default Header;
