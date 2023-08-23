const headerMenu = document.querySelector(".header__menu")
const menuItems = document.querySelectorAll(".menu__item")

headerMenu.addEventListener("click", (e) => {
  e.preventDefault()
  const activeLink = e.target.closest("a")
  if (!activeLink) return
  menuItems.forEach((item) => {
    item.classList.remove("active")
  })
  activeLink.parentElement.classList.add("active")
})

const donat = document.querySelector(".header__button")
const donatModal = document.querySelector(".modal")
const casinoContainer = document.querySelector(".casino__container")
const payDonat = document.querySelector(".modal__btn")
const burgerMenuButton = document.querySelector(".header__burger")
const burgerMenu = document.querySelector(".header__menu-block")

function disableScroll() {
  document.documentElement.classList.add("lock-scroll")
  document.body.classList.add("lock-scroll")
}

function enableScroll() {
  document.documentElement.classList.remove("lock-scroll")
  document.body.classList.remove("lock-scroll")
}

donat.addEventListener("click", () => {
  if (donatModal.classList.contains("on-modal")) {
    donatModal.classList.remove("on-modal")
    casinoContainer.classList.remove("on-modal")
    burgerMenu.classList.remove("_active")
    enableScroll()
  } else {
    donatModal.classList.add("on-modal")
    casinoContainer.classList.add("on-modal")
    burgerMenu.classList.remove("_active")
    disableScroll()
  }
})

payDonat.addEventListener("click", () => {
  donatModal.classList.remove("on-modal")
  casinoContainer.classList.remove("on-modal")
  burgerMenu.classList.remove("_active")
  enableScroll()
})

burgerMenuButton.addEventListener("click", () => {
  if (burgerMenu.classList.contains("_active")) {
    burgerMenu.classList.remove("_active")
    enableScroll()
  } else {
    burgerMenu.classList.add("_active")
    donatModal.classList.remove("on-modal")
    casinoContainer.classList.remove("on-modal")
    disableScroll()
  }
})
