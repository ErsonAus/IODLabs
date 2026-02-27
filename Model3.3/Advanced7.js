// Original base class
class DigitalClock {
    constructor(prefix) {
        // Prefix that will be printed before the time
        this.prefix = prefix;
    }

    display() {
        // Get hours/minutes/seconds and pad with a leading zero
        const date = new Date();
        let [hours, mins, secs] =
            [date.getHours(), date.getMinutes(), date.getSeconds()];

        if (hours < 10) hours = '0' + hours;
        if (mins < 10)  mins  = '0' + mins;
        if (secs < 10)  secs  = '0' + secs;

        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }

    stop() {
        // Clear the interval stored on the instance
        clearInterval(this.timer);
    }

    start() {
        // Default tick every 1000 ms
        this.display();
        this.timer = setInterval(() => this.display(), 1000);
    }
}

// PrecisionClock adds a precision parameter (ms between ticks)
class PrecisionClock extends DigitalClock {
    constructor(prefix, precision = 1000) {
        // Call the parent constructor for the prefix
        super(prefix);
        // Store the precision; default to one second
        this.precision = precision;
    }

    start() {
        // Override start to use the custom precision
        this.display();
        this.timer = setInterval(() => this.display(), this.precision);
    }
}

// AlarmClock adds a wake‑up time (hh:mm) and stops when reached
class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime = '07:00') {
        super(prefix);
        // Store the wake‑up time string
        this.wakeupTime = wakeupTime;
    }

    start() {
        // Begin ticking as usual, checking the time each second
        this.display();
        this.timer = setInterval(() => {
            this.display();

            // Build current hh:mm string
            const date = new Date();
            let h = date.getHours();
            let m = date.getMinutes();
            if (h < 10) h = '0' + h;
            if (m < 10) m = '0' + m;
            const current = `${h}:${m}`;

            // Compare to the wake‑up time and stop if matched
            if (current === this.wakeupTime) {
                console.log('Wake Up');
                this.stop();
            }
        }, 1000);
    }
}

// Usage examples:

const myClock = new DigitalClock('my clock:');
myClock.start();          // Ticks every second

const fastClock = new PrecisionClock('fast:', 200); // Ticks every 200ms
fastClock.start();

const alarm = new AlarmClock('alarm:', '07:00');
alarm.start();            // Will print “Wake Up” at 07:00 and stop