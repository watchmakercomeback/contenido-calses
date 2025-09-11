// Utility Types

// Partial: All propeties of type are optional

type MyPartial <T> = {[P in keyof T]?:T[P]|undefined;}

type Product = { 
    id: number, 
    name: string, 
    price: number, 
    stock?: number 
}

type ProductDraft = MyPartial<Product>

const draftProduct: ProductDraft = {name: "Laptop"}


// Required: All propeties of type are mandatory

type MyRequired <T> = { [P in keyof T]-?: T[P]; }

type StrictProduct = MyRequired<Product>;
const fullProduct: StrictProduct = {id: 1, name: "Laptop", price: 1200, stock: 10}


// Readonly: All propeties of type set to readonly

type MyReadonly<T> = {readonly [P in keyof T]: T[P];}

type staticProduct = MyReadonly<Product>
const static: staticProduct = { id: 2, name: "Mouse", price: 20, stock: 50 }
// si se quisiera hacer un frozen.price = 15 daria error


type Employee = {
    id: number,
    name: string,
    email: string,
    salary: number,
    department: string
}

// Pick: Constructs a new type, piking propeties from type.

type MyPick<T, K extends keyof T> = { [P in K]: T[P]; }

type EmployeeContact = MyPick<Employee, "name" | "email">;
const contact: EmployeeContact = { 
    name: "pollo", 
    email: "pollo@email.com" 
};

// Omit: Constructs a new type, removing propeties from type
type MyOmit<T, K extends keyof any> = { [P in Exclude<keyof T, K>]: T[P]; }

type EmployeeSinSalary = MyOmit<Employee, "salary">;
const employeeSafe: EmployeeSinSalary = { 
    id: 1, 
    name: "Carlos", 
    email: "carlos@mail.com", 
    department: "IT" }


// Record: objeto tipado con claves y valores
type MyRecord<K extends keyof any, T> = { [P in K]: T; }
type Roles = "admin" | "manager" | "staff";

type RolePermissions = MyRecord<Roles, string[]>;
const rolePerms: RolePermissions = {
    admin: ["create", "delete", "update"],
    manager: ["update", "view"],
    staff: ["view"]
}

// Exclude: excluye de T lo que este en U 
type MyExclude <T, U> = T extends U ? never : T

type PaymentMethod = "cash" | "card" | "crypto" | "paypal"
type TradPayments = MyExclude<PaymentMethod, "crypto" | "paypal">

const payment1: TradPayments = "cash"
// si pasara paypal o crypto daria error

// Extract: extrae de T lo que esté en U
type MyExtract<T, U> = T extends U ? T : never

type DigPayments = MyExtract<PaymentMethod, "crypto" | "paypal">
const payment2: DigPayments = "crypto"
// si pasara cash daria error porque no lo trajo

// NonNullable: elimina null y undefined
type MyNonNullable<T> = T & {}

type UserResponse = { id: number; name: string} | null | undefined
type SafeUser = MyNonNullable<UserResponse>

const user1: SafeUser = { id: 10, name: "Rafael"}
// si pasara un null o undefined da error

// ReturnType: retorna el tipo de datos que retorna una funcion
type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any

function calTotal (prices: number[]){
    return prices.reduce((sum, p) => sum +p, 0)
}

type totalType = MyReturnType<typeof calTotal>

const total: totalType = 500