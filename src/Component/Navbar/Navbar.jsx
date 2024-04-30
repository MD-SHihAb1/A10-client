import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Navbar = () => {

    const {user, logOut, } = useContext(AuthContext);

   

    const handleLogOut = () =>{
        logOut()
        .then(() => console.log('user Logged Out Success'))
        .catch(error => console.error(error))
    }

    return (
        <div>
           
            <div className="navbar bg-base-100">
                        <div className="navbar-start">
                            <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <Link to="/">
                                <li><a>Home</a></li>
                                </Link>
                                
                                
                                <Link to='/addPainting'>
                                <button>Add Painting</button>
                                </Link>
                                <li>
                               <Link>
                               <button>All Art & craft Items</button>
                               </Link>
                               
                                <a>Add Craft Item</a>
                                <a>My Art&Craft List</a>
                                
                                </li>
                               
                            </ul>
                            </div>
                            <Link to="/">
                            <a className="btn btn-ghost text-xl">Creative Realm</a>
                            </Link>
                        </div>

                            <div className="navbar-center hidden lg:flex">
                                <ul className="menu menu-horizontal px-1">
                                
                                <Link to='/addPainting'>
                                <li className="text-base mr-12 btn ">Add Painting</li>
                                </Link>
                                <Link to='/painting'>
                                <li className="text-base mr-12 btn "> All Art & craft Items</li>
                                </Link>
                                <Link to='/myPainting'>
                                <li className="text-base mr-12 btn  ">My Art&Craft List</li>
                                </Link>
                                <Link to="/addPainting">
                                <li className="text-base mr-12 btn" style={{ outline: 'variant' }}>My Art&Craft List</li>
                                </Link>
                                <Link to="/addPainting">
                                <li className="text-base mr-12 btn" style={{ outline: 'variant' }}>About Us</li>
                                </Link>
                                <li>
                                    
                                </li>
                                
                                </ul>
                            </div>

                            <div className="avatar mx-5">
                                    <div className="w-16 rounded-full">
                                        <img src="https://i.ibb.co/nnV0z4r/1ef80945440175-5607a2a1b2658.jpg" />
                                    </div>
                            </div>

                   
                                        
                                 <div className="">
                                 {
                                    user ? <>
                                    <span>{user.email}</span>
                                    <a onClick={handleLogOut} className="btn">Sign Out</a>
                                    </>
                                    : <Link to='/login'>
                                    <button  className="btn">Login</button>

                                </Link>
                                 }
                                 </div>
                </div>

               
        </div>
    );
};

export default Navbar;