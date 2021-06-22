var sheet = document.createElement('style')
function displayData(){ 
    ///HTML
    document.body.innerHTML = localStorage.getItem('html')
    ///CSS
    sheet.innerHTML = localStorage.getItem('css')
    document.body.appendChild(sheet);
}

///display data every .5 second
var play = setInterval(function(){
    displayData()
},500) 


