// 今日の日付を取得
const today = new Date();

// 年、月、日を取得
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); // 月は0から始まるので+1し、2桁表示にパディング
const day = String(today.getDate()).padStart(2, '0');        // 2桁表示にパディング

// 希望の形式で日付を表示
const formattedDate = year + "年" + month + "月" + day + "日";

console.log(formattedDate);