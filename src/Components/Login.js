import React, { Component } from 'react';
import CustomerService from '../Service/CustomerService';
class LoginForm extends Component {
    constructor() {
    super();
    this.state = {
      customerName:'',
      email:'',
      gender:'Male',
      mobile:'',
      address:'',
      username:'',
      password:''
    };
  }
  changeUserName=e=>{
    this.setState({username:e.target.value});
  }
  changePassword=e=>{
    this.setState({password:e.target.value});
  }
     
handleSubmit=(event) =>{
    event.preventDefault();
    let customer = {customerName:this.state.customerName,email:this.state.email,gender:this.state.gender,mobile:this.state.mobile,
                    username:this.state.username,password:this.state.password}
      console.log('customer=>'+JSON.stringify(customer));
      alert("Confirm Submit");
    CustomerService.validateCustomer(customer.username, customer.password).then(res=>{
      this.props.history.push('/all')
    }).catch(error=>
      {
          console.log(error)
          alert("Invalid Username and Password")
      });  
  }
     
  handleChangeUsername=(event) =>{
    event.preventDefault();
     this.setState({
        username:event.target.value
     })
  }
  handleChangePassword=(event) =>{
    event.preventDefault();
    this.setState({
       password:event.target.value
    })
 }

 handleSubmit(){
  CustomerService.validateCustomer(this.state.username,this.state.password).then(res=>{
    let cust=res.data
    this.setState({
      username:cust.username,
      password:cust.password
    })
   })
 }

     
  render() {
    return (
      <div className="container" style={{padding:"50px"}}>
        <div className="row">
        <div className="card col-md-3 offset-md-3 offset-md-3 ">
        <h1><b>Login</b></h1>
        <form>
  
          <div class="form-group">
            <label for="username">Username:</label>
            <input 
              type="text" 
              name="username" 
              value={this.state.username}
              onChange={this.handleChangeUsername}
              class="form-control" 
              placeholder="Enter username" 
              id="username" />
          </div>
  
          <div class="form-group">
            <label for="password">Password:</label>
            <input 
              type="password" 
              name="password" 
              value={this.state.password}
              onChange={this.handleChangePassword}
              class="form-control" 
              placeholder="Enter password" 
              id="password" />
          </div>
          <button className="btn btn-success" onClick={this.handleSubmit}>Login</button>
        </form>
      </div>
      </div>
      </div>
    );
  }
}
  
export default LoginForm;