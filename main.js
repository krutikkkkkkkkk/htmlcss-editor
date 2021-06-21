let slider = document.getElementById('width')
slider.oninput = function() {
  document.getElementById('output').style.width = 100 - slider.value + "%"
  document.getElementById('coder').style.width = slider.value + "%"
}
  function resize(clicked_id){
    id = clicked_id;

    if(id == "desktop"){
      document.getElementById('output').style.width = "75%"
      slider.value = 25
      document.getElementById('coder').style.width = "25%"
    }
    else if(id == "tablet"){
      document.getElementById('output').style.width  = "50%"
      slider.value = 50
      document.getElementById('coder').style.width = "50%"
    }
    else if(id == "mobile"){
      document.getElementById('output').style.width = "25%"
      slider.value = 75
      document.getElementById('coder').style.width = "75%"
    }
  }