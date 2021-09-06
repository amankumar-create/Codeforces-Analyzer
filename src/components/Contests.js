import { useEffect, useState } from 'react'
import Ratingchangegraph from './Ratingchangegraph'
import Contestsanalytics from './Contestsanalytics'
export default function Contests(props) {
    const [contests, setcontests] = useState([])
    const username = props.name
    var loaddata = async function loadData(username) {
        var url = `https://codeforces.com/api/user.rating?handle=${username}`
        var response = await fetch(url)
        var data = await response.json()
        setcontests(data.result)
    }

    useEffect(
        () => {
            loaddata(username)
        }, []
    )

    return (
        <>
            <div className="graphbox">
                <h1 style={{ textAlign: "center", fontSize: "50px" }}>Contests Rating changes</h1>
                <Ratingchangegraph data={contests}></Ratingchangegraph>
            </div>
            <div className="contestsanalytics" >
                <Contestsanalytics data={contests}></Contestsanalytics>
            </div>
        </>
    )
}