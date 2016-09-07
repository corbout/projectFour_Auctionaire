import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class IndexCarousel extends Component {
    render () {
        var CarouselStyle = {
            maxWidth: '100%',
            height: 'auto'
        }
        return (
            <div className="centerCarousel">
                <Carousel className="col-md-4">
                    <Carousel.Item style={CarouselStyle}>
                      <img width={'auto'} height={300} alt="autox300" src="https://c4.staticflickr.com/9/8106/28882680083_5eed607f96_o.jpg"/>
                      <Carousel.Caption>
                        <h3>First slide label</h3>
                        <h4>Timer Here</h4>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={CarouselStyle}>
                      <img width={'auto'} height={300} alt="autox300" src="https://c6.staticflickr.com/9/8476/28886809413_c4171ecb26_o.jpg"/>
                      <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <h4>Timer Here</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={CarouselStyle}>
                      <img width={'auto'} height={300} alt="autox300" src="https://c8.staticflickr.com/9/8505/28886811903_8bdce7b301_o.jpg"/>
                      <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <h4>Timer Here</h4> 
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
               <Carousel className="col-md-4">
                    <Carousel.Item style={CarouselStyle}>
                      <img width={'auto'} height={300} alt="autox300" src="https://c4.staticflickr.com/9/8106/28882680083_5eed607f96_o.jpg"/>
                      <Carousel.Caption>
                        <h3>First slide label</h3>
                        <h4>Timer Here</h4>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={CarouselStyle}>
                      <img width={'auto'} height={300} alt="autox300" src="https://c6.staticflickr.com/9/8476/28886809413_c4171ecb26_o.jpg"/>
                      <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <h4>Timer Here</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={CarouselStyle}>
                      <img width={'auto'} height={300} alt="autox300" src="https://c8.staticflickr.com/9/8505/28886811903_8bdce7b301_o.jpg"/>
                      <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <h4>Timer Here</h4> 
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
               <Carousel className="col-md-4">
                    <Carousel.Item style={CarouselStyle}>
                      <img width={'auto'} height={300} alt="autox300" src="https://c4.staticflickr.com/9/8106/28882680083_5eed607f96_o.jpg"/>
                      <Carousel.Caption>
                        <h3>First slide label</h3>
                        <h4>Timer Here</h4>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={CarouselStyle}>
                      <img width={'auto'} height={300} alt="autox300" src="https://c6.staticflickr.com/9/8476/28886809413_c4171ecb26_o.jpg"/>
                      <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <h4>Timer Here</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={CarouselStyle}>
                      <img width={'auto'} height={300} alt="autox300" src="https://c8.staticflickr.com/9/8505/28886811903_8bdce7b301_o.jpg"/>
                      <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <h4>Timer Here</h4> 
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }      
}

export default IndexCarousel;