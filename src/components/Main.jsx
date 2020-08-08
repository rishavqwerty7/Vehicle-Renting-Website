import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { data } from './data/data'
import Home from './Home'
import AllProduct from './Allproduct'
import Product from './Product'
import Booked from './Booked'
import About from './About'
import Contact from './Contact'
import styles from '../Css/Home.module.css'
import log from './images/log.jpg'


export default class Main extends React.Component {
    render() {
        return (
            <>
                <div className={styles.Navbar}>
                    <img src={log} height="30px" width="30px" className={styles.Nav} alt="" />
                    <h2 className={styles.Nav}>RENTWENT.com</h2>
                    <div className={styles.nav1}>
                        <Link to='/'>
                            <button type="button" class="btn btn-dark">Home</button>
                        </Link>
                    </div>
                    <div className={styles.Nav}>
                        <Link to="/aboutus">
                            <button type="button" class="btn btn-dark">About us</button>
                        </Link>
                    </div>
                    <div className={styles.Nav}>
                        <Link to="/allproduct" >
                            <button type="button" class="btn btn-dark">cars on rent</button>
                        </Link>
                    </div>
                    <div className={styles.Nav}>
                        <Link to="/contactus">
                            <button type="button" class="btn btn-dark">Contact</button>
                        </Link>
                    </div>
                    <div className={styles.Nav}><Link to="/booked"></Link></div>
                </div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/allproduct" exact render={(props) => <AllProduct {...props} data={data} />} />
                    <Route path="/allproduct/:carName" render={(props) => <Product {...props} data={data} />} />
                    <Route path="/booked" component={Booked} />
                    <Route path="/aboutus" component={About} />
                    <Route path="/contactus" component={Contact} />
                </Switch>
            </>

        )
    }
}