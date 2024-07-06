// speedDetector.js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function speedDetector() {
    rl.question("Enter the speed of the car (km/h): ", (answer) => {
        let speed = parseInt(answer);

        if (speed < 70) {
            console.log("Ok");
        } else {
            let points = Math.floor((speed - 70) / 5);
            if (points > 12) {
                console.log("License suspended");
            } else {
                console.log(`Points: ${points}`);
            }
        }

        rl.close();
    });
}

speedDetector();