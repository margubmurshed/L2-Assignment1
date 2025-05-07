{
    const formatString = (input: string, toUpperCase?: boolean): string => {
        if (toUpperCase === true || toUpperCase === undefined) {
            return input.toUpperCase()
        } else {
            return input.toLowerCase();
        }
    }

    console.log(formatString("Hello"))// Output: "HELLO"
    console.log(formatString("Hello", true));   // Output: "HELLO"
    console.log(formatString("Hello", false));  // Output: "hello"





    type Item = {
        title: string;
        rating: number;
    }

    const filterByRating = (items: Item[]): Item[] => {
        return items.filter(item => item.rating >= 4)
    }

    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 }
    ];

    console.log(filterByRating(books));
    // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]






    const concatenateArrays = <T>(...arrays: T[][]): T[] => {
        return arrays.reduce((previousValue: T[], currentValue: T[]) => previousValue.concat(currentValue), [])
    }

    console.log(concatenateArrays(["a", "b"], ["c"]));       // Output: ["a", "b", "c"]
    console.log(concatenateArrays([1, 2], [3, 4], [5]));     // Output: [1, 2, 3, 4, 5]





    class Vehicle {
        constructor(private make: string, public year: number) { }

        getInfo() {
            return `Make: ${this.make}, Year: ${this.year}`
        }
    }

    class Car extends Vehicle {
        constructor(make: string, year: number, private model: string) {
            super(make, year);
        }

        getModel() {
            return `Model: ${this.model}`
        }
    }

    const myCar = new Car("Toyota", 2020, "Corolla");
    console.log(myCar.getInfo());   // Output: "Make: Toyota, Year: 2020"
    console.log(myCar.getModel());  // Output: "Model: Corolla"








    const processValue = (value: string | number): number => {
        if (typeof value === "string") {
            return value.length
        } else {
            return value * 2;
        }
    }

    console.log(processValue("hello")); // Output: 5







    interface Product {
        name: string;
        price: number;
    }

    const getMostExpensiveProduct = (products: Product[]): Product | null => {
        products.sort((a, b) => b.price - a.price);
        return products[0] || null;
    }

    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ];

    console.log(getMostExpensiveProduct(products));
    // Output: { name: "Bag", price: 50 }









    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    const getDayType = (day: Day): string => {
        if (day === 5 || day === 6) {
            return "Weekend"
        } else {
            return "Weekday"
        }
    }

    console.log(getDayType(Day.Monday));   // Output: "Weekday"
    console.log(getDayType(Day.Sunday));   // Output: "Weekend"


    const squareAsync = async (n: number): Promise<number> => {
        return new Promise((resolve, reject) => {
            if (n >= 0) {
                setTimeout(() => {
                    resolve(n * n)
                }, 1000)
            } else {
                reject("Error: Negative number not allowed")
            }
        })
    }


    squareAsync(4).then(console.log);        // Output after 1s: 16
    squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed
}