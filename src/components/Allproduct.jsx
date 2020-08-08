import React from "react"
import { Link } from 'react-router-dom'
import aveo from './images/aveo.jpg'
import ford from './images/ford_escape.jpg';
import hondaAccord from './images/honda_accord.jpg';
import hondaCivic from './images/honda_civic.jpg';
import landRover from './images/land_rover.jpg';
import toyotaCorolla from './images/toyota_corolla.jpg';


import styles from '../Css/Home.module.css'

export default class Allproduct extends React.Component {
    constructor(props) {
        super(props)
    }
    getImage = carName => {
        if (carName === 'Aveo') {
            return aveo;
        } else if (carName === 'Ford Escape') {
            return ford;
        } else if (carName === 'Honda Accord') {
            return hondaAccord;
        } else if (carName === 'Honda Civic') {
            return hondaCivic;
        }
        else if (carName === 'Land Rover') {
            return landRover;
        }
        else if (carName === 'Toyota Corolla') {
            return toyotaCorolla;
        }
    }
    render() {
        const { data, match } = this.props
        return (
            <div className={styles.zacs}>

                {
                    data.map(item => {
                        return <div key={item.carName} className={styles.dhg}>
                            {/* <div class="media">
                                <img class="mr-3" src={this.getImage(item.carName)} height="400px" alt="car" />
                                <div class="media-body" style={{ marginLeft: "100px", marginTop: "70px" }}>
                                    <h3 class="mt-0">{item.carName}</h3>
                                    <p>{item.description}</p>
                                    <p><strong>Fuel : </strong> {item.fuel}</p>
                                    <strong>{item.price}</strong>
                                    <p><Link to={`${match.url}/${item.carName}`} style={{ marginTop: "20px" }} className="btn btn-dark">Book Now</Link></p>
                                </div>
                            </div> */}



                            <div class="card mb-3 shadow-lg p-3 mb-5 bg-white rounded" style={{ maxWidth: "650px", height: "300px" }}>
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src={this.getImage(item.carName)} height="280px" width="500px" alt="car" class="card-img" />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body ml-2" style={{ backgroundColor: "rgb(252, 237, 31)" }} >

                                            <h3 class="card-title">{item.carName}</h3>
                                            <p>{item.description}</p>
                                            <p><strong>Fuel : </strong> {item.fuel}</p>
                                            <strong>${item.price}</strong>

                                            <p><Link to={`${match.url}/${item.carName}`} style={{ marginTop: "20px" }} className="btn btn-dark">Book Now</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        )
    }
}



