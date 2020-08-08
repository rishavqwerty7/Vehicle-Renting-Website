import React from 'react'

import styles from '../Css/Home.module.css'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.jpeg'
import icon3 from './images/icon3.png'

export default class Footer extends React.Component
{
    render()
    {
        return(
            <div className={styles.foot}>
                    <div className={styles.hea}>
                        <h2><u>Contact us</u></h2>
                    </div>
                      <div className={styles.contact}>
                    <strong>Email : </strong> rishavritz79@gmail.com
                    <br/>
                    <strong>Instagram : </strong>rishavwrites55
                    <br/>
                    <strong>facebook : </strong>Healthywealthy
                    <br/>
                    <strong>Phone no : </strong>8709168607
                    <br/>
                    <div>
                         <img src={icon1} style={{margin:"10px"}} height="30px" width="30px" alt="icon"/>   
                         <img src={icon2} style={{margin:"10px"}} height="30px" width="30px" alt="icon"/> 
                         <img src={icon3} style={{margin:"10px"}} height="30px" width="30px" alt="icon"/> 

                    </div>
                </div>
                
               </div>

        )
    }

}