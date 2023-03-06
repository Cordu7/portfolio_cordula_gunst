
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Project from './containers/Project';

function App() {
  return (
    <div className="App">

      
      <Header/>
      <About/>
      <Project titleText = {"title"} imagePath = {"image"} text = {"project text"}/>
    
    
    </div>
  );
}

export default App;
