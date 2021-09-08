let friends = ["Kelsie", "Kelsey", "Tina", "JT", "Aaron"];
for (let i = 0; i < friends.length; i++) {
    let friend = friends[i]

    let lines;
    let linesRemaining;

    for (let i = 99; i >= 1; i--) {
        if (i == 1) {
            lines = "line";
            linesRemaining = "no more lines";
        } else if (i == 2) {
            lines = "lines";
            linesRemaining = i - 1 + " line";
        } else {
            lines = "lines";
            linesRemaining = i - 1 + " lines";
        }
        console.log(i + " " + lines + " of code in the file, " + i + " " + lines + " of code; " + friend + " strikes one out, clears it all out, " + linesRemaining + " of code in the file.");
    }

}