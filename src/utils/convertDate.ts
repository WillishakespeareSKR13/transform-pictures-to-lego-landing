/// convert date to string YYYY-MM-DD HH:mm:ss
export function convertDate(date: Date): string {
  return date.toISOString().slice(0, 19).replace('T', ' ');
}
