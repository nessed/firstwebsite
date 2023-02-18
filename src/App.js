import './App.css';
import ReactPlayer from 'react-player'
import Navbar from './navbar';

function App() {
  return (
    <>
      <Navbar />
      <body className='bg-black space-y-4 p-4'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 place-items-center h-screen">
          <ReactPlayer width={300} height={300} url='https://www.youtube.com/watch?v=CUSWtNnpTNQ' />
          <ReactPlayer width={300} height={300} url='https://www.youtube.com/watch?v=CUSWtNnpTNQ' />
        </div>
       
 
  
 
 

      </body>
    </>
  );
}


export default App;
