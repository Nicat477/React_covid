
import './App.css';
import React, {useState,useEffect} from 'react';
import axios from 'axios';
function App() {
  const [info,setInfo]=useState("");
  const[date,setDate]=useState("")
  useEffect(()=>{
    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
    .then(res=>setInfo(res.data[date]))
    .catch(err=>console.log(err))
  },[info,date])
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 mx-auto mt-4'>
            
            <h2 className='text-center text-white display:3'>COVID-19 SEARCH BROWSER</h2>
            <input type='text' placeholder='GG/AA/YY' className='form-control' onChange={(e)=>setDate(e.target.value)}/>
            <table class="table text-white table-striped" >
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Number of Test</th>
                      <th scope="col">Number of Patients</th>
                      <th scope="col">Number of Deaths</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr  className={info===undefined ? "bg-danger" : "bg-success"} >
                      <th className="text-white" scope="row">{info=== undefined ? "Information is waited" : info.date}</th>
                      <td className="text-white">{info=== undefined ? "Information is waited" : info.tests}</td>
                      <td className="text-white">{info=== undefined ? "Information is waited" : info.patients}</td>
                      <td className="text-white">{info=== undefined ? "Information is waited" : info.deaths}</td>
                    </tr>
                    
                  </tbody>
                </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
