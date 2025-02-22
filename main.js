import Stopwatch from "./stopwatch.js";

const title = 'Stopwatch';

const sw = new Stopwatch();

function Html() {
    const div = document.createElement("div");
    div.className = "stopwatch";
    
    div.innerHTML = `
        <h1>Stopwatch</h1>
        <button id="start-button">Start</button>
        <button id="stop-button">Stop</button>
        <button id="reset-button">Reset</button>
        <br></br>
        <div class="stopwatch-time">${sw.time.toFixed(2)}</div>
        <br>
        <div class="user-message"></div>
    `;
    setTimeout(() => {
        document.getElementById('start-button').addEventListener('click', () => sw.start() )
        },0);
    setTimeout(() => {
        document.getElementById('stop-button').addEventListener('click', () => sw.stop() )
        },0);
    setTimeout(() => {
        document.getElementById('reset-button').addEventListener('click', () => sw.reset() )
        },0);

    return div;
}

document.body.prepend(Html());


