import logo from './logo.svg';
import './App.css';
import Problem from './components/Problem'
import { useEffect, useState } from 'react';
import Tags from './components/Tags'
import Problemanalytics from './components/Problemanlytics';

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
  const loading = <div class="loader-wrapper">
    <span class="loader"><span class="loader-inner"></span></span>
  </div>
  const temp1 = <div className="usernameinput">
    <label style={{ fontSize: "30px", margin: "10px" }}>Username: </label>
    <input type="text" onChange={handleChange} style={{ fontSize: "25px" }}></input>
    <button onClick={handleSearch} style={{ fontSize: "25px", margin: "10px" }}>search</button>
  </div>
  const temp2 = <div >
    < Tags data={problems} ></Tags>
    <div className="problemanalysisbox">
      {
        <Problemanalytics data={problems}></Problemanalytics>
      }
    </div>
  </div>

  return (
    <div className="App">
      {temp1}
      {searched ? (loaded ? temp2 : loading) : <div />}



    </div>
  );
}

export default App;
