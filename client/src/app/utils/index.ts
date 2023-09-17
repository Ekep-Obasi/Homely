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
    .filter((key) => user[key as UserKeyType] !== "")
    .reduce(
      (acc, curr) => ({ ...acc, ...{ [curr]: user[curr as UserKeyType] } }),
      {}
    );
}

export function setFormData<T extends object>(obj: T, formData: FormData) {
  Object.keys(obj)
    .filter(
      (key) =>
        typeof obj[key as keyof T] === "string" ||
        obj[key as keyof T] instanceof Blob
    )
    .forEach((key) => {
      const value = obj[key as keyof T];

      if ((typeof value === "string" || value instanceof Blob) && value) {
        formData.append(key, value);
      }
    });
}
