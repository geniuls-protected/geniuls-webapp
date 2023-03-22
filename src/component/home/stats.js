import { useState, useEffect } from "react";

export default function Stats() {

const [alumniCounter, setalumniCounter] = useState(0);
const [ctcCounter, setCtcCounter] = useState(0);
const [studentPlacedCounter, setStudentPlacedCounter] = useState(0);
const [ratingCounter, setRatingCounter] = useState(0);

var counterParameter  = [{
    "Counter" : alumniCounter,
    "counterFuction" : setalumniCounter,
    "limit" : 15.6,
    "timer" : 300
},
{
    "Counter" : ctcCounter,
    "counterFuction" : setCtcCounter,
    "limit" : 47,
    "timer" : 100
},
{
    "Counter" : studentPlacedCounter,
    "counterFuction" : setStudentPlacedCounter,
    "limit" : 85,
    "timer" : 50
},
{
    "Counter" : ratingCounter,
    "counterFuction" : setRatingCounter,
    "limit" : 9.3,
    "timer" : 300
}]

const setCounter = (item) =>{
    const {limit , counterFuction , timer}  = item
    const interval = setInterval(() => {
    counterFuction((Counter) =>Counter <limit ? Counter +1 : limit );
  },timer);

  return () => clearInterval(interval);
}


useEffect(()=>{
    counterParameter.map((item)=>setCounter(item))
},[])

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-sm-12 col-md-3 stat-style">
            <span className="big-text">{alumniCounter} LPA</span>
            <br />
            <span className="sml-text">
              Avg. Our Alumni <br />
              Placed
            </span>
          </div>
          <div class="col-lg-3 col-sm-12 col-md-3 stat-style">
            <div className="vl">
              <span className="big-text line">{ctcCounter} LPA</span>
              <br />
              <span className="sml-text">
                Highest
                <br />
                CTC
              </span>
            </div>
          </div>
          <div class="col-lg-3 col-sm-12 col-md-3 stat-style">
            <div className="vl">
              <span className="big-text line">{studentPlacedCounter}%</span>
              <br />
              <span className="sml-text">
                Student
                <br />
                Placed
              </span>
            </div>
          </div>
          <div class="col-lg-3 col-sm-12 col-md-3 stat-style">
            <div className="vl">
              <span className="big-text line">{ratingCounter}/10</span>
              <br />
              <span className="sml-text">
                Average
                <br />
                Rating
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
