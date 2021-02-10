import React, { Component } from 'react';
class Cartdetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            cart: []
        }
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Cart details</h2>
                <div className = "row">
                    <table className = "table table-striped table-bordered">
                         <thead>
                            <tr>
                                <th>cart_id</th>
                                <th>customer_id</th>
                                <th>quantity</th>
                                <th>order_id</th>
                              


                            </tr>
                        </thead>
                        {/* <tbody>
                            {
                                this.state.OrderDetails.map(cartline =>
                                {
                                   return( <tr key= {cartline.id}>
                                        <td> {cartline.cart_id}</td>
                                        <td> {cartline.customer_id}</td>
                                        <td> {cartline.quantity}</td>
                                        <td> {cartline.order_id}</td>
                                    

                                    </tr>)
                                })
                            }
                        </tbody> */}
                  
                    </table>
                </div>

            </div>
        );
    }
}

export default Cartdetails