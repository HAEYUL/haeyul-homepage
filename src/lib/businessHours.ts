export function isOpenNow(openTime: string, closeTime: string): boolean {
  const now = new Date();
  const kstNow = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));
  const minutesNow = kstNow.getHours() * 60 + kstNow.getMinutes();

  const [openH, openM] = openTime.split(':').map(Number);
  const [closeH, closeM] = closeTime.split(':').map(Number);
  const openMinutes = openH * 60 + openM;
  const closeMinutes = closeH * 60 + closeM;

  return minutesNow >= openMinutes && minutesNow < closeMinutes;
}
