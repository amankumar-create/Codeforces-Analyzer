
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Problemanalytics(props) {
    var problems = props.data
    var isPresent = new Object()
    const temp = []
    for (const prob of problems) {
        if (!isPresent[prob.problem.name] && prob.verdict === "OK") {
            temp.push(prob)
            isPresent[prob.problem.name] = true;
        }
    }
    problems = temp
    const indices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R"]
    var problemindex = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 0, R: 0 }
    var problemrating = { 800: 0, 900: 0, 1000: 0, 1100: 0, 1200: 0, 1300: 0, 1400: 0, 1500: 0, 1600: 0, 1700: 0, 1800: 0, 1900: 0, 2000: 0, 2100: 0, 2200: 0, 2300: 0, 2400: 0, 2500: 0, 2600: 0, 2700: 0, 2800: 0, 2900: 0, 3000: 0 }
    for (let prob of problems) {
        ++problemindex[prob.problem.index]
        ++problemrating[prob.problem.rating]
    }
    const chartdata_index = [], chartdata_rating = []
    for (const index of indices) {
        chartdata_index.push({
            index: index,
            solved: problemindex[index]
        })
    }


    for (let i = 800; i < 3100; i = i + 100) {
        chartdata_rating.push({
            rating: i,
            solved: problemrating[i]
        })
    }
    return (
        <>
            <div className="ratingbox">
                <h1 style={{ textAlign: "center", fontSize: "50px" }}>Problem ratings</h1>
                <div style={{ marginTop: "100px", overflowX: "auto", overflowY: "hidden" }}>
                    <BarChart
                        width={1100}
                        height={400}
                        data={chartdata_rating}
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
                        <Bar dataKey="solved" fill="#FF8B00" />

                    </BarChart>
                </div>
            </div>
            <div className="indexbox">
                <h1 style={{ textAlign: "center", fontSize: "50px" }}>Problem indices</h1>
                <div style={{ marginTop: "100px", overflowX: "auto", overflowY: "hidden" }}>
                    <BarChart
                        width={1100}
                        height={400}
                        data={chartdata_index}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="1 1" />
                        <XAxis dataKey="index" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="solved" fill="#FF8B00" />

                    </BarChart>
                </div>
            </div>
        </>
    )

}