type not_empty<data> = data extends "" ? "INVALID":"VALID";
type over_18<data> = data extends 1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17 ? "INVALID": (data extends number ? "VALID":"INVALID");
type boolean_Validation<data> = data extends false ? "INVALID":"VALID";
type AND<A, B> = 
A extends "VALID" 
? (B extends "VALID" ? "VALID":"INVALID")
:"INVALID";

type OR<A, B> =
 A extends "VALID" ? "VALID":(B extends "VALID" ? "VALID":"INVALID")

type user = {
    name: string;
    age: number;
    resident: boolean;
}

type rules<U extends user> = {
    name: not_empty <U ["name"]>;
    age: over_18 <U ["age"]>;
    resident: boolean_Validation <U ["resident"]>;
    canVote: AND<over_18<U["age"]>, boolean_Validation <U ["resident"]>>;
}

// typescript evaluates types giving values like invalid or valid
type case1 = rules<{
    name: "Josefina",
    age: 22,
    resident: true
}>;

// also the same for another case that doesn't cumple xd
type case2 = rules<{
    name: "",
    age: 12,
    resident : false
}>;

// testing that cannot vote for age
type case3 = rules<{
    name: "Azafran",
    age: 12,
    resident : true
}>;