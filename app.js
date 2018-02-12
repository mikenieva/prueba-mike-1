// Para cambiar  la alineacion del texto
function changeAlignText (){
  realTimeComment.style.textAlign = this.value;
}
// Para cambiar el color del texto
function changeTextColor (){
var textColor = prompt("Elige el color del texto");
realTimeComment.style.color = textColor;
}
// Cambiar el color de fondo del texto
function chnageBackgroundColor (){
  var backgroundText = prompt("Elige el fondo de tu texto");
  realTimeComment.style.backgroundColor = backgroundText;
}
// pintar comentio en publicaciones
function printComments (){
  var text = getTextPreview();
  var publishComment = text.parentNode.cloneNode(true);
  console.log(text.parentNode);
  commentedPost.insertBefore(publishComment, commentedPost.firstChild);
  area.value = " ";
  text.removeAttribute("style");
  text.innerText = " ";
  // document.getElementById("real-time-image").removeAttribute("src");
}
