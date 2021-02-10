import React, { Component } from "react"


class HeaderComponent extends Component{

    render()
    {
        return(
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar navbar-light bg-light">
                    <div><h3 className="fas fa-tshirt"><b>G3-Shopping Corner</b></h3>
                    </div>
                    </nav>
                </header>
            </div>
        )
    }
}
export default HeaderComponent