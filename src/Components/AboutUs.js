import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const AboutUs=()=>
{
    return (
        <div className="container">
           <h3>Introduction</h3>
           <p>CapG is a one stop shop for all your fashion and lifestyle needs. </p>
           <h3>Brands</h3>
           <p>CapG understands its shoppers's needs and caters to them with choice of accessories and cosmetics from over 100 leading Indian and International Brands</p>
           <h3>Recognition</h3>
           <p>Awarded <b>'Fashion eRetailer of the year 2015'</b> by Franchise India</p>
           <div className="container" style={{padding:"50px"}}>
            <div className="row">
            <div className="card col-md-4  offset-md-4 offset-md-4 ">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <Carousel className="col-13">
                        <Carousel.Item>
                        <img
                                className="d-block w-100"
                                src="https://p7.hiclipart.com/preview/418/281/84/download-professional-women-thumbnail.jpg"
                                alt="First slide"
                            />
                            <div style={{color:"purple"}}>
                                <h1>Lead-Pavithra</h1>
                            </div>
                                
                        
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                                className="d-block w-100"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR9EgZ4667-rKTOG8DSqF2jBtkfq0-oFuHRw&usqp=CAU"
                                alt="Second slide"
                            />
                            <div style={{color:"purple"}}>
                                <h1>Executive Officer-Yamini</h1>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                                className="d-block w-100"
                                src="https://image.freepik.com/free-vector/business-woman-character_69773-1.jpg"
                                alt="Third slide"
                            />
                            <div style={{color:"purple"}}>
                                <h1>Manager-Ramya</h1>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                                className="d-block w-100"
                                src="https://us.123rf.com/450wm/mathibfa/mathibfa1812/mathibfa181200379/114014585-stock-illustration-beautiful-smiling-business-woman-showing-thumbs-up-sign-gesturing-with-both-hands-like-agree-approve.jpg?ver=6"
                                alt="Fourth slide"
                            />
                            <div style={{color:"purple"}}>
                                <h1>CEO-Ezhiloviya</h1>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                                className="d-block w-100"
                                src="https://img.favpng.com/15/0/19/woman-professional-clip-art-png-favpng-gJGEmgwEJNgg2uxLwuX2j1k7y.jpg"
                                alt="Fifth slide"
                            />
                            <div style={{color:"purple"}}>
                                <h1>Assistant Manager-Sannidhi</h1>
                            </div>
                        </Carousel.Item>
                        
                    </Carousel>
                </div>
          </div>
          </div>
          </div>
        </div>
    )
}
export default AboutUs