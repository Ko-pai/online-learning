import './App.scss';
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import SignUpMainUI from './component/SignUp/SignUpMainUI';
import Login from './component/Login/Login';
import HomePage from './component/Home/HomePage';

function App() {

  

  return (
   <BrowserRouter>
        <Routes>
          <Route path='/home' element={<HomePage />}>
              <Route path='/home/:id' element={<HomePage />} />
          </Route>
          <Route path='/' element ={<SignUpMainUI />}/>
          <Route path='/login' element ={<Login />}/>
        </Routes>
   
   </BrowserRouter>
  );
}

export default App;
