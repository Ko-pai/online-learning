import './App.scss';
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import SignUpMainUI from './component/SignUp/SignUpMainUI';
import Login from './component/Login/Login';
import HomePage from './component/Home/HomePage';

function App() {

  

  return (
   <BrowserRouter>
        <Routes>
          <Route path='/online-learning/home' element={<HomePage />}>
              <Route path='/online-learning/home/:id' element={<HomePage />} />
          </Route>
          <Route path='/online-learning/signIn' element ={<SignUpMainUI />}/>
          <Route path='/online-learning/login' element ={<Login />}/>
        </Routes>
   
   </BrowserRouter>
  );
}

export default App;
