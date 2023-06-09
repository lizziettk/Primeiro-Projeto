function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  
  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')) {

    img.setAttribute('src', './assets/Avatar-Light.png')
    img.setAttribute('alt', 'Thorfinn fofo')
  } else {
    img.setAttribute("src", './assets/Avatar.png')
    img.setAttribute('alt', 'Thorfinn emo')

  }

}
