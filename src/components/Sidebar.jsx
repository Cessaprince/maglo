import logoImage from '../assets/images/logo.jpg'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 w-[250px] h-screen bg-gray-100 p-6">

        {/* The Logo */}
        <div className="auth-logo flex gap-2 items-center">
            <div className="auth-logo-img overflow-hidden h-9 rounded-xl">
              <img src={ logoImage } alt="" className='object-cover h-full w-full'/>
            </div>

            <p className='font-bold text-lg'>Maglo.</p>
        </div>

        <div className="sidebar-links flex flex-col gap-1 mt-9">
            <Link to="/dashboard" className="p-3 border-[0.1px] border-gray-100 font-bold text-gray-500 rounded-[7px] text-sm inline-flex items-center gap-4 hover:bg-lime-400 hover:text-black">
            <i className="fa-solid fa-house"></i> 
            Dashboard
            </Link>            

            <Link to="/dashboard/transaction" className="p-3 border-[0.1px] border-gray-100 font-bold text-gray-500 rounded-[7px] text-sm inline-flex items-center gap-4 hover:bg-lime-400 hover:text-black">
            <i className="fa-solid fa-money-bill-transfer"></i> 
            Transactions
            </Link>   

            <Link to="/dashboard/invoice" className="p-3 border-[0.1px] border-gray-100 font-bold text-gray-500 rounded-[7px] text-sm inline-flex items-center gap-4 hover:bg-lime-400 hover:text-black">
            <i className="fa-solid fa-file-invoice-dollar"></i>
            Invoices
            </Link>               
            
            <Link to="/dashboard/wallet" className="p-3 border-[0.1px] border-gray-100 font-bold text-gray-500 rounded-[7px] text-sm inline-flex items-center gap-4 hover:bg-lime-400 hover:text-black">
            <i className="fa-solid fa-wallet"></i> 
            Wallet
            </Link>                
            
            <Link to="/dashboard/settings1" className="p-3 border-[0.1px] border-gray-100 font-bold text-gray-500 rounded-[7px] text-sm inline-flex items-center gap-4 hover:bg-lime-400 hover:text-black">
            <i className="fa-solid fa-gear"></i> 
            Settings
            </Link>               
        </div>

      <div className="sidebar-down-links flex flex-col gap-1 mt-50">
        <Link to="/dashboard/help" className="p-3 border-[0.1px] border-gray-100 font-bold text-gray-500 rounded-[7px] text-sm inline-flex items-center gap-4 hover:bg-lime-400 hover:text-black">
        <i className="fa-solid fa-circle-question"></i>
        Help
        </Link>                
        
        <Link to="/" className="p-3 border-[0.1px] border-gray-100 font-bold text-gray-500 rounded-[7px] text-sm inline-flex items-center gap-4 hover:bg-lime-400 hover:text-black">
        <i className="fa-solid fa-right-from-bracket"></i> 
        Logout
        </Link>   
      </div>


    </div>
  );
};

export default Sidebar;