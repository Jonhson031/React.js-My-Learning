// * Type Narrowing
// ? It allows TypeScript to reduce a broad type (like a union) to a more specific type based on checks you perform in your code.
type RegularCustomer = {
  plan: "regular";
  tickets: number;
  aboveLimit: boolean;
};

type PremiumCustomer = {
  plan: "premium";
  tickets: number;
};

export type Customer = RegularCustomer | PremiumCustomer;

// * Check if RegularCustomer or PremiumCustomer
export function openTicket(customer: Customer): number {
  if (customer.plan === "regular" && customer.aboveLimit) {
    return -1;
  }
  return customer.tickets + 1;
}

// * typeof
function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

export type CustomerMessage = {
  content: string;
  source: "chat" | "email" | "unknown";
};

export function parseCustomerMessage(input: unknown): CustomerMessage {
  if (typeof input === "string") {
    return {
      source: "email",
      content: input,
    };
  }
  if (Array.isArray(input)) {
    return {
      source: "chat",
      content: input.join("\n"),
    };
  }
  return {
    source: "unknown",
    content: "",
  };
}

// * Unknown type is a type-safe counterpart of any.
// ? It means that you can assign any value to an unknown type, but you can't use it without first asserting or narrowing its type.
// This makes unknown a safer alternative to any, as it forces you to perform type checks before using the value.

/* Used for:
- APIs that return data of unknown type
- User input that can be of any type
- Third-party libraries that return data of unknown type
*/
function print2(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}

print2("Hello");
print2(123); // * This will not be printed because the type is not a string.
