
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebare/Sidebar';
import Feed from './Components/Feed/Feed'
import Widget from './Components/Widget';
import Login from "./Components/Login/Login"
function App() {
  const user = null 
  return (
    <div className="App">
      {
        !user? (<Login/>) :   
      (
        <>
      <Header/>
      <div className="wall">
        <Sidebar/> 
        <Feed/>
        <Widget/>
      </div>
      </>
      )}
    </div>
  );
}

export default App;
