import React from 'react'
import styles from '../Css/Home.module.css'
import {store} from '../redux/store'
import {Order} from '../redux/Action'



class Booked extends React.Component{
    
    componentDidMount()
    {
      store.subscribe(()=>this.forceUpdate());
    }
    
    
    render()
    {
        return(
            <div>
            <h2 className={styles.pad} style={{padding:"20%",marginLeft:"250px"}}>
            Thanks for your Booking
            <div>
            <button onClick={()=>store.dispatch(Order())}>Order id</button>
            </div>
            {store.getState().id}
        </h2>
        
        </div>

        )

    }
}
    
export default Booked