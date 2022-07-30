
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/RowPost/Rowpost';
import {Action,Comedy,Originals,Horror }from './constants/Urls'
function App() {
  return (
    <div className="App">
      <header className="App-header">

       <Navbar></Navbar>
      <Banner></Banner>
      <Rowpost title="Netflix  Originals" url={Originals}></Rowpost>
      <Rowpost title="Action Movies " isSmall url={Action} ></Rowpost>
      <Rowpost title="Comedy Movies " isSmall url={Comedy} ></Rowpost>
      <Rowpost title="Horro Movies " isSmall url={Horror} ></Rowpost>
     
      </header>
    </div>
  );
}

export default App;
