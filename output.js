var sheet = document.createElement('style')
function displayData(){ 
    ///HTML
    document.body.innerHTML = localStorage.getItem('html')
    ///CSS
    sheet.innerHTML = localStorage.getItem('css')
    document.body.appendChild(sheet);

  
}

var play = setInterval(function(){
    displayData()
},500) 


