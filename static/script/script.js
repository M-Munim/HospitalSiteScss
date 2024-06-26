const navItems = document.querySelector('#nav_items');
const openNavBtn = document.querySelector('#open_nav-btn');
const closeNavBtn = document.querySelector('#close_nav-btn');

openNavBtn.addEventListener('click', () => {
  navItems.style.display = "flex";
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "inline-block";

})

// closeNavBtn.addEventListener('click', () => {
//   navItems.style.display = "none";
//   openNavBtn.style.display = "inline-block";
//   closeNavBtn.style.display = "none";
// })

const closeNav = () => {
  navItems.style.display = "none";
  openNavBtn.style.display = "inline-block";
  closeNavBtn.style.display = "none";
}

closeNavBtn.addEventListener('click', closeNav)


if (window.innerWidth < 1024) {
  document.querySelectorAll('#nav_items li a').forEach(navItem => {
    navItem.addEventListener('click', () => {
      closeNav()
    })
  })
}

window.addEventListener('scroll', () => {
  // console.log("object");
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})