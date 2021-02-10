import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
const Home=()=>
{
  return (
    <div style={{padding:"5px",backgroundColor:"grey"}}>
            <div className="row">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <Carousel className="col-13">
                        <Carousel.Item>
                        <img
                                className="d-block w-100"
                                src="https://wallpaperaccess.com/full/1190761.jpg"
                                alt="Third slide"
                            />
                             <div style={{color:"purple"}}>
                                <h1><i>The most beautiful makeup of a woman is passion</i></h1>
                            </div>
                            
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                                className="d-block w-100"
                                src="https://i.pinimg.com/originals/c2/e5/63/c2e56366a9320dde4de5d107a405b934.jpg"
                                alt="Second slide"
                            />
                            <div style={{color:"purple"}}>
                                <h1><b>Beauty, to me, is about being comfortable in your own skin</b></h1>
                            </div>
                           
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                                className="d-block w-100"
                                src="cosmetics.jpg"
                                alt="First slide"
                            />
                            <div style={{color:"purple"}}>
                                <h1><i>Beneath the makeup and behind the smile I am just a girl who wishes for the world</i></h1>
                            </div>
                        
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                                className="d-block w-100"
                                src="https://images3.alphacoders.com/274/thumb-1920-274899.jpg"
                                alt="Fourth slide"
                            />
                            <div style={{color:"purple"}}>
                                <h1>Let's Rock With G-3 Products</h1>
                            </div>
                        </Carousel.Item>
                        
                    </Carousel>
                </div>
          </div>
          </div>
  )
}
export default Home