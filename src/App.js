
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebare/Sidebar';
import Feed from './Components/Feed/Feed'
import Widget from './Components/Widget';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="wall">
        <Sidebar/> 
        <Feed/>
        <Widget/>
      </div>

    </div>
  );
}

export default App;
