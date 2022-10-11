import {useState, useEffect} from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js"

export default function App() {
    const [random, setRandom] = useState(Math.random());

    mapboxgl.accessToken = "pk.eyJ1Ijoic25vcmtpbGF0b3IiLCJhIjoiY2w5MnozejVmMW54dDNvb2lxamFvOWhnZCJ9.MmCmF4AS_QjPIFhe4X8joA";

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v10',
            center:  [ 12.567898, 55.67583 ],
            zoom: 9
        });
    }, []);

    return <>
        <button id="re-render" onClick={() => setRandom(Math.random())}>Re-render</button>
        <div id="map"></div>
    </>;
}