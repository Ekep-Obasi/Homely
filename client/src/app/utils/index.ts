import { User } from "../types/user";

export function generateAcronym(name: string): string {
  return name !== undefined
    ? name.split(" ").length > 1
      ? name
          .split(" ", 2)
          .map((char) => char.charAt(0))
          .join("")
          .toUpperCase()
      : name.charAt(0).toUpperCase()
    : "";
}

type UserKeyType = keyof User;

export function getUserEntries(user: User) {
  return Object.keys(user)
    .filter((entries) => user[entries as UserKeyType] !== "")
    .reduce(
      (acc, curr) => ({ ...acc, ...{ [curr]: user[curr as UserKeyType] } }),
      {}
    );
}

export function setFormData<T>(obj: T, formData: FormData) {
  Object.keys(obj).map((val) => formData.append(val, obj[val as keyof T]));
}
