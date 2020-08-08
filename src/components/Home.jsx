import React from 'react'
import {Link,Route} from 'react-router-dom'
import About from './About'
import Allproduct from './Allproduct'
import styles from '../Css/Home.module.css'
import home from './images/home.png'
import doc1 from './images/doc1.jpeg'
import doc2 from './images/doc2.jpeg'
import doc3 from './images/doc3.jpeg'
import ic1 from './images/ic1.png'
import ic2 from './images/ic2.jpeg'
import ic3 from './images/ic3.jpeg'
import ic4 from './images/ic4.jpeg'

export default class Home extends React.Component{
    render()
    {
        return(
            <div>
                <div className={styles.dash}>
                     <img src={home} height="350px" width="50%" alt="" style={{marginTop:"100px",marginLeft:"130px"}}/>
                    <div className={styles.hat}>
                        <div className={styles.locate}>
                            <h5 style={{margin:"30px"}}><strong>TO FUEL YOUR WANDERLUST</strong></h5>
                            <h6>PICK UP</h6>
                            <input placeholder="Enter your Location" style={{margin:"10px"}}/>
                            <div>
                                <Link to="/allproduct">
                                    <button type="button" class="btn btn-dark">Find Vehicle -></button>
                                </Link> 
                            </div>
                         </div>
                    </div>   
                </div>


                <div className="container">
                    <div className={styles.hx}>
                        <h3>WHY CHOOSE US</h3>
                    </div>
                    <div className="row" style={{height:"500" ,margin:"30px"}}>
                        <div className="col">
                            <div class="media">
                                <img class="mr-3" src={ic1} height="100" width="100" alt="car"/>
                                <div class="media-body">
                                     <h5 class="mt-0">Outstanding Services </h5>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div class="media">
                                <img class="mr-3" src={ic2} height="100" width="100" alt="car"/>
                                <div class="media-body">
                                     <h5 class="mt-0">Name for Quality Vehicles</h5>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row" style={{height:"500",margin:"10px"}}>
                        <div className="col">
                            <div class="media">
                                <img class="mr-3" src={ic3} height="100" width="100" alt="car"/>
                                <div class="media-body">
                                     <h5 class="mt-0">AT/MT Transmission </h5>
                                      Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div class="media">
                                <img class="mr-3" src={ic4} height="100" width="100" alt="car"/>
                                <div class="media-body">
                                     <h5 class="mt-0">24 Hours Support </h5>
                                       Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



               
               <div className={styles.card}>
                    <div className={styles.heading} id={styles.hov}>
                        <h2 >What our client says</h2>
                    </div>

                    <div className={styles.box1}>
                    <img src={doc1} height="150px" alt="" width="150px" className={styles.im}/>
                    <p style={{margin:"30px"}}>Takahiro Hachigo is a Japanese engineer and businessman, who has been the chief executive officer of Honda since June 2015. Prior to that, Hachigo was a managing officer at Honda.</p>
                    <Link to='https://en.wikipedia.org/wiki/Takahiro_Hachigo'>
                    <button type="button" class="btn btn-dark">Read more</button>
                    </Link>
                   </div>

                   <div className={styles.box}>
                    <img src={doc2} height="150px" width="150px" alt="" className={styles.im}/>
                    <p style={{margin:"30px"}}>Maruti Suzuki India Limited, formerly known as Maruti Udyog Limited, is an automobile manufacturer in India.As of July 2018, passenger car market Industries.</p>
                    <Link to='https://en.wikipedia.org/wiki/Maruti_Suzuki'>
                    <button type="button" class="btn btn-dark">Read more</button>
                    </Link>
                   </div>

                   <div className={styles.box}>
                   <img src={doc3} height="150px" width="150px" alt="" className={styles.im}/>
                   <p style={{margin:"30px"}}>Ola Källenius is a Swedish businessman, and the chairman of the board of management of Daimler AG, and head of Mercedes-Benz Cars and many other vehicles</p>
                    <Link to={About}>
                    <button type="button" class="btn btn-dark">Read more</button>
                    </Link>
                   </div>
               </div>
               
               
                

            <Route path="/allproduct"  component={Allproduct} />
            </div>
        )
    }
}