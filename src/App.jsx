import './App.css';
import Hero from "./components/Hero";
import OrderDetails from "./components/OrderDetails";
import Plan from "./components/Plan";
function App(){
  return (
    <div className="app-container">
      <div className="card">
           <Hero/>
           <OrderDetails/>
           <Plan/>
           <button className="proceed-btn">Proceed to Payment</button>
           <button className="cancel-btn">Cancel Order</button>
      </div>
    </div>
  )
}
export default App