import logo from './logo.svg';
import './App.css';
import img1 from './pic.jpg'
import grafitti from './png.png'
import insta from './instagram.svg'
import ReactPlayer from 'react-player'

const navItems = [
  {
    title: 'Home',
    href: 'https://google.com'
  },
   t
]

// main function
function App() {
  return (
    // <div className="sticky nav-bar bg-gray-900 py-6 opacity-98">
    // <a href="https://soundcloud.com/discover">Home</a>
    // <a href="https://soundcloud.com/discover">News</a>
    // <a href="#contact">Contact</a>
    // </div>
    <>
      <nav class="sticky p-4 bg-black text-white opacity-100">
        <ul class="flex space-x-4">
          {navItems.map(item => {
            return (
              <li class="cursor-pointer">
                <a href={item.href}>{item.title}</a>
              </li>
            )
            <img src="/src/logo.svg"></img>
            
          })}
    
      </nav>

      <div className="flex flex-col items-center">
      <ReactPlayer url='https://www.youtube.com/watch?v=CUSWtNnpTNQ'/>
      <ReactPlayer url='https://www.youtube.com/watch?v=CUSWtNnpTNQ'/>
      <ReactPlayer url='https://www.youtube.com/watch?v=CUSWtNnpTNQ'/>
      <ReactPlayer url='https://www.youtube.com/watch?v=CUSWtNnpTNQ'/> 
      </div>

    </>
  );
}





export default App;
