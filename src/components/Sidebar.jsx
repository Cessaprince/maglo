import logoImage from '../assets/images/logo.jpg'

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
            <a href="" className="p-3 border-[0.1px] border-gray-100 font-bold text-gray-500 rounded-[7px] text-sm inline-flex items-center gap-4 hover:bg-lime-400 hover:text-black">
                <i className="fa-solid fa-house"></i> 
                Dashboard
            </a>            

            <a href="" className="p-3 border-[0.1px] border-gray-100 font-bold text-gray-500 rounded-[7px] text-sm inline-flex items-center gap-4 hover:bg-lime-400 hover:text-black">
                <i class="fa-solid fa-money-bill-transfer"></i> 
                Transactions
            </a>   

            <a href="" className="p-3 border-[0.1px] border-gray-100 font-bold text-gray-500 rounded-[7px] text-sm inline-flex items-center gap-4 hover:bg-lime-400 hover:text-black">
                <i class="fa-solid fa-file-invoice-dollar"></i>
                Invoices
            </a>               
             
            <a href="" className="p-3 border-[0.1px] border-gray-100 font-bold text-gray-500 rounded-[7px] text-sm inline-flex items-center gap-4 hover:bg-lime-400 hover:text-black">
                <i class="fa-solid fa-wallet"></i> 
                Wallet
            </a>                
            
            <a href="" className="p-3 border-[0.1px] border-gray-100 font-bold text-gray-500 rounded-[7px] text-sm inline-flex items-center gap-4 hover:bg-lime-400 hover:text-black">
                <i class="fa-solid fa-gear"></i> 
                Settings
            </a>               


        </div>


        <div className="sidebar-down-links flex flex-col gap-1 mt-50">
            <a href="" className="p-3 border-[0.1px] border-gray-100 font-bold text-gray-500 rounded-[7px] text-sm inline-flex items-center gap-4 hover:bg-lime-400 hover:text-black">
                <i class="fa-solid fa-circle-question"></i>
                Help
            </a>                
            
            <a href="" className="p-3 border-[0.1px] border-gray-100 font-bold text-gray-500 rounded-[7px] text-sm inline-flex items-center gap-4 hover:bg-lime-400 hover:text-black">
                <i class="fa-solid fa-right-from-bracket"></i> 
                Logout
            </a>   

        </div>


    </div>
  );
};

export default Sidebar;