{
    const formatString = (input: string, toUpperCase?: boolean): string => {
        if (toUpperCase === true || toUpperCase === undefined) {
            return input.toUpperCase()
        } else {
            return input.toLowerCase();
        }
    }


    
    const filterByRating = (items: {
        title: string;
        rating: number;
    }[]): {
        title: string;
        rating: number;
    }[] => {
        return items.filter(item => item.rating >= 4)
    }



    const concatenateArrays = <T>(...arrays: T[][]): T[] => {
        return arrays.reduce((previousValue: T[], currentValue: T[]) => previousValue.concat(currentValue), [])
    }



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



    const processValue = (value: string | number): number => {
        if (typeof value === "string") {
            return value.length
        } else {
            return value * 2;
        }
    }



    interface Product {
        name: string;
        price: number;
    }

    const getMostExpensiveProduct = (products: Product[]): Product | null => {
        products.sort((a, b) => b.price - a.price);
        return products[0] || null;
    }



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

}