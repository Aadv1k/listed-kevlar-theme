const themeBtn = document.getElementById('themeBtn')
const body = document.getElementsByTagName('body')[0]

window.matchMedia('prefers-color-scheme: dark').matches ? 
  body.classList.add('light') :
  body.classList.add('dark');


themeBtn.innerText = body.classList.contains('dark') ? "Light" : "Dark";

themeBtn.addEventListener("click", () => {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark')
    body.classList.add('light')
  } else {
    body.classList.remove('light')
    body.classList.add('dark')
  }

  themeBtn.innerText = body.classList.contains('dark') ? "Light" : "Dark";

})

