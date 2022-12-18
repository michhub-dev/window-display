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

//fetch and display crypto name and image, and prices
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
     document.getElementById('crypto-container').innerHTML += `
       <p>🎯Current price: $${data.market_data.current_price.usd}</P>
       <p>⬆️24hrs high price: $${data.market_data.high_24h.usd}</P>
       <p>⬇️24hrs low price: $${data.market_data.low_24h.usd}</P>
     `
   })
   .catch(err => console.err(err))
// a function to display current time
   function getCurrentTime(){
    const date = new Date()
    document.getElementById('time').textContent = `
      ${date.toLocaleTimeString('en-us', {timeStyle: 'short'})}
    `
   }
   setInterval(getCurrentTime, 1000)

   navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
      .then(res => {
        if(!res.ok){
          throw Error("Something went wrong")
        }
        return res.json()
      } )

      
      .then(data => {
         const weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
         document.getElementById('weather-container').innerHTML = `
           <img class='weather-icon' src=${weatherIcon} />
           <span class="weather-temp">${Math.round(data.main.temp)}º</span>
           <span class="city-name">${data.name}</span>
         `
        
      })
      .catch(err => console.error(err))
          
   })