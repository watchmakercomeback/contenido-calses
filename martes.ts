/*
Utility types.
In typescript there are a set of utility types that facilitate types transformations.
*/

/*
Partial<type>
It allows us to take an object and pass their defined properties as optionals, there is no longer
any need pass all atributes
*/

type User = {
  id: string;
  name: string;
  isAdmin: boolean;
}

type OptionalUser = {
  id?: string;
  name?: string;
  isAdmin?: boolean;
};

type Roles = "admin" | "user" | "guest";


type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

/* 
Required<Type>
Pretty much like Partial, it does the opposite, instead of making something oprional, if there is
something optional it makes it so we are ought to provide the info 
*/

type MyRequired<T> = {
  [P in keyof T]-? : T[P];
}

/* 
Readonly<Type>
Much like Required, it only allows the full values to be added, but they cannot be updated later on, only readable
*/

type MyReadonly <T> = {
  readonly[P in keyof T] : T[P];
}

/*
Pick<Type, Keys>
this property will help us construct another type by picking a set of properties from the original type
*/

type MyPick <T, K extends keyof T> = {
  [P in K]: T[P];
}

type UserPick= MyPick<User, "id" | "name">;

/*
Exclude
It operates on union types, and removes the selected elements and returns a new uniton type without the selected elements
This removes the values that I pass as U parameter 
*/

type MyExclude<T, U> = T extends U ? never : T;
type UserExclude = MyExclude<Roles, "admin">;

/* 
Omit<Type, Keys>
This property will help us construct another type by excluding the keys inside the omit that we do not want to add onto the new class
*/ 
type MyOmit<T, K extends keyof T> = MyPick<T, MyExclude<keyof T, K>>;

type UserOmit = MyOmit<User, "id" | "name">;

/*
Record<type>
*/

type MyRecord<K extends keyof any, T> = {
  [P in K] : T
};

type UserRecord = MyRecord<Roles, string[]>;

/*
Extract
It operates on union types, and removes the selected elements and returns a new uniton type without the selected elements
This keeps the values that I pass as U parameter 
*/

type MyExtract<T, U> = T extends U ? T : never;
type UserExtract = MyExtract<Roles, "admin">;

/*
NonNullable<type>
This utility type removes all nulls and undefined values, from the type that was passed
*/

type MyNonNullable<T> = T extends null | undefined ? never : T;


/*
RetrunType
*/

type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;


//examples

const partialUser:MyPartial<User> = {name:"ana"};
console.log("partial type: ", partialUser);

const requiredUser:MyRequired<OptionalUser> = {
  id: "123",
  name: "Miguel",
  isAdmin: true
}; 
console.log("required type: ", requiredUser);


const readonlyUser:MyReadonly<User> = {
  id: "123",
  name: "Miguel",
  isAdmin: true
};
console.log("readonly type: ", readonlyUser);

const pickUser:UserPick = {
  id: "123",
  name: "Miguel"
};
console.log("pick type: ", pickUser);

const excludeUser:UserExclude = "guest"

console.log("exclude type: ", excludeUser);

const userPublic: UserOmit = {
  isAdmin: true
};

console.log("omit type: ", userPublic);

const recordUser: UserRecord = {
  admin: ["read", "write", "delete"],
  user: ["read", "write"],
  guest: ["read"]
};

console.log("record type: ", recordUser);

const extractUser: UserExtract = "admin";

console.log("extract type: ", extractUser);

type MaybeString = string | null | undefined;

type CleanString = MyNonNullable<MaybeString>;
// Resultado: string

const usernonnullable: CleanString = "Miguel"; // ✅

console.log("non nullable type: ", usernonnullable);

function getUser() {
  return { id: "u1", name: "Miguel", isAdmin: true };
}

type UserResult = MyReturnType<typeof getUser>;

const result: UserResult = {
  id: "u1",
  name: "Miguel",
  isAdmin: true
};

console.log("return type: ", result);




