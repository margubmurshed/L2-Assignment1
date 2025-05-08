# What are some differences between interfaces and types in TypeScript?

Types and Interfaces both can used to define shape of an object. But here are some defferences between interfaces and types in typescript.

# 1. First of all, extending

Interfaces can use 'extends' keyword to extend another interface.
Example:

```ts

    interface DigitalInfo{
        email: string;
        contact: string;
    }

    interface Person extends DigitalInfo {
        name: string;
        address: string;
    }
```

 The uppercode means that the properties from both interfaces are all required unless there are some optional ones.


 On the other hand, types use &(intersection) to extend properties from other types.

```ts
    type DigitalInfo = {
        email: string;
        contact: string;
    }

    type BasicInfo = {
        name: string;
        address: string;
    }

    type Person = BasicInfo & DigitalInfo

```


# 2. Declaration Merging

interfaces use declaration merging. This means you can define interfaces using same name multiple times and all the properties defined inside these will be merged into one

Example:

```ts

    interface Person {
        name: string;
        age: number;
        address: string;
    }

    interface Person {
        email: string;
        contact: string
    }

```

 now both of the person interface will be merged into one and will behave like all the properties are defined in one Person interface

```ts
    interface Person {
        name: string;
        age: number;
        address: string;
        email: string;
        contact: string;
    }

```


  types can't have declaration merging. Typescript throws error when it is done.

```ts    
    type Person = {
        name: string;
        age: number;
        address: string;
    }

    type Person = {
        email: string;
        contact: string;
        // Error
    }
```


# 3. Primitive aliasing

With types, you can alias primitive types like string, number, boolean, null, undefined but you can't alias primitives with interfaces. You can only alias object type data like arrays and functions.

```ts
    type name = string;
    type age = number;
    type isAdmin = true;
```





# What is the use of the keyof keyword in TypeScript? Provide an example.

keyof operator is used to extract keys of an object defining type of interface as an union. 
For example:

```ts
    type Person = {
        name: string;
        age: number;
        address: string;
    }

    type PersonKeys = keyof Person; // equivalent to => name | age | address
```

The most practical usecase of keyof operator would be extracting values from object properties safely

```ts

const getValueFromProperty = <T, K extends keyof T>(obj: T, key: K) : T[K] => obj[key];

const person : Person = {
    name: "Shakib",
    age: 38
}

console.log(getValueFromProperty(person, "age")); // 38
console.log(getValueFromProperty(person, "name")); // Shakib
console.log(getValueFromProperty(person, "address")); // error

```

Here in the uppercode, there is a function named getValueFromProperty which extracts value from a object property. It is a generic function. T refers to the object that has been passed as an argument. "K extends keyof T" says that K will be "name | age" means K can't be other than name or age property. That makes keyof super useful because its dynamic and gives us autocomplete suggestions. Also it ensures type safety by preventing typos and works great with utility types.



Thank you for reading my blog <3