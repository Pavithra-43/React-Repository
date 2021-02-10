import React, { Component } from 'react'
import OrderService from '../Service/OrderService'
import ReactPaginate from 'react-paginate'

class ListOrderDetails extends Component{
    constructor(props){
        super(props)

        this.state = {
            Orderdetails: [],
            offset:0,
            orgData:[],
            perPage:5,
            currentPage:0

        }
        this.clickPageHandler=this.clickPageHandler.bind(this)
    }
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
                        Orderdetails: slice
                    })

    }

    componentDidMount()
    {
        this.getData();
    }
    getData(){
        OrderService.getOrderdetails().then(response=>
            {
                const data=response.data;
                const slice=data.slice(this.state.offset, this.state.offset+this.state.perPage)
                this.setState(
                    {
                        pageCount:Math.ceil(data.length/this.state.perPage),
                        orgData:response.data,
                        Orderdetails: slice
                    }
                )
            })
    }

    render(){
        return(
            <div>
                <h2 className = "text-center">Orderdetails List</h2>
                <div className="row">
            <div className="container"><ReactPaginate previousLabel={"prev"} nextLabel={"next"} breakLabel={"..."} breakClassName={"break me"}
                pageCount={this.state.pageCount} marginPagesDisplayed={2} pageRangeDisplayed={10} onPageChange={this.clickPageHandler}
                containerClassName={"pagination"} subContainerClassName={"pages pagination"} activeClassName={"active"}></ReactPaginate>
                    </div>
                    <div className="container">
                    <table className =" table table-striped table-bordered">
                        <thead>
                            <tr>
                            <th>orderId</th>
                                <th>totalAmount</th>
                                <th>orderDate</th>
                                <th>expectedDeliveryDate</th>
                                <th>orderStatus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Orderdetails.map(order =>
                                {
                                    return( <tr key={order.orderId}>
                                       <td>{order.orderId}</td>
                                        <td> {order.totalAmount}</td>
                                        <td> {order.orderDate}</td>
                                        <td> {order.expectedDeliveryDate}</td>
                                        <td> {order.orderStatus}</td>

                                    </tr>)
                                })
                            }
                        </tbody>

                    </table>
                    </div>
                </div>

            </div>
        )
    }
}
export default ListOrderDetails