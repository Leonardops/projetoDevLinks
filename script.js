function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //subistituir a imagem
  if (html.classList.contains("light")) {
    //se(if) tiver light mode, adicionar a imagem ligth

    img.setAttribute("src", "./assets/assets/Avatar.png")
  } else {
    //se tiver sem light mode, manter a imagem normal

    img.setAttribute("src", "./assets/assets/Avatarleo.png")
  }
}
