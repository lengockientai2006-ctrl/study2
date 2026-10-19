import { initializeApp } from
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// 1. Cấu hình Firebase
const firebaseConfig = {
  apiKey: "API_KEY_CUA_BAN",
  authDomain: "AUTH_DOMAIN_CUA_BAN",
  projectId: "PROJECT_ID_CUA_BAN",
  appId: "APP_ID_CUA_BAN"
};

// 2. Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 3. Lấy nút đăng nhập từ HTML
const googleButton = document.getElementById("googleButton");

// 4. Xử lý khi người dùng nhấn nút
googleButton.addEventListener("click", async function () {
  try {
    await signInWithPopup(auth, provider);

    // Đăng nhập thành công
    window.location.href = "home.html";
  } catch (error) {
    console.error(error);
    alert("Đăng nhập thất bại: " + error.message);
  }
});
