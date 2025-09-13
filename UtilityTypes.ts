// Utility Types Implementations

// Partial: All properties of type are optional
type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

type Product = {
  id: number;
  name: string;
  price: number;
  stock?: number;
};

type ProductDraft = MyPartial<Product>;
const draftProduct: ProductDraft = { name: "Laptop" };


// Required: All properties of type are mandatory
type MyRequired<T> = {
  [P in keyof T]-?: T[P];
};

type StrictProduct = MyRequired<Product>;
const fullProduct: StrictProduct = {
  id: 1,
  name: "Laptop",
  price: 1200,
  stock: 10,
};


// Readonly: All properties of type set to readonly
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

type StaticProduct = MyReadonly<Product>; 
const frozenProduct: StaticProduct = { id: 2, name: "Mouse", price: 20, stock: 50 };
// frozenProduct.price = 15; // error (readonly)


// Pick y Omit
type Employee = {
  id: number;
  name: string;
  email: string;
  salary: number;
  department: string;
};

// Pick: Constructs a new type, picking properties from type
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type EmployeeContact = MyPick<Employee, "name" | "email">;
const contact: EmployeeContact = {
  name: "Pollo",
  email: "pollo@email.com",
};

// Omit: Constructs a new type, removing properties from type
type MyOmit<T, K extends keyof any> = {
  [P in Exclude<keyof T, K>]: T[P];
};

type EmployeeWithoutSalary = MyOmit<Employee, "salary">;
const employeeSafe: EmployeeWithoutSalary = {
  id: 1,
  name: "Carlos",
  email: "carlos@mail.com",
  department: "IT",
};


// Record
type MyRecord<K extends keyof any, T> = {
  [P in K]: T;
};

type Roles = "admin" | "manager" | "staff";

type RolePermissions = MyRecord<Roles, string[]>;
const rolePerms: RolePermissions = {
  admin: ["create", "delete", "update"],
  manager: ["update", "view"],
  staff: ["view"],
};


// Exclude y Extract
type MyExclude<T, U> = T extends U ? never : T;

type PaymentMethod = "cash" | "card" | "crypto" | "paypal";
type TradPayments = MyExclude<PaymentMethod, "crypto" | "paypal">;

const payment1: TradPayments = "cash"; // "crypto" o "paypal" it must be and error


type MyExtract<T, U> = T extends U ? T : never;

type DigPayments = MyExtract<PaymentMethod, "crypto" | "paypal">;
const payment2: DigPayments = "crypto"; // "cash" it must be an error


// NonNullable
type MyNonNullable<T> = T extends null | undefined ? never : T;

type UserResponse = { id: number; name: string } | null | undefined;
type SafeUser = MyNonNullable<UserResponse>;

const user1: SafeUser = { id: 10, name: "Rafael" }; // null o undefined darían error


// ReturnType
type MyReturnType<T extends (...args: any[]) => any> =
  T extends (...args: any[]) => infer R ? R : any;

function calcTotal(prices: number[]) {
  return prices.reduce((sum, p) => sum + p, 0);
}

type TotalType = MyReturnType<typeof calcTotal>;
const total: TotalType = 500;