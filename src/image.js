import './App.css';
import ReactPlayer from 'react-player'
import Navbar from './navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import art from "./assets/art.jpg"
import button from "./assets/button.jfif"
import Carousel from './carousel';


function Pic() {
    return (
        <div className='bg-black space-y-4 p-4 h-full'>
      <div>
        <div className="grid grid-cols-1 place-items-center mt-16">
          <div className="flex justify-center font-bold text-white py-5 font-serif underline">
            "Sincity"
          </div>
          <img className="w-full h-100 object-contain" src={art} />
        </div>
        <div className="py-10 flex justify-center font-extrabold text-white">
          <button
            className="h-8 w-48"
            style={{ backgroundImage: `url(${art})` }}
          >
            Download Now
          </button>
        </div>
      </div>
      </div>
    );
  }

  export default Pic;
  