import { useState } from 'react';
import { 
  ArrowUpRight, 
  FileText, 
  MessageSquare, 
  Phone, 
  Mail, 
  Facebook,
  MessageCircle,
  FileArchive
} from 'lucide-react';

export default function BitAppsDashboard() {
  const [activeTab, setActiveTab] = useState('Products');
  
  const navItems = ['Products', 'Bit Hub', 'Resources', 'Support', 'Offers'];
  
  const products = [
    {
      id: 'form',
      name: 'Bit Form',
      icon: <div className="bg-blue-900 p-2 rounded text-white text-xl font-bold">Bf</div>,
      description: 'Your ultimate drag & drop and interactive form builder plugin in WordPress',
      color: 'bg-blue-900',
      isNew: false,
      isFree: false
    },
    {
      id: 'integrations',
      name: 'Bit Integrations',
      icon: <div className="bg-indigo-600 p-2 rounded text-white text-xl font-bold">Bi</div>, 
      description: 'Your ultimate drag & drop and interactive form builder plugin in WordPress',
      color: 'bg-indigo-600',
      isNew: false,
      isFree: false
    },
    {
      id: 'assist',
      name: 'Bit Assist',
      icon: <div className="bg-emerald-500 p-2 rounded text-white text-xl font-bold">Ba</div>,
      description: 'Your ultimate drag & drop and interactive form builder plugin in WordPress',
      color: 'bg-emerald-500',
      isNew: false,
      isFree: false
    },
    {
      id: 'flows',
      name: 'Bit Flows',
      icon: <div className="bg-orange-500 p-2 rounded text-white text-xl font-bold">Bf</div>,
      description: 'Your ultimate drag & drop and interactive form builder plugin in WordPress',
      color: 'bg-orange-500',
      isNew: true,
      isFree: false
    },
    {
      id: 'social',
      name: 'Bit Social',
      icon: <div className="bg-indigo-500 p-2 rounded text-white text-xl font-bold">Bs</div>,
      description: 'Your ultimate drag & drop and interactive form builder plugin in WordPress',
      color: 'bg-indigo-500',
      isNew: false,
      isFree: false
    },
    {
      id: 'wp',
      name: 'To WP',
      icon: <div className="bg-purple-500 p-2 rounded text-white text-xl font-bold">T</div>,
      description: 'Your ultimate drag & drop and interactive form builder plugin in WordPress',
      color: 'bg-purple-500',
      isNew: false,
      isFree: true
    },
    {
      id: 'smtp',
      name: 'Bit SMTP',
      icon: <div className="bg-blue-500 p-2 rounded text-white text-xl font-bold">Bs</div>,
      description: 'Your ultimate drag & drop and interactive form builder plugin in WordPress',
      color: 'bg-blue-500',
      isNew: false,
      isFree: true
    },
    {
      id: 'filemanager',
      name: 'Bit File Manager',
      icon: <div className="bg-cyan-500 p-2 rounded text-white text-xl font-bold">Bf</div>,
      description: 'Your ultimate drag & drop and interactive form builder plugin in WordPress',
      color: 'bg-cyan-500',
      isNew: false,
      isFree: true
    }
  ];

  const sidebarItems = [
    { name: 'Blog', icon: <FileText size={18} /> },
    { name: 'Facebook Community', icon: <Facebook size={18} /> },
    { name: 'Forums', icon: <MessageSquare size={18} /> },
    { name: 'Contact Us', icon: <Phone size={18} /> },
    { name: 'Live Chat', icon: <MessageCircle size={18} /> },
    { name: 'Email us', icon: <Mail size={18} /> }
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-amber-50 min-h-screen p-2 md:p-4 flex justify-center items-center">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-3 md:gap-5">
        <div className="bg-gray-900 rounded-xl p-3 md:p-5 flex-grow text-white">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 md:mb-6 gap-3">
            <div className="flex items-center">
              <span className="text-red-500 text-xl md:text-2xl font-bold mr-1">Bit</span>
              <span className="text-white text-xl md:text-2xl font-bold">Apps</span>
            </div>
            <button 
              className="sm:hidden bg-gray-800 p-2 rounded-md text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              Menu
            </button>
            <div className="hidden sm:flex items-center space-x-2 md:space-x-4">
              {navItems.map(item => (
                <button 
                  key={item}
                  className={`text-xs md:text-sm ${activeTab === item ? 'text-white' : 'text-gray-400'}`}
                  onClick={() => setActiveTab(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            
            <button className="hidden sm:block bg-gray-800 hover:bg-gray-700 text-white text-xs md:text-sm py-1 px-3 md:px-4 rounded-full">
              Sign in
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="sm:hidden mb-4 bg-gray-800 rounded-lg p-3">
              <div className="flex flex-col space-y-2">
                {navItems.map(item => (
                  <button 
                    key={item}
                    className={`text-sm py-2 px-3 rounded-md ${activeTab === item ? 'bg-gray-700 text-white' : 'text-gray-400'}`}
                    onClick={() => {
                      setActiveTab(item);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item}
                  </button>
                ))}
                <button className="bg-gray-700 text-white text-sm py-2 px-3 rounded-md mt-2">
                  Sign in
                </button>
              </div>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {products.map(product => (
              <div key={product.id} className="bg-gray-800 rounded-lg p-3 md:p-4 flex flex-col">
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {product.icon}
                    <div>
                      <div className="flex items-center flex-wrap">
                        <span className="font-medium text-xs md:text-sm">{product.name}</span>
                        {product.isNew && (
                          <span className="ml-2 bg-pink-600 text-white text-xs px-2 py-0.5 rounded">NEW</span>
                        )}
                        {product.isFree && (
                          <span className="ml-2 bg-green-600 text-white text-xs px-2 py-0.5 rounded">FREE</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-xs">{product.description}</p>
              </div>
            ))}
            <div className="col-span-1 bg-purple-700 rounded-lg p-3 md:p-4 flex flex-col relative">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs md:text-sm mb-2">Explore</div>
                  <div className="flex items-center">
                    <span className="text-red-500 font-bold">Bit</span>
                    <span className="font-bold"> Hub</span>
                  </div>
                  
                  <div className="flex mt-3 md:mt-4 gap-2">
                    <div className="bg-gray-800 p-1 rounded">
                      <div className="bg-red-500 p-1 rounded text-xs">B</div>
                    </div>
                    <div className="bg-blue-600 p-1 rounded text-xs">B</div>
                    <div className="bg-green-500 p-1 rounded text-xs">B</div>
                    <div className="bg-orange-500 p-1 rounded text-xs">B</div>
                  </div>
                </div>
                
                <button className="absolute top-2 right-2 bg-purple-600 p-1 rounded">
                  <ArrowUpRight size={16} />
                </button>
                
                <div className="absolute bottom-0 right-0">
                  <img 
                    src="/api/placeholder/100/100" 
                    alt="Cartoon character" 
                    className="w-16 h-16 md:w-20 md:h-20" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 rounded-xl p-3 md:p-4 w-full lg:w-64 text-white">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-3 md:gap-4">
            {sidebarItems.map((item, index) => (
              <div key={index} className="flex items-center p-2 hover:bg-gray-800 rounded-lg cursor-pointer">
                <div className={`${index === 0 ? 'bg-green-600' : index === 1 ? 'bg-blue-600' : index === 2 ? 'bg-red-500' : index === 3 ? 'bg-green-600' : index === 4 ? 'bg-blue-600' : 'bg-amber-500'} p-2 rounded mr-2 md:mr-3`}>
                  {item.icon}
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs md:text-sm font-medium truncate">{item.name}</div>
                  <div className="text-gray-400 text-xs truncate hidden md:block lg:block">This is a blog section filler text.</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}