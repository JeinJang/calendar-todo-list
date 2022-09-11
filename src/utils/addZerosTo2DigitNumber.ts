export default function addZerosTo2DigitNumber(num: number) {
  return `${num}`.padStart(2, '0');
}