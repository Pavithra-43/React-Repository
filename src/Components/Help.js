import React, {Component} from 'react'

class Help extends Component
{
    constructor(props){
    super(props)
    this.state={

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Form submitted');
    this.props.history.push('/customer');
  }
  render()
  {
    return (
        <div>
        <div>
 <h3> 1. Q: How can I order</h3>

<p>A: You can order easily using our online platform. When you find a product you need, you can add it to cart, login and go through the ordering process. After the order is ready, you will receive order summary to your email. Order summary will also be stored to your account.

You can also easily make reorders afterwards by clicking the “reorder” button on any of your previously made orders. After clicking the “reorder” button the cart will open and you can change quantities or products. </p>

<h3>2.    Q: Why should I buy online?</h3>
<p>A: Speeding up the process. By ordering online you will you will get prices faster and you will be able to go through order confirmation and payment process much faster. This could save days of your time.

Traceability: You will have easy access to all of your previous orders any time you want.

Reordering:  you can make a re-order anytime based on your previous orders by only couple of clicks. This will save time and effort as you don’t need to go through all the documents and emails from the past.</p>

<h3>3.    Q: What information should I input when ordering?</h3>
<p>A: our online ordering system will ask for all the important information you should submit. If you have a VAT number, please remember to submit it. This will make sure the shipment is not delayed because of the lack of VAT number</p>

<h3>4.    Q: What payment methods can I use?</h3>
<p>A: You can use all the major credit cards.</p></div>
<div>
<form onSubmit={this.handleSubmit} style={{backgroundColor:"silver"}}>
          <div>
            <h3>Questions?</h3>
              
              <textarea value={this.state.value} onChange={this.handleChange} rows='6' cols='40'/>
              </div>
              <button className="btn btn-success">Submit</button>
          </form>
</div>
<div>
    <h3><u>Contact Us :</u></h3>
    <h5><b>Phone : </b>9874561230</h5>
    <h5><b>Email :</b>g3shopping@gmail.com</h5>

</div>
 </div>
    )

}
}
export default Help