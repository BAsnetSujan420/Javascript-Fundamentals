function makeLine(length) {
    let line = "";
    for (let j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

console.log(makeLine(7));

function buildTriangle(length) {
    let triangle = "";
    let line = 1;
    for(line = 1; line < length; line++){
        triangle += makeLine(line);
    }

    return triangle;
}

console.log(buildTriangle(7));