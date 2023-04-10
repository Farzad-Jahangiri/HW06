// let map = new Map();
// map.set("name", "John");
// let keys = map.keys();
// keys.push("more");
// Error: keys.push is not a function

//این خطا به این دلیل رخ می‌دهد که keys() یک iterator برای تکرار کلیدهای Map است و مانند آرایه، متد push() در اینجا معنایی ندارد. برای افزودن مقدار جدید به Map باید از متد set() استفاده کرد.

let map = new Map();
map.set("name", "John");
let keys = map.keys();
map.set("more",true);
keys = map.keys();
console.log(keys);