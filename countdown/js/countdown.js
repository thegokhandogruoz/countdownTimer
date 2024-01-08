class countDown {
    constructor(expiredDate, render, complete) {
        this.expiredDate = expiredDate;
        this.render = render;
        this.complete = complete;

        this.initialize();
    }

    initialize() {
        // Perform any initialization tasks here
        this.update();
        this.start();
    }

    update() {
        const currentDate = new Date();
        const timeDifference = this.expiredDate - currentDate;

        if (timeDifference <= 0) {
            // Countdown has reached the expired date
            this.complete();
        } else {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            const time = {
                days,
                hours,
                minute: minutes, 
                seconds
            };

            this.render(time);

            setTimeout(() => this.update(), 1000);
        }
    }

    setExpiredDate(expiredDate) {
        this.expiredDate = expiredDate;
        this.update();
    }

    start() {
        // Additional logic to start the countdown
    }
}
