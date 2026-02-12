import shapes from "../../styles/Shapes.module.css";

function Circle({x, y, width, height}: {x: number, y: number, width: number, height: number}) {
    return <div style={{position: "absolute", left: x - width / 2, top: y - height / 2, width: width, height: height}} className={shapes.circle}></div>
}

export default Circle;