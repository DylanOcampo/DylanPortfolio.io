
import { Work } from "./Work.js";
import { WorkSimple } from "./WorkSimple";


export const WorkHandler = ({ numW }) => {

let elementWork;


if(numW === 0 || numW === 5 || numW === 6 ) {
    elementWork = <Work num = {numW}></Work>;
}
if (numW === 1 || numW === 2 || numW === 3 || numW === 4) {
    elementWork = <WorkSimple num = {numW}></WorkSimple>;
}

return (
    <>{elementWork}</>
)

}