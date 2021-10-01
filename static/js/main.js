function toast({ title = "", desc = "", type = "success", duration = 3000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");

    const fadeOutTime = duration + 1000;
    const autoRemoveId = setTimeout(() => {
      main.removeChild(toast);
    }, fadeOutTime);

    toast.onclick = function () {
      if (event.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };
    const icons = {
      success: "fas fa-check-circle",
      error: "fas fa-exclamation-circle",
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);
    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `InSide ease-in-out 0.5s, FadeOut ease 1s ${delay}s forwards`;
    toast.innerHTML = `
          <div class="toast__icon"><i class="${icon}"></i></div>
          <div class="toast__body">
            <div class="toast__title">${title}</div>
            <div class="toast__desc">${desc}</div>
          </div>
          <div class="toast__close"><i class="fas fa-times"></i></div>`;
    main.appendChild(toast);
  }
}

function showToastMessage() {
  toast({
    title: "Thành Công",
    desc: "Bạn đã đăng ký thành công!",
    type: "success",
    duration: 5000,
  });
}
function showErrorMessage() {
  toast({
    title: "Lỗi",
    desc: "Có thể đã bị lỗi hệ thống hoặc thông tin chưa đúng",
    type: "error",
    duration: 5000,
  });
}
