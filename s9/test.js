var text = "abcdac";
if (text.includes("a")) {
  console.log("Text má v sobě a");
}
if (text.includes("e")) {
  console.log("Text má v sobě e");
}
if (text.includes("ad")) {
  console.log("Text má v sobě 'ad'");
}
if (text.includes("a")&& text.includes("d")) {
  console.log("Text má v sobě 'a' a zároveň 'd'");
}
if (text.includes("ac")) {
  console.log("Text má v sobě ac");
}
console.log(text.slice(1,4));
