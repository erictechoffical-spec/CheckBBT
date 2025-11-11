// config.js

const API_CONFIG = {
  // 正式環境的 API URL
  apiUrl: "https://script.google.com/macros/s/AKfycbw85Jc2N46IXHr-5H-ivjVwUGPJbNwFBfd_U-FJ53PLqNY8Awe_s5jmJl_-DvR-0qc7/exec",
  
  // 新增回呼網址
  redirectUrl: "https://erictechoffical-spec.github.io/CheckBBT/"
  // 你也可以在這裡加入其他設定，例如：
  // timeout: 5000,
  // version: 'v4.0.9'
};
// 👇 新增：為了兼容性，同時定義全域變數 apiUrl
const apiUrl = API_CONFIG.apiUrl;
