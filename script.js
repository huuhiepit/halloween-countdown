const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

let countdownDate = "2024-10-31T00:00";
let countDown = new Date(countdownDate).getTime();

let updateTime = setInterval(function () {
  let now = new Date().getTime();

  // Tính chênh lệch thời gian giữa thời gian hiện tại và thời gian đếm ngược
  let difference = countDown - now;

  // Tính toán số ngày, giờ, phút, giây còn lại
  let dys = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hrs = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let secs = Math.floor((difference % (1000 * 60)) / 1000); // Đổi & thành %

  // Cập nhật nội dung của các phần tử hiển thị ngày, giờ, phút, giây
  days.innerHTML = dys < 10 ? "0" + dys : dys;
  hours.innerHTML = hrs < 10 ? "0" + hrs : hrs;
  minutes.innerHTML = mins < 10 ? "0" + mins : mins;
  seconds.innerHTML = secs < 10 ? "0" + secs : secs;
}, 1000); // Cập nhật mỗi 1 giây

const ghost = document.getElementById("ghost");

function moveGhost() {
  let x = Math.random() * (window.innerWidth - 100); // Trừ kích thước hồn ma để không vượt quá màn hình
  let y = Math.random() * (window.innerHeight - 100); // Trừ kích thước hồn ma để không vượt quá màn hình

  // Di chuyển hồn ma đến vị trí ngẫu nhiên
  ghost.style.transform = `translate(${x}px, ${y}px)`;
}

// Di chuyển hồn ma ngẫu nhiên mỗi 2 giây
setInterval(moveGhost, 2000);

const scarySound = document.getElementById("scary-sound");
const scareImageContainer = document.getElementById("scare-image-container");
const scareImage = document.getElementById("scare-image");

// Khi nhấp vào hồn ma
ghost.addEventListener("click", function () {
  // Phát âm thanh hù dọa
  scarySound.play();

  // Hiển thị ảnh hù dọa và thêm hiệu ứng giật
  ghost.style.display = "none";
  scareImage.style.display = "flex";
  scareImage.classList.add("shake");

  // Sau 5 giây tự động tắt ảnh và dừng hiệu ứng giật
  setTimeout(function () {
    scarySound.pause(); // Dừng âm thanh
    scarySound.currentTime = 0; // Đặt lại âm thanh về đầu

    ghost.style.display = "flex";
    scareImage.style.display = "none"; // Ẩn lại ảnh
    scareImage.classList.remove("shake"); // Dừng hiệu ứng giật
  }, 10000); // 5 giây sau ảnh biến mất
});
