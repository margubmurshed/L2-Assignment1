# What are some differences between interfaces and types in TypeScript?

Types and Interfaces both can used to define shape of an object. But here are some defferences between interfaces and types in typescript.

# 1. First of all, extending

Interfaces can use 'extends' keyword to extend another interface.
Example:

<!--

    interface DigitalInfo{
        email: string;
        contact: string;
    }

    interface Person extends DigitalInfo {
        name: string;
        address: string;
    }
 -->

 The uppercode means that the properties from both interfaces are all required unless there are some optional ones.


 On the other hand, types use &(intersection) to extend properties from other types.

 <!-- 
    type DigitalInfo = {
        email: string;
        contact: string;
    }

    type BasicInfo = {
        name: string;
        address: string;
    }

    type Person = BasicInfo & Digital Info

  -->


# 2. Declaration Merging

interfaces use declaration merging. This means you can define interfaces using same name multiple times and all the properties defined inside these will be merged into one

Example:

<!-- 

    interface Person {
        name: string;
        age: number;
        address: string;
    }

    interface Person {
        email: string;
        contact: string
    }

 -->

 now both of the person interface will be merged into one and will behave like all the properties are defined in one Person interface

 <!-- 
    
    interface Person {
        name: string;
        age: number;
        address: string;
        email: string;
        contact: string;
    }

  -->


  types can't have declaration merging. Typescript throws error when it is done.

  <!-- 
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
   -->


# 3. Primitive aliasing

With types, you can alias primitive types like string, number, boolean, null, undefined but you can't alias primitives with interfaces. You can only alias object type data like arrays and functions.

<!-- 
    type name = string;
    type age = number;
    type isAdmin = true;
 -->


 