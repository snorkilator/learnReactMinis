import {useState, useEffect} from "react";

export default function App() {
    const [date, setDate]= useState(new Date())
    return <>
        <button id="re-render" onClick={() => (setDate(new Date))}>{date.toLocaleTimeString()}</button>
    </>;
}