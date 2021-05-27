document.getElementById("confirm").onclick = function(){
  swal({
    title: "Filters applied",
    text: "Click Proceed to choose an option",
    icon: "success",
    buttons: ["Cancel","Proceed"],
  });
}
