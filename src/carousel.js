import React from 'react';
import ReactPlayer from 'react-player'
import Slider from "react-slick";
import button from "./assets/button.jfif"


function Carousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className='mx-auto py-60 mx-auto'>
            <Slider className='text-white text-center mx-auto w-1/4' {...settings}>
                <h3><ReactPlayer width={450} height={300} url='https://www.youtube.com/watch?v=CUSWtNnpTNQ' />
                    <div className="flex space-x-20 justify-center font-bold">
                        <button className="bg-white py-2 mt-2 px-3 bg-center" style={{ backgroundImage: `url(${button})` }}>Download</button>
                        <button className="bg-white py-2 mt-2 px-3 bg-center" style={{ backgroundImage: `url(${button})` }}>Download</button>
                        <button className="bg-white py-2 mt-2 px-3 bg-center" style={{ backgroundImage: `url(${button})` }}>Download</button>
                    </div>
                </h3>
                <div>
                    <h3><ReactPlayer width={450} height={300} url='https://www.youtube.com/watch?v=CUSWtNnpTNQ' />
                        <div className="flex space-x-20 justify-center font-bold">
                            <button className="bg-white py-2 mt-2 px-3 bg-center" style={{ backgroundImage: `url(${button})` }}>Download</button>
                            <button className="bg-white py-2 mt-2 px-3 bg-center" style={{ backgroundImage: `url(${button})` }}>Download</button>
                            <button className="bg-white py-2 mt-2 px-3 bg-center" style={{ backgroundImage: `url(${button})` }}>Download</button>
                        </div>
                    </h3>
                </div>
                <div>
                    <h3><ReactPlayer width={450} height={300} url='https://www.youtube.com/watch?v=CUSWtNnpTNQ' />
                        <div className="flex space-x-20 justify-center font-bold">
                            <button className="bg-white py-2 mt-2 px-3 bg-center" style={{ backgroundImage: `url(${button})` }}>Download</button>
                            <button className="bg-white py-2 mt-2 px-3 bg-center" style={{ backgroundImage: `url(${button})` }}>Download</button>
                            <button className="bg-white py-2 mt-2 px-3 bg-center" style={{ backgroundImage: `url(${button})` }}>Download</button>
                        </div>
                    </h3>
                </div>
                <div>
                    <h3><ReactPlayer width={450} height={300} url='https://www.youtube.com/watch?v=CUSWtNnpTNQ' />
                        <div className="flex space-x-20 justify-center font-bold">
                            <button className="bg-white py-2 mt-2 px-3 bg-center" style={{ backgroundImage: `url(${button})` }}>Download</button>
                            <button className="bg-white py-2 mt-2 px-3 bg-center" style={{ backgroundImage: `url(${button})` }}>Download</button>
                            <button className="bg-white py-2 mt-2 px-3 bg-center" style={{ backgroundImage: `url(${button})` }}>Download</button>
                        </div>
                    </h3>
                </div>
                <div>
                    <h3><ReactPlayer width={450} height={300} url='https://www.youtube.com/watch?v=CUSWtNnpTNQ' />
                        <div className="flex space-x-20 justify-center font-bold">
                            <button className="bg-white py-2 mt-2 px-3 bg-center" style={{ backgroundImage: `url(${button})` }}>Download</button>
                            <button className="bg-white py-2 mt-2 px-3 bg-center" style={{ backgroundImage: `url(${button})` }}>Download</button>
                            <button className="bg-white py-2 mt-2 px-3 bg-center" style={{ backgroundImage: `url(${button})` }}>Download</button>
                        </div>
                    </h3>
                </div>
            </Slider>
        </div>
    )
}
export default Carousel;
