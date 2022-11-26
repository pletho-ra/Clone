import React from 'react'
import { BsFillHandIndexThumbFill } from 'react-icons/bs'


const TotalPrice = ({userCount}) => {
  return (
    <div className='row pt-2'>
      <div 
        className="col-lg-8 col-sm-12 p-4" 
        style={{'margin': '0 auto', 'backgroundColor':'white', 'borderRadius':'10px'}}
        >
            <div className="row">
                <div className="col-lg-8 col-sm-12">
                    <span className="text-[#8898aa]">Monthly Total</span>
                    <h1 style={{'fontSize': '2.75rem'}}>${userCount*15.99}</h1>
                </div>
                <div className="col-lg-4 col-sm-12 self-center text-right">
                    <button type='button' className="register_btn lg:inline-block sm:inline-block font-[50] text-[0.75rem]" style={{'backgroundColor':'#815633', 'color': 'white'}}>
                        <span className="mr-2">
                            <BsFillHandIndexThumbFill className="inline-block"/>
                        </span>
                        Register&nbsp;
                        <span className='hidden md:inline'>for&nbsp;</span>
                        Free
                    </button>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default TotalPrice
