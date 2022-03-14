var text = ["$", " $", "n $", "1n $", "c1n $", "1c1n $", "l1c1n $", "gl1c1n $", "g $", "gl $","gl1","gl1c $","gl1c1 $","gl1c1n $"];
var counter = 0;
var inst = setInterval(change, 300);

function change() {
    document.title = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
    }
}
