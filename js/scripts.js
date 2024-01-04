const navbar = document.querySelector(".navbar-nav");
var isAdditionalNavItemAdded = false;

function handleResize() {
  if (window.innerWidth <= 991 && !isAdditionalNavItemAdded) {
    const additionalNavItem = document.createElement("li");
    additionalNavItem.classList.add("nav-item");
    additionalNavItem.innerHTML = `<a class="contact d-block nav-link" href="#">Liên Hệ</a>`;

    // Thêm phần tử mới vào cuối của navbar
    navbar.appendChild(additionalNavItem);

    // Đánh dấu rằng đã thêm phần tử
    isAdditionalNavItemAdded = true;
  } else if (window.innerWidth > 991 && isAdditionalNavItemAdded) {
    // Nếu màn hình lớn hơn 991px và phần tử đã được thêm, hãy loại bỏ nó
    const additionalNavItem = document.querySelector(".nav-item .contact");
    if (additionalNavItem) {
      navbar.removeChild(additionalNavItem.parentElement);
    }

    // Đánh dấu rằng đã loại bỏ phần tử
    isAdditionalNavItemAdded = false;
  }
}

// Initial check on page load
handleResize();

// Event listener for window resize
window.addEventListener("resize", handleResize);
