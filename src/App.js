import splash from './splash.png';
import './App.css';
import Problem from './components/Problem'
import { useEffect, useState } from 'react';
import Tags from './components/Tags'
import Problemanalytics from './components/Problemanlytics';
import Contests from './components/Contests';
function App() {
  const [loaded, setloaded] = useState(true)
  const [searched, setsearched] = useState(false)
  const [username, setusername] = useState("")
  const [problems, setproblems] = useState([])




  var loaddata = async function loadData(username) {
    var url = `https://codeforces.com/api/user.status?handle=${username}&from=1&count=5000`
    var response = await fetch(url)
    var data = await response.json()
    setproblems(data.result)
    setloaded(true)

  }


  function handleChange(e) {
    setusername(e.target.value)
  }
  function handleSearch() {
    setloaded(false)
    setsearched(true)
    loaddata(username)
  }
  const loading = <div className="loader-wrapper">
    <span className="loader"><span className="loader-inner"></span></span>
  </div>
  const temp1 = <div className="usernameinput">
    <label style={{ fontSize: "30px", margin: "10px" }}>Username: </label>
    <input type="text" onChange={handleChange} style={{ fontSize: "25px" }}></input>
    <button onClick={handleSearch} style={{ fontSize: "25px", margin: "10px", borderRadius: "10px", borderColor: "#33ccff" }}>search</button>
  </div>
  const temp2 = <div >
    < Tags data={problems} ></Tags>
    <div className="analysisbox">
      {
        <Problemanalytics data={problems}></Problemanalytics>
      }
    </div>
    <div className="chartbox">
      {
        <Contests name={username}></Contests>
      }
    </div>
  </div>

  return (
    <div className="App">
      {temp1}
      {searched ? (loaded ? temp2 : loading) : <div className="splash">
        <img width="900px" src={splash}></img>
      </div>}
    </div>
  );
}

export default App;
