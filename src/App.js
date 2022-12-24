import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import { routes } from "./Routes/Routes";

function App() {
  return (
    <div className="bg-dark">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
