import React, { Component } from 'react';
import CustomerService from '../Service/CustomerService';
import ReactPaginate from 'react-paginate'
import {Link} from 'react-router-dom'

class CustomerList extends Component{
    constructor(props){
        super(props)
        this.state={
            offset:0,
            customers:[],
            orgData:[],
            perPage:5,
            currentPage:0
            
        }
        this.registerCustomer=this.registerCustomer.bind(this);
        this.updateCustomer=this.updateCustomer.bind(this);
        this.removeAccount=this.removeAccount.bind(this);
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
                        customers: slice
                    })

    }

    componentDidMount()
    {
        this.getData();
    }
    getData(){
        CustomerService.getAllCustomer().then(response=>
            {
                const data=response.data;
                const slice=data.slice(this.state.offset, this.state.offset+this.state.perPage)
                this.setState(
                    {
                        pageCount:Math.ceil(data.length/this.state.perPage),
                        orgData:response.data,
                        customers: slice
                    }
                )
            })
    }
    registerCustomer(customer){
        this.props.history.push("/register");
    }
    updateCustomer(customer){
        this.props.history.push("/update");
    }
    removeAccount(customerId){
        CustomerService.removeAccount(customerId).then(res=>{
            this.setState({customer:this.state.customer.filter(customer=>customer.customerId!==customerId)});
        });
    }
render(){
    return(
        <div>
            <h2 className="text-center">CustomerList</h2>
            <div className="row">
            </div>
            <div className="row">
            <div className="sidenav">
                <Link to="/add-product"><button className="btn btn-primary">Add Product</button></Link>
                <Link to="/customers"><button className="btn btn-primary">View Customers</button></Link>
                <Link to="/orders"><button className="btn btn-primary">View Orders</button></Link>
                </div>
            <div className="container"><ReactPaginate previousLabel={"prev"} nextLabel={"next"} breakLabel={"..."} breakClassName={"break me"}
                pageCount={this.state.pageCount} marginPagesDisplayed={2} pageRangeDisplayed={10} onPageChange={this.clickPageHandler}
                containerClassName={"pagination"} subContainerClassName={"pages pagination"} activeClassName={"active"}></ReactPaginate>
                    </div>
                    <div className="container">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>customer_Id</th>
                            <th>customerName</th>
                            <th>email</th>
                            <th>gender</th>
                            <th>mobile</th>
                            <th>password</th>
                            <th>username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.customers.map(customer=>
                            <tr key={customer.customerId}>
                                <td>{customer.customerId}</td>
                                <td>{customer.customerName}</td>
                                <td>{customer.email}</td>
                                <td>{customer.gender}</td>
                                <td>{customer.mobile}</td>
                                <td>{customer.password}</td>
                                <td>{customer.username}</td>
                            </tr>)
                        }
                    </tbody>

                </table>
                </div>
            </div>
        </div>
    )   
}
}
export default CustomerList