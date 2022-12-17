//fetch and change window image and author name 
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
   .then(res => {
     if(!res.ok){
        throw Error('Something funny went wrong')
     }
     return res.json()
   })
   .then(data => {
    console.log(data)
    document.body.style.backgroundImage = `url(${data.urls.regular})`
    document.getElementById('author').textContent = `Author: ${data.user.name}`
   })
   .catch(Error => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
    )`
    document.getElementById('author').textContent = 'Author: Dodi Achmad'

   })

//fetch and display crypto name and image
fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
   .then(res => {
       if(!res.ok){
        throw Error('Something is wrong with this request')
       }
       return res.json()
   })
   .then(data => {
     document.getElementById('crypto').innerHTML = `
       <img src=${data.image.small}/>
       <span class='crypto-name'>${data.name}</span>
     `
   })
   .catch(err => console.err(err))