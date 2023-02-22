import './App.css';
import ReactPlayer from 'react-player'
import Navbar from './navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import art from "./assets/art.jpg"
import button from "./assets/button.jfif"
import Carousel from './carousel';
import hood from "./assets/hood.png"

function App() {
  return (
    <>
      <Navbar />
      <div className='bg-black space-y-4 p-4 h-full'>
        <div className="grid grid-cols-1 place-items-center mt-16">
          <div className='flex flex-justify justify-center font-bold text-white py-5 font-serif underline'>"Sincity"</div>
          <img className='w-100 h-100 object-contain' src={art} />
        </div>
        <div className="py-10 flex flex-justify justify-center font-extrabold text-white">
          <button className="h-8 w-48" style={{ backgroundImage: `url(${art})` }}>Download Now</button>
        </div>
        <Carousel />
        {/*<div className='border-t-2 border-white my-10'></div>
        <div className='flex justify-center items-center'>
          <img className='h-60 w-50' src={hood} />
          <img className='h-60 w-50' src={hood} />
          <img className='h-60 w-50' src={hood} />
          <img className='h-60 w-50' src={hood} />
  </div>*/}      
      </div>
    </>
  );
}

export default App;

