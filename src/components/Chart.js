import { PieChart, Pie, Sector, Cell } from 'recharts';
import { useState } from 'react';
import Taganalytics from './Taganalytics'
const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (

        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fontSize="25px" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} >{`${payload.name}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} > {`count ${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={36} textAnchor={textAnchor} fill="#999">
                {`(${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>

    );
};


function Chart(props) {
    const tagnames = props.tagnames
    const data = props.data
    const [state, setState] = useState({
        activeIndex: 0,
    })

    function onPieEnter(_, index) {
        setState({
            activeIndex: index,
        });

    };

    var noq = tagnames.map((tname) => {
        return {
            name: tname,
            cnt: data[tname].length
        }
    })

    const chartdata = noq

    const COLOR = ["#FF0087", "#FF8B00", "#A569BD", "#5499C7", "#5DADE2", "#48C9B0 ", "#52BE80", "#82E0AA", "#F4D03F ", "#8A2BE2", "#FF1493", "#AB61E1"]
    const color = new Object()
    var i = 0
    for (const tag of tagnames) {
        color[tag] = COLOR[i % COLOR.length]
        ++i
    }


    return (
        <>
            <div className="chart">
                <h1 style={{ textAlign: "center", fontSize: "50px" }}>TAGS</h1>
                <PieChart width={800} height={800}>
                    <Pie
                        activeIndex={state.activeIndex}
                        activeShape={renderActiveShape}
                        data={chartdata}
                        cx="50%"
                        cy="50%"
                        innerRadius={150}
                        outerRadius={300}
                        fill={color}
                        dataKey="cnt"
                        onMouseEnter={onPieEnter}
                    >
                        {chartdata.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={color[entry.name]} />
                        )
                        )}
                    </Pie>
                </PieChart>
            </div>
            <div className="taganalytics"><Taganalytics data={data[tagnames[state.activeIndex]]} tagname={tagnames[state.activeIndex]} color={color[tagnames[state.activeIndex]]}></Taganalytics>
            </div>
        </>
    )
}
export default Chart