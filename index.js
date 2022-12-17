
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
   .then(res => {
     if(!res.ok){
        throw Error('Something funny went wrong')
     }
     return res.json()
   })
   .then(data => {
    document.body.style.backgroundImage = `url(${data.urls.regular})`
    document.getElementById('author').textContent = `Author: ${data.user.name}`
   })