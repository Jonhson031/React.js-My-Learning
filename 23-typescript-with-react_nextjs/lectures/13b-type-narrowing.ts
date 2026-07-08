// * Type Narrowing using 'in'
// ? It's great for distinguishing between different types of objects.
// Check if property exists in an object

type Customer = {
  name: string;
};

type VIPcustomer = {
  permissions: string[];
};

type Person = Customer | VIPcustomer;

function printCustomer(person: Person) {
  if ("permissions" in person) {
    console.log(person.permissions);
  } else {
    console.log(person.name);
  }
}

// * Type Narrowing using 'instanceof'
// ? Useful for classes and built-in objects.
// Check if an object is an instance of a class
const date = new Date();
console.log(date instanceof Date); // true

const error = new Error("Oops");
console.log(error instanceof Error); // true

export async function GET() {
  try {
    const data = await getProducts();

    return Response.json(data);
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 500 });
    }
    return Response.json({ message: "Unknown error" }, { status: 500 });
  }
}
