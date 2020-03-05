import React from 'react';
import Home from './Components/home'
import './App.css'
import TweenOne from 'rc-tween-one';
import { Card } from 'antd';
import Demo from './Components/demo-home'

import {Row,Col} from 'antd'
import ScrollAnim from 'rc-scroll-anim';

const ScrollOverPack = ScrollAnim.OverPack;
function App() {
  return (
   <>
         <div className="main-wrapper" style={{textAlign:"center"}}>
                  <Row>
                        <Col>
                        <TweenOne
        animation={{ opacity: 1 , y:0}}        
        style={{ opacity: 0 , transform:"translateY(-200px)"}}
        >
                            <h1 className="main-content mont">THE UNIVERSE</h1>
                            </TweenOne>
                            <TweenOne
        animation={{ opacity: 1 , y:0}}        
        style={{ opacity: 0 , transform:"translateY(100px)"}}
        >
                            <h6 className="side-main nunito">Nothing Bigger and Older</h6>
                            </TweenOne>
                        </Col>                        
                  </Row>
                  <Row>
                  <Col className="astronut-col">                        
                            <img src="/astro.png" style={{width:"200px"}} className="astronut-mob"/>                                                
                            <img src="/astro.png" style={{width:"400px", position:"absolute",left: "250px"}} className="astronut-desk"/>            
                  </Col>
                  <Col>
                  <img src="/sat.png" style={{width:"200px"}} className="sat-mob"/>                                                
                  <img src="/sat.png" style={{width:"600px", position:"absolute",right: "0px", top: "50px"}} className="sat-desk"/>            
                  </Col>
                  </Row>
          </div>
          <div className="main-wrapper"  middle="xs">
            <Row style={{padding:"3em"}}>
              <Col className="nunito" style={{color:"white",fontSize: "1.2em"}}  xs={6} md={12}>
          <div style={{paddingTop:"10em"}}>
          <ScrollOverPack
      id="page1"
      className="page1"
      replay
      playScale="30vh"
    >
          <TweenOne
        animation={{ opacity: 1 , x:0}}        
        style={{ opacity: 0 , transform:"translateX(-50px)"}}
        >

            <h1 className="mont" style={{fontSize:"3em", color: "white"}}>About</h1>
            </TweenOne>
            <TweenOne
        animation={{ opacity: 1 , x:0}}        
        style={{ opacity: 0 , transform:"translateX(50px)"}}
        >
          <p style={{fontSize:"1.2em"}}>
          The Universe (Latin: universus) is all of space and time[a] and their contents,[10] including planets, stars, galaxies, and all other forms of matter and energy. While the spatial size of the entire Universe is unknown,[3] it is possible to measure the size of the observable universe, which is currently estimated to be 93 billion light-years in diameter. In various multiverse hypotheses, a universe is one of many causally disconnected[11] constituent parts of a larger multiverse, which itself comprises all of space and time and its contents;[12] as a consequence, ‘the Universe’ and ‘the multiverse’ are synonymous in such theories.
          </p>
          </TweenOne> 
         </ScrollOverPack>
            </div>              
              </Col>         
              <Col style={{height: "80vh", textAlign:"center", paddingTop: "5em"}} xs={0} md={12}>
                  <img src="/galax2.jpg" style={{width:"80%",paddingTop:"6em"}}/>
              </Col>             
            </Row>
            <Row style={{textAlign:"center", paddingBottom:"3em"}}>
              <Col md={{offset: 3, span:4}}>
              <ScrollOverPack
      id="page1"
      className="page1"
      replay
      playScale="25vh"
    >
              <TweenOne
        animation={{ opacity: 1 , y:0}}        
        style={{ opacity: 0 , transform:"translateY(100px)"}}
        >
              <Card bordered={false} hoverable={true}>
                  <h1>13.799 ± 0.021 billion years</h1>
                  <h3 style={{marginTop:"1.3em"}}>Age</h3>
              </Card>
              </TweenOne>
              </ScrollOverPack>
              </Col>
              <Col md={{offset: 1, span:4}}>
              <ScrollOverPack
      id="page1"
      className="page1"
      replay
      playScale="25vh"
    >
              <TweenOne
        animation={{ opacity: 1 , y:0}}        
        style={{ opacity: 0 , transform:"translateY(100px)"}}
        >
              <Card bordered={false} hoverable={true}>
                  <h1>At least 1053 kg[5]</h1>
                  <h3 style={{marginTop:"1.3em"}}>Mass </h3>
              </Card>
              </TweenOne>
              </ScrollOverPack>
              </Col>
              <Col md={{offset: 1, span:4}}>
              <ScrollOverPack
      id="page1"
      className="page1"
      replay
      playScale="25vh"
    >
              <TweenOne
        animation={{ opacity: 1 , y:0}}        
        style={{ opacity: 0 , transform:"translateY(100px)"}}
        >
              <Card bordered={false} hoverable={true}>
                  <h1>9.9 x 10−30 g/cm3</h1>
                  <h3 style={{marginTop:"1.3em"}}>Average density</h3>
              </Card>
              </TweenOne>
              </ScrollOverPack>
              </Col>
              <Col md={{offset: 1, span:4}}>
              <ScrollOverPack
      id="page1"
      className="page1"
      replay
      playScale="25vh"
    >
              <TweenOne
        animation={{ opacity: 1 , y:0}}        
        style={{ opacity: 0 , transform:"translateY(100px)"}}
        >
              <Card bordered={false} hoverable={true}>
                  <h1>2.72548 <br></br>Kelvin</h1>
                  <h3 style={{marginTop:"1.3em"}}>Average temperature</h3>
              </Card>
              </TweenOne>
              </ScrollOverPack>
              </Col>
            </Row>            
          </div>
          <div  className="main-wrapper"  middle="xs">
          <ScrollOverPack
      id="page1"
      className="page1"
      replay
      playScale="50vh"
    >
        <TweenOne
        animation={{ opacity: 1 , y:0}}        
        style={{ opacity: 0 , transform:"translateY(100px)"}}
        >
          <Row style={{padding:"3em"}}>
      
          <Col className="nunito" style={{color:"white",fontSize: "1.2em"}}  xs={6} md={12}>
          <div style={{paddingTop:"10em"}}>
            
            <h1 className="mont" style={{fontSize:"4em", color: "white"}}>The Big Bang</h1>
            The Standard Model of cosmology is based on a model of spacetime called the Friedmann–Lemaître–Robertson–Walker (FLRW) metric. A metric provides a measure of distance between objects, and the FLRW metric is the exact solution of Einstein field equations (EFE) if some key properties of space such as homogeneity and isotropy are assumed to be true. The FLRW metric very closely matches overwhelming other evidence, showing that the universe has expanded since the Big Bang.
            </div>              
              </Col>   
              <Col style={{height: "80vh", textAlign:"center", paddingTop: "5em"}} xs={0} md={12}>
                  <img src="/big.jpg" style={{width:"80%",paddingTop:"6em"}}/>
              </Col>             
          </Row>
          </TweenOne>
</ScrollOverPack>
          </div>
  </>
  );
}

export default App;
// 