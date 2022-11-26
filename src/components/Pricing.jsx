import React, {useState} from 'react'
import {images} from '../constants'
import {Counter, TotalPrice} from './index'

const Pricing = () => {
  const [userCount, setUserCount] = useState(1);
  
  const adjustUserCount = (amount)=> {
    setUserCount((currentCount)=>{
      return currentCount + amount;
    })
  }  
  return (
    <section className = "pb-24 pt-12" style={{"background": "whitesmoke"}}>
        <div className="container" id="pricing">
            <div className="row justify-center my-4">
                <div className="col-12 col-md-10 text-center">
                    <h1 className="display-2 mb-4 h1_pricing">
                        <strong>
                            Most affordable sales tracking software
                        </strong>
                    </h1>
                    <h3>
                        Join for  
                        <strong>
                           &nbsp;Free
                        </strong>
                         &nbsp;today!
                    </h3>
                </div>
            </div>
            <div className="row text_gray">
                <div className="col-12">
                    <app-plan>
                        <div className="container pt-4">
                            <div className="row">
                                <div className="col-lg-8 col-sm-12 p-4" style={{"margin" : "0 auto", "backgroundColor": "white", "borderRadius":"10px"}}>
                                    <div className="row">
                                        <div className="col-8 text_gray">
                                            <h2>Pay per member</h2>
                                            <p>Our software gives you and your team complete access to mapping,
                                                pinning ,team tracking, linked calender,sales appointments,
                                                digital contracts, route planning,team competitions and more. 
                                            </p>
                                        </div>
                                        <div className="col-4 text_center self_center">
                                            <img src={images.accounting} alt="Accounting" style={{"width": "65%", "margin": "0 auto"}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Counter 
                                userCount={userCount}
                                adjustUserCount={adjustUserCount}
                            />
                            <TotalPrice 
                                userCount={userCount}
                            /> 
                        </div> 
                    </app-plan>
                </div>
            </div>           
        </div>
    </section>
  )
}

export default Pricing
