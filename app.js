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
