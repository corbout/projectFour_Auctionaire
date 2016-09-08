import React, { Component } from 'react';
import { Carousel, Button } from 'react-bootstrap';

class IndexCarousel extends Component {
    
    render () {
        function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.text(minutes + ":" + seconds);

            if (--timer < 0) {
                timer = duration;
                }
            }, 1000);
        }

        (function ($) {
            var fiveMinutes = 60 * 5,
                display = $('#time');
            startTimer(fiveMinutes, display);
        });
        
        var CarouselStyle = {
            maxWidth: '100%',
            height: 'auto'
        }
        
        var ButtonStyle = {
            marginRight: '20px'
        }
        
        return (
            <div className="centerCarousel">
                <Carousel className="col-md-4">
                    <Carousel.Item style={CarouselStyle}>
                      <img width={'auto'} height={300} alt="autox300" src="https://c4.staticflickr.com/9/8106/28882680083_5eed607f96_o.jpg"/>
                      <Carousel.Caption>
                        <h3>First slide label</h3>
                        <h4 id='timer'>Timer Here</h4>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <Button style={ButtonStyle} bsStyle="link">Bid</Button><Button style={ButtonStyle} bsStyle="danger">Buyout</Button>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={CarouselStyle}>
                      <img width={'auto'} height={300} alt="autox300" src="https://c6.staticflickr.com/9/8476/28886809413_c4171ecb26_o.jpg"/>
                      <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <h4 id='timer'>Timer Here</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Button style={ButtonStyle} bsStyle="link">Bid</Button><Button style={ButtonStyle} bsStyle="danger">Buyout</Button>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={CarouselStyle}>
                      <img width={'auto'} height={300} alt="autox300" src="https://c8.staticflickr.com/9/8505/28886811903_8bdce7b301_o.jpg"/>
                      <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <h4 id='timer'>Timer Here</h4>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <Button style={ButtonStyle} bsStyle="link">Bid</Button><Button style={ButtonStyle} bsStyle="danger">Buyout</Button>
                      </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
               <Carousel className="col-md-4">
                    <Carousel.Item style={CarouselStyle}>
                      <img width={'auto'} height={300} alt="autox300" src="https://c4.staticflickr.com/9/8106/28882680083_5eed607f96_o.jpg"/>
                      <Carousel.Caption>
                        <h3>First slide label</h3>
                        <h4 id='timer'>Timer Here</h4>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <Button style={ButtonStyle} bsStyle="link">Bid</Button><Button style={ButtonStyle} bsStyle="danger">Buyout</Button>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={CarouselStyle}>
                      <img width={'auto'} height={300} alt="autox300" src="https://c6.staticflickr.com/9/8476/28886809413_c4171ecb26_o.jpg"/>
                      <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <h4 id='timer'>Timer Here</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Button style={ButtonStyle} bsStyle="link">Bid</Button><Button style={ButtonStyle} bsStyle="danger">Buyout</Button>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={CarouselStyle}>
                      <img width={'auto'} height={300} alt="autox300" src="https://c8.staticflickr.com/9/8505/28886811903_8bdce7b301_o.jpg"/>
                      <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <h4 id='timer'>Timer Here</h4>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <Button style={ButtonStyle} bsStyle="link">Bid</Button><Button style={ButtonStyle} bsStyle="danger">Buyout</Button>
                      </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
               <Carousel className="col-md-4">
                    <Carousel.Item style={CarouselStyle}>
                      <img width={'auto'} height={300} alt="autox300" src="https://c4.staticflickr.com/9/8106/28882680083_5eed607f96_o.jpg"/>
                      <Carousel.Caption>
                        <h3>First slide label</h3>
                        <h4 id='timer'>Timer Here</h4>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <Button style={ButtonStyle} bsStyle="link">Bid</Button><Button style={ButtonStyle} bsStyle="danger">Buyout</Button>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={CarouselStyle}>
                      <img width={'auto'} height={300} alt="autox300" src="https://c6.staticflickr.com/9/8476/28886809413_c4171ecb26_o.jpg"/>
                      <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <h4 id='timer'>Timer Here</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Button style={ButtonStyle} bsStyle="link">Bid</Button><Button style={ButtonStyle} bsStyle="danger">Buyout</Button>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={CarouselStyle}>
                      <img width={'auto'} height={300} alt="autox300" src="https://c8.staticflickr.com/9/8505/28886811903_8bdce7b301_o.jpg"/>
                      <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <h4 id='timer'>Timer Here</h4>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <Button style={ButtonStyle} bsStyle="link">Bid</Button><Button style={ButtonStyle} bsStyle="danger">Buyout</Button>
                      </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }      
}

export default IndexCarousel;