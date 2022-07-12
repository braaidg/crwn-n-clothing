import {Routes, Route} from 'react-router-dom';

import Navigation from './routes/navigation/navigation';
import Home from "./routes/home/home";
import SignIn from './routes/sign-in/sign-in';

const Shop = () => {
  return (
    <div>
      Hi im the shop
    </div>
  )
}

// ROUTE / RENDER NAVIGATION. NAVIGATION RENDER OUTLET UNDER .
// INDEX MAKE REACT RENDER HOME COMPONENT WHEN MATCH / ROUTE
const App = () => {
  return (
    <Routes>

      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>} />
        <Route path='shop' element={<Shop/>} />
        <Route path='sign-in' element={<SignIn/>} />
      </Route>

    </Routes>
  )
}


export default App;
