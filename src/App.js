
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebare/Sidebar';
import Feed from './Components/Feed/Feed'
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="wall">
        <Sidebar/> 
        <Feed/>
      </div>
    </div>
  );
}

export default App;
