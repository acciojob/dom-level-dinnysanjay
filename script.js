//your JS code here. If required.
let element = getElementById("level");
let level = 0;
while (element) {
    level++;
    element = element.parentNode;
}