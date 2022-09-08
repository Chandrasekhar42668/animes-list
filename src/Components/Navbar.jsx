import cn from './logo/cn.png';
import { Link } from 'react-router-dom';
const Navbar = () => 
{
    return ( 
        <div>
            <center>
            <nav>
            <img src={cn}/>
             <div>
               <input class="form-control me-2 w-100 h-50 d-flex" type="search" placeholder="Search" aria-label="Search"  />
               <button className="btn btn-outline-success"> 🔍 </button>
             </div>
            <Link to="/Wishlist"> Wishlist </Link>
            </nav>
            </center>
        </div>
     );
}

export default Navbar;