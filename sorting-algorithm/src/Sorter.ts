export class Sorter {
    constructor(public collection:/* TODO: fix me!*/ ) {}
    sort(): void {
        const { length } = this.collection;

        // Bubble sort
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                // All of this only works if collection is number[]
                // if collection is an array of numbers
                // Type Guard instanceof
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        [this.collection[j], this.collection[j + 1]] = [
                            this.collection[j + 1],
                            this.collection[j],
                        ];
                        // const leftHand = this.collection[j];
                        // this.collection[
                        //     j
                        // ] = this.collection[j + 1];
                        // this.collection[j + 1] = leftHand;
                    }
                }
                // Type Guard typeof
                if (typeof this.collection === "string") {
                    // All of this only works if collection is a string
                    // If collection is a string, do this logic instead:
                    //~~compare and swap characters
                }
            }
        }
    }
}
