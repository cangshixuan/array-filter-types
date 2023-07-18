interface User {
  name: string;
  age: number;
}

export function getAdults(users: (User | null)[]): User[] {
  return (users.filter(Boolean) as User[]).filter((user) => user.age >= 18);
}
