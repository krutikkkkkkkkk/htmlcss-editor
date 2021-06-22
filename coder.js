function getData(){
    tags = document.getElementById('tags').value
    css = document.getElementById('css').value
    localStorage.setItem('html',tags)
    localStorage.setItem('css', css)
}
///get data every .5 second
getData()
setInterval(getData,500)
