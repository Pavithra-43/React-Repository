import React, { Component } from 'react'
import ProductService from '../Service/ProductService'

class Wishlist extends Component{

    constructor(props)
    {
        super(props)
        this.state={
            productId:this.props.match.params.productId,
            productName:"",
	        productCategory:"accessories",
	        productBrand:"",
	        unitPrice:"",
            description:"",
            availability:"in stock"
        }
    }

    componentDidMount(){
        ProductService.getProductById(this.state.productId).then(res=>{
            let product=res.data
            this.setState({
                    productName:product.productName,
                    productCategory:product.productCategory,
                    productBrand:product.productBrand,
                    unitPrice:product.unitPrice,
                    description:product.description,
                    availability:product.availability
                }
            )
            
        })
    }
    render()
    {
        const product=this.state
        return (
            <div className="container" style={{padding:"30px"}}>
                <div className="card-container">
                <div className="image-container">
                    <img src="input.jpg" alt=""></img>
                </div>
                <div className="card-title">
                   <h3><b> {product.productName}</b></h3>
                </div>
                <div className="card-body">
                    <h5><b>Category : </b>{product.productCategory}</h5>
                    <h5><b>Brand : </b>{product.productBrand}</h5>
                    <h5><b>Unit Price : </b>{product.unitPrice}</h5>
                    <h5><b>Description : </b>{product.description}</h5>
                    <h5><b>Availability : </b>{product.availability}</h5>

                    <button className="btn btn-danger">Move to Cart</button>
                </div>
                </div>
                </div>
        )
    }
}
export default Wishlist