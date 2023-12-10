import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Home/Navbar';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <HomePage/> */}
<ProductPage/>
    </div>
  );
}

export default App;
