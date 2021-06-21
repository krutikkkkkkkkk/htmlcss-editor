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


let Stop = document.getElementsByTagName('button')[1]
 Stop.addEventListener('click',()=>{
  var status = document.getElementById('status');
        output.clearInterval(play)
        status.innerHTML = "Paused"
        status.style.background = "red"    
})

document.getElementsByTagName('button')[0].addEventListener('click',()=> {
    var ifr = document.getElementsByTagName('iframe')[1];
    ifr.src = ifr.src;
    var status = document.getElementById('status');
    status.innerHTML = "Running"
    status.style.background = "#00cc11"  
})

function displayData(){
    return 0;
}

var play = setInterval(function(){
    displayData()
},500) 





