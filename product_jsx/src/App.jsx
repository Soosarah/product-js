import './App.css'
import Image from './components/image'
import Name from './components/name'
import Description from './components/description'
import Price from './components/price'
function App() {
  const lastname="Doe";
  
  return (
    <>
      <div className="App">
        <h1>Product </h1>
        <h1>Details</h1>
        <div className="product-details">
          <Image />
          <Name />
          <Description />
          <Price />
        </div>
        <div>
            {lastname === "Doe" ? <p>Hello Doe!</p> : <p>Hello there!</p>}
        </div>
      </div>
  
    </>
  );
    
  }   

export default App
