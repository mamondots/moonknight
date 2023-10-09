import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";


const Dasboard = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                   <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        <div className="flex flex-col items-center justify-center py-6">
                             <img src={user?.photoURL} alt="" />
                             <h2 className="pt-2 text-lg">{user?.displayName}</h2>
                             <h2>{user?.email}</h2>
                        </div>
                        {/* Sidebar content here */}
                        <div className="py-8">
                        <li><Link to='/dasboard'><a>OWNER DASHBOARD </a></Link></li>
                        <li><Link to='/dasboard/setproduct'><a>ADD PRODUCTS</a></Link></li>
                        <li><Link to='/dasboard/manageproducts'><a>MANAGE PRODUCTS</a></Link></li>
                        <li><Link to='/dasboard/manageuser'><a>MANAGE USER</a></Link></li>
                        <li><Link to='/'><a>HOME</a></Link></li>
                        <li><a>PROFILE SETTING</a></li>
                        </div>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dasboard;