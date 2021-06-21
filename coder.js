function getData(){
    tags = document.getElementById('tags').value
    css = document.getElementById('css').value
    localStorage.setItem('html',tags)
    localStorage.setItem('css', css)
}
getData()
setInterval(getData,1000)
