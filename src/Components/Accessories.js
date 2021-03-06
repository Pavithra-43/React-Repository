import React, { Component } from 'react'
import ProductService from '../Service/ProductService'
import ReactPaginate from 'react-paginate'


class Accessories extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            offset:0,
            accessories: [],
            orgData:[],
            perPage:5,
            currentPage:0
        }
        this.clickPageHandler=this.clickPageHandler.bind(this)
        //this.addProduct=this.addProduct.bind(this)
    }
    // addProduct(){
    //     this.props.history.push("/add-product")
    // }

    clickPageHandler=(e)=>
    {
        const selectedPage=e.selected;
        const offset=selectedPage*this.state.perPage;
        this.setState({
            currentPage: selectedPage,
            offset:offset
        },()=>
        {
            this.loadMoreData();
        })
    }

    loadMoreData=()=>
    {
        const data=this.state.orgData
        const slice=data.slice(this.state.offset, this.state.offset+this.state.perPage)
                this.setState(
                    {
                        pageCount:Math.ceil(data.length/this.state.perPage),
                        //orgData:response.data,
                        accessories: slice
                    })

    }

    componentDidMount()
    {
        this.getData();
    }
    getData(){
        ProductService.getAllAccessories().then(response=>
            {
                const data=response.data;
                const slice=data.slice(this.state.offset, this.state.offset+this.state.perPage)
                this.setState(
                    {
                        pageCount:Math.ceil(data.length/this.state.perPage),
                        orgData:response.data,
                        accessories: slice
                    }
                )
            })
    }
    viewData(productId){
        this.props.history.push(`view-product/${productId}`)
    }

    render()
    {
    return(
        <div>
           <h2 className='text-center'><b>Accessories</b></h2>
                <div className='row'>
                {/* <button className="btn btn-primary" onClick={this.addProduct}>Add Product</button> */}
                <div className="container"><ReactPaginate previousLabel={"prev"} nextLabel={"next"} breakLabel={"..."} breakClassName={"break me"}
                pageCount={this.state.pageCount} marginPagesDisplayed={2} pageRangeDisplayed={10} onPageChange={this.clickPageHandler}
                containerClassName={"pagination"} subContainerClassName={"pages pagination"} activeClassName={"active"}></ReactPaginate>
                    </div>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th><b>Product Name</b></th>
                                <th><b>Category</b></th>
                                <th><b>Brand</b></th>
                                <th><b>Unit Price</b></th>
                                <th><b>Description</b></th>
                                <th><b>Availability</b></th>
                                <th><b>Actions</b></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.accessories.map(product=>
                                {
                                   return( <tr key={product.productId}>
                                        <td>{product.productName}</td>
                                        <td>{product.productCategory}</td>
                                        <td>{product.productBrand}</td>
                                        <td>{product.unitPrice}</td>
                                        <td>{product.description}</td>
                                        <td>{product.availability}</td>
                                        <td><button onClick={()=>this.viewData(product.productId)} className="btn btn-success">View</button></td>

                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>

        </div>
    )
    }
}
export default Accessories