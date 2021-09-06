import React from "react"

function Tag(props) {
    const { name, data } = props
    return (
        <div className="tagbox">
            <div>
                {name}
            </div>
            <div>
                {
                    data.length
                }
            </div>
        </div>
    )
}
export default Tag