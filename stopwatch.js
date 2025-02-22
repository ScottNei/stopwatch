function Stopwatch () {

    let startTime = null;
    let endTime = null;
    let running = false;
    let reset = false;
    let intervalId;

    let updateTime = () => {
        document.querySelector('.stopwatch-time').textContent = this.time.toFixed(2);
    }

    let updateInterval = () => {
        intervalId = setInterval( () => {
        let now = new Date();   
            this.time = (now.getTime() - startTime.getTime()) / 1000;
        updateTime();
        },50)
    }
    
    this.userMessage = function(input) {
        document.querySelector('.user-message').textContent = input;
        setTimeout(() => {
        document.querySelector('.user-message').textContent = "";
        }, 1500);
    }

    this.time = 0.0;

    this.start = function() {
        if (running) {
            this.userMessage("Hey dummy, can't you see it's running?"); 
        } else if (reset || !startTime){
            running = true;
            startTime = new Date();
            reset = false;
            updateInterval();
            console.log('Timer Started');
        } else {
            running = true;
            updateInterval();
            console.log('Timer Restarted');
        }
    }

    this.stop = function() {
        if (!running) {
            this.userMessage("Try starting it first."); 
        } else {
            running = false;
            endTime = new Date();
            const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
            this.time = seconds
            
            clearInterval(intervalId);
            updateTime();
            console.log('Timer Stopped');
          }
    }

    this.reset = function() {
        if (running) {
            this.userMessage("You must stop it first."); 
        } else if (this.time === 0.0) {
            this.userMessage("I'm already at 0.00"); }
        else {
            this.time = 0;
            reset = true;
            updateTime();
            console.log('Timer Reset');
         } 
    }

}

export default Stopwatch;