import logo from './logo.svg';
import './App.css';
import img1 from './pic.jpg'
import grafitti from './png.png'
import insta from './instagram.svg'
import ReactPlayer from 'react-player'
import lmc from './lmc.png'
import lmclogo from './lmcpng.png'
import navlogo from './menu.png'
import yt from './yt.png'
import twt from './twt.png'
import ig from './ig.png'
 

const navItems = [
  {
    title:<img className="h-30 w-20 items-center" src={lmclogo} alt="logo" />,
    href:'https://google.com'
   
  } 
]

// main function
function App() {
  return (
    <>
      <body className='bg-black'>
      <nav className="fixed rounded-b-lg h-30 opacity-90 w-full justify-between">
      <ul className="flex space-x-4">
        {navItems.map(item => (
          <li className="cursor-pointer">
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
      <div className="flex">
        <a href="www.google.com">
          <img className="h-10 w-20" src={navlogo} alt="nav"/>
        </a>
      </div>
    </nav>
    
        <div className="flex flex-col items-center">
          <ReactPlayer className="m-auto" url='https://www.youtube.com/watch?v=CUSWtNnpTNQ'/>
          <ReactPlayer className="m-auto" url='https://www.youtube.com/watch?v=CUSWtNnpTNQ'/>
          <ReactPlayer className="m-auto" url='https://www.youtube.com/watch?v=CUSWtNnpTNQ'/>
          <ReactPlayer className="m-auto" url='https://www.youtube.com/watch?v=CUSWtNnpTNQ'/>
          <ReactPlayer className="m-auto" url='https://www.youtube.com/watch?v=CUSWtNnpTNQ'/>
        </div>
        </body>
    </>
  );
}

export default App;
