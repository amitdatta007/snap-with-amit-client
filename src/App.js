import { RouterProvider } from "react-router-dom";
import router from './Routes/Router/Router';

function App() {
  return (
    <div className="max-w-[1280px] w-[98%] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
