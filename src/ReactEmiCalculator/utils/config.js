export function numberWithCommas(x) {
  if (x) return `₹ ${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}
export const tenureData = [12, 24, 36, 48, 60];
