export function getRandomUser(users: string[]): string {
  return users[Math.round(Math.random() * (users.length - 1))];
}
