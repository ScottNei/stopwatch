function Stopwatch () {

    let startTime = null;
    let endTime = null;
    let isRunning = false;
    let isReset = false;
    let runningTimerId;

    let updateTime = () => {
        document.querySelector('.stopwatch-time').textContent = this.time.toFixed(2);
    }

    let showRunningTimer = () => {
        runningTimerId = setInterval( () => {
        let now = new Date();   
            this.time = (now.getTime() - startTime.getTime()) / 1000;
        updateTime();
        },50)
    }
    
    this.userMessage = function(input) {
        document.querySelector('.user-message').textContent = input;
        setTimeout(() => {
        document.querySelector('.user-message').textContent = "";
        }, 2000);
    }

    this.time = 0.0;

    this.start = function() {
        if (isRunning) {
            this.userMessage("Hey dummy, can't you see it's running?"); 
        } else if (isReset || !startTime){
            isRunning = true;
            startTime = new Date();
            isReset = false;
            showRunningTimer();
            console.log('Timer Started');
        } else {
            isRunning = true;
            showRunningTimer();
            console.log('Timer Restarted');
        }
    }

    this.stop = function() {
        if (!isRunning) {
            this.userMessage("Try starting it first."); 
        } else {
            isRunning = false;
            endTime = new Date();
            this.time = (endTime.getTime() - startTime.getTime()) / 1000;
            clearInterval(runningTimerId);
            updateTime();
            console.log('Timer Stopped');
          }
    }

    this.reset = function() {
        if (isRunning) {
            this.userMessage("You must stop it first."); 
        } else if (this.time === 0.0) {
            this.userMessage("I'm already at 0.00"); }
        else {
            this.time = 0;
            isReset = true;
            updateTime();
            console.log('Timer Reset');
         } 
    }

}

export default Stopwatch;