import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes/Route';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
