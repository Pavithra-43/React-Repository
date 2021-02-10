import React, { Component } from 'react'
import ProductService from '../Service/ProductService'
import Carousel from 'react-bootstrap/Carousel';

class ViewProduct extends Component{

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
    addCart(productId)
    {
        this.props.history.push(`/add-cart/${productId}`)
    }
    addWish(productId)
    {
        this.props.history.push(`/add-wish/${productId}`)
    }

    render()
    {
        const product=this.state
        return (
            <div className="container" style={{padding:"50px"}}>
            <div className="row">
            <div className="card col-md-4  offset-md-4 offset-md-4 ">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <h3><b>{product.productName}</b></h3>
                    <Carousel className="col-13">
                        <Carousel.Item>
                        <img
                                className="d-block w-100"
                                src="https://i.pinimg.com/originals/37/84/83/378483a28a563b9d5ab86019b09cbc87.jpg"
                                alt="First slide"
                            />

                                
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                                className="d-block w-100"
                                src="https://i.pinimg.com/originals/c2/e5/63/c2e56366a9320dde4de5d107a405b934.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                                className="d-block w-100"
                                src="https://cnet3.cbsistatic.com/img/-A-dVYLcBtwxJBF7z4EaDSuVX4g=/1200x675/2019/09/19/c08ea3ba-d393-4e19-a230-9e9a8f0017c9/100-nintendo-switch-accessories-listicle-2019.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                                className="d-block w-100"
                                src="https://wallpaperaccess.com/full/1190761.jpg"
                                alt="Fourth slide"
                            />
                        </Carousel.Item>
                        
                    </Carousel>
                    <h5><b>Category : </b>{product.productCategory}</h5>
                    <h5><b>Brand : </b>{product.productBrand}</h5>
                    <h5><b>Unit Price : </b>{product.unitPrice}</h5>
                    <h5><b>Description : </b>{product.description}</h5>
                    <h5><b>Availability : </b>{product.availability}</h5>
                </div>
                <div>
                <h1><button class="fas fa-shopping-cart" onClick={()=>this.addCart(product.productId)}></button><button class="fa fa-heart"onClick={()=>this.addWish(product.productId)}></button></h1>
          
                </div>
          </div>
          </div>
          </div>
        )
    }
}
export default ViewProduct