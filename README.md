# phase-1-week-1-code-challenge-speedDetector
Week 1 Code Challenge 2: Speed Detector (Toy Problem)

Imported the readline module from Node.js standard library.

Used readline.createInterface to create an instance (rl) for reading from process.stdin (user input) and writing to process.stdout (console).

Used rl.question to prompt the user to enter the speed of the car and handle the response asynchronously in the callback function.

Parsed the input (answer) to an integer (speed) inside the callback function, and evaluate it based on the specified criteria:
    (a.) If speed is less than 70 km/h, print "Ok".
    (b.) Otherwise, calculate demerit points (points) for speeds exceeding 70 km/h, where each 5 km/h above 70 incurs one demerit point.
    (c.) If points exceed 12, print "License suspended". Otherwise, print the total demerit points.

Used rl.close() to close the interface once the input is processed.

