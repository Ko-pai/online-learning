import './App.scss';
import FetchApi from './component/SignIn/FetchApiFromExpress';
import NavBar from './component/NavBar/NavBar';
import Learning from './component/Language/Learning';

function App() {

  

  return (
    <div className="App">
        <NavBar />
        <FetchApi/>
        <Learning />
        <FetchApi/>
        <Learning />
    </div>
  );
}

export default App;
