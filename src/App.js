import './App.css';
import ProductList from './Components/ProductList'
import HeaderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'
import Home from './Components/Home'
import {Route, Link, Switch} from 'react-router-dom'
import AddProduct from './Components/AddProduct';
import AboutUs from './Components/AboutUs';
import Cosmetics from './Components/Cosmetics'
import Accessories from './Components/Accessories';
import Help from './Components/Help'
import Admin from './Components/Admin';
import UpdateProduct from './Components/UpdateProduct'
import Register from './Components/Register';
import CustomerList from './Components/CustomerList';
import OrderList from './Components/OrderList'
import ViewProduct from './Components/ViewProduct';
import LoginForm from './Components/Login'
import CartLine from './Components/CartLine'
import Wishlist from './Components/Wishlist'


function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <nav className="navbar navbar-expand-sm navbar-dark bg-light">
        <ul className="nav navbar-nav" >
          <li><Link to="/"><button type="button" class="btn btn-secondary">Home</button></Link></li>
          <li><Link to="/all"><button type="button" class="btn btn-secondary">All</button></Link></li>
           <li><Link to="/cosmetics"><button type="button" class="btn btn-secondary">Cosmetics</button></Link></li>
          <li><Link to="/accessories"><button type="button" class="btn btn-secondary">Accessories</button></Link></li>
          <li><Link to="/myorders"><button type="button" class="btn btn-secondary">My Orders</button></Link></li>
          <li><Link to="/aboutus"><button type="button" class="btn btn-secondary">About Us</button></Link></li>
          <li><Link to="/help"><button type="button" class="btn btn-secondary">Help?</button></Link></li>
          <li><Link to="/login"><button type="button" class="btn btn-danger">Login</button></Link></li>
          <li><Link to="/signup"><button type="button" class="btn btn-danger">Signup</button></Link></li>
          <li><Link to="/admin"><h1><button type="button" class="fa fa-user"></button></h1></Link></li>
                  </ul>
      </nav>
      <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/all" component={ProductList}/>
      <Route path="/cosmetics" component={Cosmetics}/>
      <Route path="/accessories" component={Accessories}/>
      <Route path="/help" component={Help}/>
      <Route path="/add-product" component={AddProduct}/> 
      <Route path="/aboutus"><AboutUs/></Route>
      <Route path="/add-product" component={AddProduct}></Route>
      <Route path="/admin" component={Admin}></Route>
      <Route path="/update-product/:productId" component={UpdateProduct}></Route>
      <Route path="/signup" component={Register}></Route>
      <Route path="/customers" component={CustomerList}></Route>
      <Route path="/orders" component={OrderList}></Route>
      <Route path="/view-product/:productId" component={ViewProduct}></Route>
      <Route path="/add-cart/:productId" component={CartLine}></Route>
      <Route path="/add-wish/:productId" component={Wishlist}></Route>
      <Route path="/login" component={LoginForm}></Route>
      <Route path="/myorders" component={OrderList}></Route>
      <Route path="/login/:username/:password" ><CartLine/></Route>
      </Switch>
      <FooterComponent/>
    </div>
  );
}

export default App;
