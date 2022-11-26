import React from 'react';


const Counter = ({userCount, adjustUserCount}) => {
  console.log('Child Render')

  return (
    <div className='row pt-2'>
      <div className="col-lg-8 col-sm-12 py-4" style={{'margin': '0 auto','backgroundColor':'white', 'borderRadius':'10px'}}>
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <div className="row">
              <div className="col-lg-6 col-sm-12" style={{'margin':'0 auto', 'alignItems':'center', 'display':'flex', 'justifyContent':'center'}}>
                <button
                  onClick={()=> adjustUserCount(-1)} 
                  className="register_btn sm:inline-block lg:inline-block m-0" 
                  style={{'background':'#815633','color':'#fff', 'borderColor':'#815633'}}
                  disabled={userCount===1 ? true : false}
                  >
                    -
                  </button>

                <h1 className="px-4 m-0">{userCount}</h1>

                <button
                  onClick={()=> adjustUserCount(1)} 
                  className="register_btn sm:inline-block lg:inline-block m-0" 
                  style={{'background':'#815633','color':'#fff', 'borderColor':'#815633'}}
                  >
                    +
                  </button>
              </div>
              <div className="col-lg-6 col-sm-12" style={{'textAlign':'center', 'alignSelf':'center'}}>
                <h2 className="m-0 py-4">{userCount} Users * $15.99/month</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counter;

