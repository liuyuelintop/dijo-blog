import {Link} from 'react-router-dom';
const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to='/home'>Home</Link>
                <Link to='/signup'>Sign Up</Link>
                <Link to='/'>Log In</Link>
                <Link to = '/logout'>Log Out</Link>
                <Link to = '/create'> New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;