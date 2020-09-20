// not the composition implementation in Design Patterns book (One Object has a reference to others	)
// **THIS IS MULTIPLE INHERITANCE!!! NOT COMPOSITION**
/*Favor object composition over class inheritance 
                                 Design patters, pg 20 */
const rectangular = (state) => {
    return {
        area: () => {
            return state.height * state.width;
        },
    };
};

const openable = (state) => {
    return {
        toggleOpen: () => {
            state.open = !state.open;
        },
        // not a good pattern cause if openable has area()
        // rectangular also has a area()
        // which are we going to get?
        area: () => {},
    };
};

const buildRectangleWindow = (state) => {
    return Object.assign(state, rectangular(state), openable(state));
};
// composing the behaviors of an object by combining them together
const rectangleWindow = buildRectangleWindow({
    height: 20,
    width: 20,
    open: false,
});

console.log(rectangleWindow.open);
rectangleWindow.toggleOpen();
console.log(rectangleWindow.open);
