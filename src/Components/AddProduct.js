import React, { Component } from 'react'
import ProductService from '../Service/ProductService'

class AddProduct extends Component{

    constructor(props)
    {
        super(props)
        this.state={
            productName:"",
	        productCategory:"accessories",
	        productBrand:"",
	        unitPrice:"",
            description:"",
            availability:"in stock"
        }
    }

    productNameHandler=(event)=>
    {
        this.setState({
            productName:event.target.value
        })
    }

    productCategoryHandler=(event)=>{
        this.setState({
            productCategory:event.target.value
        })

    }

    productBrandHandler=(event)=>{
        this.setState({
            productBrand:event.target.value
        })
    }

    unitPriceHandler=(event)=>{
        this.setState({
            unitPrice:event.target.value
        })
    }

    availabilityHandler=(event)=>{
        this.setState({
            availability:event.target.value
        })
    }

    descriptionHandler=(event)=>
    {
        this.setState({
            description:event.target.value
        })
    }
    addProduct=(event)=>{
        event.preventDefault();
        let product={
            productName:this.state.productName,
	        productCategory:this.state.productCategory,
	        productBrand:this.state.productBrand,
	        unitPrice:this.state.unitPrice,
            description:this.state.description,
            availability:this.state.availability
        }
        console.log(product)

        ProductService.addProduct(product).then(res=>{
            this.props.history.push("/all")
        })
    }
    cancelProduct=()=>{
        this.props.history.push("/all")
    }

    render()
    {
        return (
                <div className="container">
                    <div className="row">
                        <div className="card col-md-5 offset-md-3 offset-md-3 ">
                            <h2 className="text-center"><b>Add Product</b></h2>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                    <input placeholder="Product Name" value={this.state.productName} 
                                    name="productName" className="form-control" onChange={this.productNameHandler}></input> 
                                    </div>
                                    <div className="form-group">
                                    <input placeholder="Brand" value={this.state.productBrand} 
                                    name="productBrand" className="form-control" onChange={this.productBrandHandler}></input> 
                                    </div>
                                    <div className="form-group">
                                    <input placeholder="Unit Price" value={this.state.unitPrice} 
                                    name="unitPrice" className="form-control" onChange={this.unitPriceHandler}></input> 
                                    </div>
                                    <div className="form-group">
                                    <input placeholder="Description" value={this.state.description} 
                                    name="description" className="form-control" onChange={this.descriptionHandler}></input> 
                                    </div>
                                    <div className="form-group">
                                    Availability : <select value={this.state.availability} onChange={this.availabilityHandler}>
                                    <option value='in stock'>In stock</option>
                                    <option value='out of stock'>Out of stock</option></select>
                                    </div>
                                    <div className="form-group">
                                    Category : <select value={this.state.productCategory} onChange={this.productCategoryHandler}>
                                    <option value='accessories'>accessories</option>
                                    <option value='cosmetics'>cosmetics</option></select>
                                    </div>
                                    <button className="btn btn-success" onClick={this.addProduct}>Add</button>
                                    <button className="btn btn-danger" onClick={this.cancelProduct}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
export default AddProduct