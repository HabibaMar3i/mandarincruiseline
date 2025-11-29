import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './layouts/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactsUs';
import NotFound from './pages/NotFound';
import RoyalPrincess from './pages/RoyalPrincess';
import GrandMandarin from './pages/GrandMandarin';

function App() {
  const routes = createBrowserRouter([
    {path: '/', element: <Layout/>, children:[
      {index: true, element: <Home/>},
      {path: '/about-us', element: <AboutUs/>},
      {path: '/contact-us', element: <ContactUs/>},
      {path: '/royal-princess', element: <RoyalPrincess/>},
      {path: '/grand-mandarin', element: <GrandMandarin/>},
      {path: '*', element: <NotFound/>}
    ]}
  ])
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
