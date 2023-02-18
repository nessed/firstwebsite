import { useState } from "react";
 
 
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const onClick = (e) => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="bg-black">
    <nav onClick={onClick} className="fixed flex flex-initial w-full opacity-100 px-10 py-3">
 
     <img className="h-30 w-20 items-center py-7" src="/lmcpng.png" alt="logo" />
        {isOpen ? <img className="h-10 w-20" src="./nav.svg" alt="nav" /> : <img src="./xicon.svg" className="h-10 w-20" alt="icon" />
    }
    </nav>
    <div className="opacity-100 flex flex-initial in w-full px-3 py-3 justify-end grid-rows-1">
    <ul className="text-white flex space-x-2 py-5">
    
    <li>Home</li>
    <li>Contact</li>
    </ul>

  
   
    </div>
    </div>
 
  );
}

export default Navbar;
