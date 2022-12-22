import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div >
      
    <RouterProvider router={routes}></RouterProvider>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
  );
}

export default App;
