import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Product from "./pages/Product";
import MainHeader from "./Components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
function App() {
  return (
    <div>
      <header> <MainHeader/>
      </header>
   
  <main>
  <Switch>
    <Route path='/Welcome'>  <Welcome/> 
      </Route>
      <Route path='/Product/:productId'> <ProductDetail/></Route>
      <Route path='/Product'> <Product/></Route>
      </Switch>
    </main>
      
     
    </div>
  );
}

export default App;
