function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag image e substituir a imagem pra light
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.jpg")
    img.setAttribute(
      "alt",
      "Foto de Alex e Aline com gato chamado mumu no colo recebendo um beijinho e fechando um dos olhos"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.jpg")
    img.setAttribute(
      "alt",
      "Foto de Alex e Aline com gato chamado mumu no colo"
    )
  }
}
