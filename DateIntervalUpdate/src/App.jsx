import {useState, useEffect} from "react";


//goal
// update date every second
export default function App() {
    const [date, setDate]= useState(new Date())
    useEffect(() => {
        const clearInter = setInterval(()=>setDate(new Date()), 5000)
        return () => clearInterval(clearInter)
    }, [])
    return <>
    <h1>Time: {date.toLocaleTimeString()}</h1>
        <button id="re-render" onClick={() => (setDate(new Date))}>update</button>
    </>;
}