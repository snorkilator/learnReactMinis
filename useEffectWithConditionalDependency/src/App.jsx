import {useState, useEffect} from "react";

export default function App() {
    const [date, setDate]= useState("no date")
    useEffect(() => {
        if (date != "no date") {
            console.log(date);
        }
    }, [date]);

    let text = date != "no date" ?  date.toLocaleTimeString() : date
    return <>
        <button id="re-render" onClick={() => (setDate(new Date))}>{text}</button>
    </>;
}