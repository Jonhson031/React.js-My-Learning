// * Intersations
// ? Combines two types using & symbol into one

type User2 = {
  name: string;
  email: string;
};

type Admin = User2 & {
  hasAccess: boolean;
};

const admin: Admin = {
  name: "Maks",
  email: "admiN@admin.io",
  hasAccess: true,
};
