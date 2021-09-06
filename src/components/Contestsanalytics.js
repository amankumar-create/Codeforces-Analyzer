
export default function Contestanalytics(props) {
    const contests = props.data
    var bestrank = 10000000000, worstrank = 0, maxup = -1, maxdown = 100000000
    for (const contest of contests) {
        if (contest.rank < bestrank) {
            bestrank = contest.rank
        }
        if (contest.rank > worstrank) {
            worstrank = contest.rank
        }
        const change = contest.newRating - contest.oldRating
        if (change > maxup) {
            maxup = change
        }
        if (change < maxdown) {
            maxdown = change
        }
    }
    return (
        <>
            <h1 style={{ fontSize: "50px" }}>Contests stats</h1>
            <ul>
                <li style={{ fontSize: "30px" }}>
                    Total number of contests given: {contests.length}
                </li>
                <li style={{ fontSize: "30px" }}>
                    Best rank: {bestrank}
                </li>
                <li style={{ fontSize: "30px" }}>
                    Worst rank: {worstrank}
                </li>
                <li style={{ fontSize: "30px" }}>
                    Max up: {maxup}
                </li>
                <li style={{ fontSize: "30px" }}>
                    Max down: {maxdown}
                </li>

            </ul>

        </>
    )

}