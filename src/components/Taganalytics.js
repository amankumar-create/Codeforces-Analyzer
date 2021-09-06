import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Taganalytics(props) {
    const tagname = props.tagname
    const data = props.data
    const color = props.color
    var problemrating = { 800: 0, 900: 0, 1000: 0, 1100: 0, 1200: 0, 1300: 0, 1400: 0, 1500: 0, 1600: 0, 1700: 0, 1800: 0, 1900: 0, 2000: 0, 2100: 0, 2200: 0, 2300: 0, 2400: 0, 2500: 0, 2600: 0, 2700: 0, 2800: 0, 2900: 0, 3000: 0 }
    var toughestProbInContest = 0, toughestProbInPractice = 0;
    const chartdata = []


    for (let i = 0; i < data.length; ++i) {
        const prob = data[i]
        if (prob.verdict === "OK") {
            ++problemrating[prob.problem.rating]
            if (prob.author.participantType === "CONTESTANT") {
                if (prob.problem.rating > toughestProbInContest) {
                    toughestProbInContest = prob.problem.rating
                }
            }
            else {
                if (prob.problem.rating > toughestProbInPractice) {
                    toughestProbInPractice = prob.problem.rating
                }
            }
        }
    }
    for (let i = 800; i < 3100; i = i + 100) {
        chartdata.push({
            rating: i,
            solved: problemrating[i]
        })
    }


    return (
        <>
            <h1 style={{ textAlign: "center", color: color, fontSize: "50px" }}>{tagname}</h1>
            <ul style={{ paddingLeft: "100px" }}>
                <li style={{ fontSize: "30px" }}>Total number of problems solved: {data.length}</li>
                <li style={{ fontSize: "30px" }}>Toughest Problem in solved in contest: {toughestProbInContest}</li>
                <li style={{ fontSize: "30px" }}>Toughest Problem in solved in practice: {toughestProbInPractice}</li>
            </ul>
            <div style={{ marginTop: "100px", overflowX: "auto", overflowY: "hidden" }}>
                <BarChart
                    width={1500}
                    height={500}
                    data={chartdata}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="rating" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="solved" fill={color} />

                </BarChart>
            </div>

        </>
    )
}