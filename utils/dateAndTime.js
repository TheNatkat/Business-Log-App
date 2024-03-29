export default function getCurrentDateAndTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours24 = now.getHours();
  const hours12 = hours24 % 12 || 12;
  const amOrPm = hours24 >= 12 ? 'PM' : 'AM';
  const minutes = String(now.getMinutes()).padStart(2, '0');

  const formattedDateTime = `${day}-${month}-${year} ${hours12}:${minutes} ${amOrPm}`;
  return formattedDateTime;
}
