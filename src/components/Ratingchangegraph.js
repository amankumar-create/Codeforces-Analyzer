import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,

} from 'recharts';

export default function Ratingchangegraph(props) {
    var contests = props.data
    var chartdata = contests.map((contest) => {
        return {
            name: contest.contestName,
            change: contest.newRating - contest.oldRating
        }
    })
    return (
        <div style={{ marginTop: "100px", overflowX: "auto", overflowY: "hidden" }}>
            <BarChart
                width={1800}
                height={700}
                data={chartdata}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="1 1" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine y={0} stroke="#000" />
                <Bar dataKey="change" fill="#8884d8" />
            </BarChart>
        </div>
    )
}