import React, { useState } from "react"
function Problem(props) {
    const probProps = props.data
    var probStyle
    if (probProps.verdict == "OK") {
        probStyle = {
            backgroundColor: "lightgreen",
            borderColor: "green",
        }
    }
    else if (probProps.verdict == "WRONG_ANSWER") {
        probStyle = {
            backgroundColor: "lightpink",
            borderColor: "red",
        }
    }
    else {
        probStyle = {
            backgroundColor: "lightgrey",
            borderColor: "black",
        }
    }

    return (
        <div className="probbox" style={probStyle}>
            {probProps.problem.name}
        </div>
    )
}
export default Problem