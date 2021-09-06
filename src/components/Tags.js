
import React from "react"
import Tag from './Tag'
import Chart from './Chart'

function Tags(props) {
    var tagnames = ["implementation", "math", "greedy", "dp",
        "data structures",
        "brute force",
        "constructive algorithms",
        "graphs",
        "sortings",
        "binary search",
        "dfs and similar"
        , "trees"
        , "strings"
        , "number theory"
        , "combinatorics"
        , "geometry"
        , "bitmasks"
        , "two pointers"
        , "dsu"
        , "shortest paths"
        , "probabilities"
        , "divide and conquer"
        , "hashing"
        , "games"
        , "flows"
        , "interactive"
        , "matrices"
    ]
    const problems = props.data

    var tagsObject = new Object()
    // removing failed submissions
    for (const tagname of tagnames) {
        tagsObject[tagname] = problems.filter((prob => prob.problem.tags.includes(tagname) && prob.verdict == "OK"))
    }

    //removing duplicates since there may be more than one ACs for a problem
    var isPresent = new Object()
    const temp = new Object()
    for (const tagname of tagnames) {
        temp[tagname] = []
        isPresent = {}
        for (const prob of tagsObject[tagname]) {
            if (!isPresent[prob.problem.name]) {
                temp[tagname].push(prob)
                isPresent[prob.problem.name] = true;
            }
        }
    }
    tagsObject = temp


    tagnames.sort((a, b) => tagsObject[b].length - tagsObject[a].length)

    return (
        <>
            < div className="chartbox">
                <Chart tagnames={tagnames} data={tagsObject} ></Chart>

            </div>
        </>
    )

}

export default Tags