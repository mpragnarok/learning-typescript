// generics
class HoldAnything<TypeOfData> {
    data: TypeOfData;

    add(a: T): T {
        return a;
    }
}

const holdNumber = new HoldAnything<number>();

holdNumber.data = 123;
holdNumber.add(10);
const holdString = new HoldAnything<string>();

holdString.data = "123";
holdString.add("aaa");
