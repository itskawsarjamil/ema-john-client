import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://ema-john-simple-server-itskawsarjamil.vercel.app/products'),
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        },
        { path: '/inventory', element: <Inventory></Inventory> },
        { path: '/about', element: <About></About> },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'shipping',
          element: <PrivateRoute><Shipping></Shipping></PrivateRoute>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        }
      ]
    },
    {
      path: '*', element: <div>404 You Idiot</div>,
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
