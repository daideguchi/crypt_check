const today = new Date();
const date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
const time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
const datetime =
    date + ' ' + time

export { datetime };



// const today = new Date();
// const formatted = today
//   .toLocaleDateString("ja-JP", {
//     year: "numeric",
//     month: "2-digit",
//     day: "2-digit",
//   })
//   .split("/")
//   .join("-");

// console.log(formatted);
