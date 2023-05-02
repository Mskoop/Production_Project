import {useState, useEffect} from "react"
import './App.css'
import GiveItem from "./components/GiveItem"

function App() {
const [workload, setWorkload] = useState({})

useEffect( () => {
  fetch("http://localhost:9876/api/v1/status")
  .then (res => res.json())
  .then((data) => {
      setWorkload(data)
  })
}, []
)

console.log(workload)

  return (
    <>
      <div>
        <GiveItem setWorkload={setWorkload}/>
        <p>{workload.money}$</p>
        <p>capacity</p>
        <div className="capacity">
          <div style={{height:workload.capacity*4+"px"}}>

          </div>
        </div>




      </div>
    </>
  )
}

export default App
