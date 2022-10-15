import "./App.css"
import Home頁面 from "./pages/home/Home頁面";

function App() {
  return (
    <div className="App">
        <div className='blur-背景' style={{top: '-18%', right: '0'}}></div>
        <div className='blur-背景' style={{top: '36%', left: '-8rem'}}></div>
        <Home頁面></Home頁面>
    </div>
  );
}

export default App;
