import {useState, useEffect} from "react";
import mapboxgl from "mapbox-gl"

export default function App() {
    const [rand, setRand]= useState(Math.random())
    return <>
        <button id="re-render" onClick={() => (setRand(Math.random()))}>{rand}</button>
    </>;
}