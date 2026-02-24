function truncate(str, max) {
  if (str.length > max) {
    return str.substring(0, max) + '...';
  }
  return str;
}
function truncate(str, max) {
  return str.length > max ? str.substring(0, max) + '...' : str;
}
console.log(truncate("Hello World", 5));        // "Hello..."
console.log(truncate("Hi", 5));                 // "Hi"
console.log(truncate("Programming", 8));        // "Program..."