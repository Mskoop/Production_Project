

const GiveItem = ({setWorkload}) => {

const plusItem = (num) => {

    fetch("http://localhost:9876/api/v1/capacity", {
        method: "POST",
        headers: { "content-type":"application/json"},
        body: JSON.stringify({zahl:num})
    })
    .then((data) => data.json())
    .then ((data)=> {setWorkload(data)} )

console.log(num)
}


    return ( 
        <div>
            <button onClick={()=> {plusItem(1)}}  >+1</button>
            <button onClick={()=> {plusItem(5)}} >+5</button>
            <button onClick={()=> {plusItem(10)}}  >+10</button>


           {/*  <button onClick={plusItem} value="5">+5</button>
            <button onClick={plusItem} value="10">+10</button>   */}
             </div>
     );
}
 
export default GiveItem;