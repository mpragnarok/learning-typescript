// Reminder on how 'this' works in Javascript

const colors = {
    color: "red",
    printColor() {
        console.log(this.color);
    },
};
colors.printColor(); // red

const printColor = colors.printColor;

printColor(); // undefined
