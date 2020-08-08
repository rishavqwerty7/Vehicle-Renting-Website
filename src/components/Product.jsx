import React from "react"
import { Link } from "react-router-dom"

import styles from "../Css/Home.module.css"
import aveo from "./images/aveo.jpg"
import ford from "./images/ford_escape.jpg"
import hondaAccord from "./images/honda_accord.jpg"
import hondaCivic from "./images/honda_civic.jpg"
import landRover from "./images/land_rover.jpg"
import toyotaCorolla from "./images/toyota_corolla.jpg"

export default class Product extends React.Component {
  constructor(props) {
    super(props)
  }

  getImage = (carName) => {
    if (carName === "Aveo") {
      return aveo
    } else if (carName === "Ford Escape") {
      return ford
    } else if (carName === "Honda Accord") {
      return hondaAccord
    } else if (carName === "Honda Civic") {
      return hondaCivic
    } else if (carName === "Land Rover") {
      return landRover
    } else if (carName === "Toyota Corolla") {
      return toyotaCorolla
    }
  }

  render() {
    const { data, match } = this.props

    const item = data.find((item) => item.carName === match.params.carName)
    return (
      <div className="row" style={{ height: "750px", marginLeft: "70px" }}>
        <div className="col">
          <div class="card" style={{ width: "25rem", marginTop: "50px" }}>
            <img
              class="card-img-top"
              src={this.getImage(item.carName)}
              alt="Car"
            />
            <div class="card-body">
              <h2 class="card-title">{item.carName}</h2>
              <p class="card-text">
                <strong>Description : </strong>
                {item.description}
                <div>
                  <strong>Location : </strong>
                  {item.location[0]}
                </div>
                <div>
                  <strong>Fuel : </strong> {item.fuel}
                </div>
                <div>
                  <strong>Price : </strong> {item.price}
                </div>
                <div>
                  <strong>Transmission : </strong> {item.transmission}
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={styles.mand}>
            <h4>Booking Details</h4>
            <div style={{ marginTop: "40px" }}>Name</div>
            <div>
              <input placeholder="Enter Name" />
            </div>
            <div style={{ marginTop: "10px" }}>Email</div>
            <div>
              <input placeholder="Enter Email" />
            </div>
            <div style={{ marginTop: "10px" }}>Address</div>
            <div>
              <input placeholder="Enter Address" />
            </div>
            <div style={{ marginTop: "10px" }}>Pin Code</div>
            <div>
              <input placeholder="Enter Pincode" />
            </div>
            <div style={{ marginTop: "20px" }}>
              <Link to="/booked">
                <button class="btn btn-dark">Proceed</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
