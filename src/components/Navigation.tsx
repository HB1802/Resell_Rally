import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Ticket, User, ChevronDown, LogIn, UserPlus } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

const categories = [
  { name: 'Concerts', value: 'concerts' },
  { name: 'Sports', value: 'sports' },
  { name: 'Comedy', value: 'comedy' },
  { name: 'Theatre', value: 'theatre' }
];

export const Navigation = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCategoryClick = (category: string) => {
    navigate(`/events?category=${category}`);
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <Ticket className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-semibold">Resell Rally</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-neutral-600 hover:text-neutral-900"
              >
                Events
                <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    {categories.map((category) => (
                      <button
                        key={category.value}
                        onClick={() => handleCategoryClick(category.value)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/sell" className="text-neutral-600 hover:text-neutral-900">
              Sell Tickets
            </Link>
            <Link to="/help" className="text-neutral-600 hover:text-neutral-900">
              Help
            </Link>

            {user ? (
              <div className="relative" ref={userMenuRef}>
                <button 
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 text-neutral-600 hover:text-neutral-900"
                >
                  <User className="h-5 w-5" />
                  <span>{user.name}</span>
                  <ChevronDown className={`h-4 w-4 transform transition-transform ${
                    isUserMenuOpen ? 'rotate-180' : ''
                  }`} />
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/auth?mode=login"
                  className="flex items-center text-neutral-600 hover:text-neutral-900"
                >
                  <LogIn className="h-5 w-5 mr-1" />
                  Sign in
                </Link>
                <Link
                  to="/auth?mode=register"
                  className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  <UserPlus className="h-5 w-5 mr-1" />
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

// import React, { useState, useRef, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Ticket, User, ChevronDown } from 'lucide-react';

// const categories = [
//   { name: 'Concerts', value: 'concerts' },
//   { name: 'Sports', value: 'sports' },
//   { name: 'Comedy', value: 'comedy' },
//   { name: 'Theatre', value: 'theatre' }
// ];

// export const Navigation = () => {
//   const navigate = useNavigate();
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setIsDropdownOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const handleCategoryClick = (category: string) => {
//     navigate(`/events?category=${category}`);
//     setIsDropdownOpen(false);
//   };

//   return (
//     <nav className="bg-white border-b border-neutral-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           <Link to="/" className="flex items-center">
//             <Ticket className="h-8 w-8 text-indigo-600" />
//             <span className="ml-2 text-xl font-semibold">Resell Rally</span>
//           </Link>
          
//           <div className="hidden md:flex items-center space-x-8">
//             <div className="relative" ref={dropdownRef}>
//               <button
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 className="flex items-center text-neutral-600 hover:text-neutral-900"
//               >
//                 Events
//                 <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${
//                   isDropdownOpen ? 'rotate-180' : ''
//                 }`} />
//               </button>
              
//               {isDropdownOpen && (
//                 <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
//                   <div className="py-1">
//                     {categories.map((category) => (
//                       <button
//                         key={category.value}
//                         onClick={() => handleCategoryClick(category.value)}
//                         className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                       >
//                         {category.name}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
            
//             <Link to="/sell" className="text-neutral-600 hover:text-neutral-900">
//               Sell Tickets
//             </Link>
//             <Link to="/help" className="text-neutral-600 hover:text-neutral-900">
//               Help
//             </Link>
//             <button 
//               className="p-2 rounded-full hover:bg-neutral-100"
//               onClick={() => navigate('/dashboard')}
//             >
//               <User className="h-5 w-5 text-neutral-600" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };