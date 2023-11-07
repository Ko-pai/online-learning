import './App.scss';
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import SignUpMainUI from './component/SignUp/SignUpMainUI';
import Login from './component/Login/Login';
import HomePage from './component/Home/HomePage';

function App() {

  

  return (
   <BrowserRouter>
        <Routes>
          <Route path='https://ko-pai.github.io/new/home' element={<HomePage />}>
              <Route path='https://ko-pai.github.io/new/home/:id' element={<HomePage />} />
          </Route>
          <Route path='https://ko-pai.github.io/new/' element ={<SignUpMainUI />}/>
          <Route path='https://ko-pai.github.io/new/login' element ={<Login />}/>
        </Routes>
   
   </BrowserRouter>
  );
}

export default App;
