import { Component } from "react";
import CustomerService from "../Service/CustomerService";
class Register extends Component {
  constructor() {
  super();
  this.state = {
    customer:{
    customerName:'',
    email:'',
    gender:'',
    mobile:'',
    username:'',
    password:''
    },
    errors:{
      customerName:'',
        email:'',
        password:'',
        mobile:''
    }
  }
  this.handleCancel=this.handleCancel.bind(this);
}
handleValidation(){
    let customer=this.state.customer;
    let errors={};
    let formIsValid=true;
    if (!customer["customerName"]) {
      formIsValid = false;
      errors["customerName"] = "*Please enter your name.";
    }

    if (!customer["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your email-ID.";
    }

    if (typeof customer["email"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
      if (!pattern.test(customer["email"])) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email-ID.";
      }
    }

    if (!customer["mobile"]) {
      formIsValid = false;
      errors["mobile"] = "*Please enter your mobile no.";
    }

    if (typeof customer["mobile"] !== "undefined") {
      if (!customer["mobile"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobile"] = "*Please enter valid mobile no.";
      }
    }

    if (!customer["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof customer["password"] !== "undefined") {
      if (!customer["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }
    this.setState({ errors: errors });
    return formIsValid;

}
handleCancel=()=>{
    this.props.history.push('/customer');
}
changeHandler(field, event) {
  let customer = this.state.customer;
  customer[field] = event.target.value;
  this.setState({ customer });
}
  
registerCustomer=(event) =>{
  event.preventDefault();
  let customer = {customerName:this.state.customer.customerName,email:this.state.customer.email,gender:this.state.customer.gender,mobile:this.state.customer.mobile,
                  username:this.state.customer.username,password:this.state.customer.password}
    //console.log('customer=>'+JSON.stringify(customer)); 
  if(this.handleValidation()){
  CustomerService.registerCustomer(customer).then(res=>{
    this.props.history.push('/all');
  })
  }
  else{

  }
}
render() {
  return (
      <div className="container" style={{padding:"50px"}}>
      <div className="row">
      <div className="card col-md-5  offset-md-3 offset-md-3 ">
      <h3>Sign Up</h3>
      <form onSubmit={this.registerCustomer.bind(this)}>
      <div class="form-group">
          {/* <label for="customerName">customerName</label> */}
          <input 
            type="text" 
            name="customerName" 
            value={this.state.customer["customerName"]}
            onChange={this.changeHandler.bind(this, "customerName")}
            class="form-control" 
            placeholder="Enter your name" 
            id="customerName" />
              <span className="text-danger">{this.state.errors["customerName"]}</span>
        </div>
        <div class="form-group">
          {/* <label for="email">email</label> */}
          <input 
            type="text" name="email" value={this.state.customer["email"]}
            onChange={this.changeHandler.bind(this,"email")} class="form-control" 
            placeholder="Enter email" id="email" />
            <span className="text-danger">{this.state.errors["email"]}</span>
        </div>
        <div class="form-group">
          {/* <label for="Gender">gender</label> */}
          Gender : <select  
            class="form-control" 
            placeholder="Enter gender" 
            id="Gender"
            onChange={this.changeHandler.bind(this, "gender")}
             value={this.state.customer["gender"]}>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <span className="text-gender">{this.state.errors["gender"]}</span>
        <div class="form-group" >
        {/* <label for="mobile">mobile</label> */}
          Country Code: <select name="country code">
          <option country-code="US" value='1'>+1</option>
          <option country-code="IN" value='91'>+91</option>
          <optgroup label="other countries" ></optgroup>
          <option data-countryCode="CA" value="1">Canada (+1)</option>
          <option data-countryCode="DE" value="49">Germany (+49)</option>
          </select>
          <input 
            type="text" 
            name="mobile" 
            value={this.state.customer["mobile"]}
            onChange={this.changeHandler.bind(this, "mobile")}
            class="form-control" 
            placeholder="Enter your mobilenumber" 
            id="mobile" />
            <span className="text-danger">{this.state.errors["mobile"]}</span>
        </div>
        <div class="form-group">
          {/* <label for="username">username</label> */}
          <input 
            type="text" 
            name="username" 
            value={this.state.customer["username"]}
            onChange={this.changeHandler.bind(this, "username")}
            class="form-control" 
            placeholder="Enter username" 
            id="username" />
        </div>

        <div class="form-group">
          {/* <label for="password">password</label> */}
          <input 
            type="password" 
            name="password" 
            value={this.state.customer["password"]}
            onChange={this.changeHandler.bind(this, "password")}
            class="form-control" 
            placeholder="Enter password" 
            id="password" />
            <span className="text-danger">{this.state.errors["password"]}</span>
        </div>
        <button className="btn btn-success" type="submit">Register</button>
        <button className="btn btn-danger" style={{ marginLeft: "10px" }} onClick={() => this.handleCancel()}>Cancel</button>
      </form>
      </div>
      </div>
    </div>
  );
}
}

export default Register;