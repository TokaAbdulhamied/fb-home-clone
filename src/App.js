
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebare/Sidebar';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app__body">
        <Sidebar/> 

      </div>
      {/*bode
          sidebar 
          feeds
          widgets
      */}
    </div>
  );
}

export default App;
