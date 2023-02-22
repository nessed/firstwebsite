import { useState } from "react";
import { ReactComponent as X } from './assets/x.svg';
import { ReactComponent as Facebook } from './assets/facebook.svg';
import { ReactComponent as Instagram } from './assets/instagram.svg';
import { ReactComponent as Twitter } from './assets/twitter.svg';
import { ReactComponent as Spotify } from './assets/spotify.svg';




function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const onClick = (e) => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="bg-black">
      <nav onClick={onClick} className="fixed flex flex-initial w-full opacity-100 px-10 py-3 flex flex-col">
        <img className="h-30 w-20 items-center py-7" src="/lmcpng.png" alt="logo" />
        <div className="grid-rows-2">
          {isOpen ? <X className="h-10 w-20" /> : <img className="h-10 w-20" src="./nav.svg" alt="nav" />}
          {isOpen && (
            <div className="text-white items-center">
              <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
              </ul>s
            </div>
          )}
        </div>
      </nav>
      <div className="opacity-100 flex flex-initial in w-full px-3 py-3 justify-end grid-rows-1">
        <ul className="text-white flex space-x-2 py-6">
          <li><Instagram className="h-5 w-5" /></li>
          <li><Facebook className="h-5 w-5" /></li>
          <li><Twitter className="h-5 w-5" /></li>
          <li><Spotify className="h-5 w-5" /></li>

        </ul>
      </div>
    </div>
  );
}

export default Navbar;
