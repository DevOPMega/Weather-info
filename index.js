let wheather={
    api:"a34361c22a6f8b9e3c74683e18a02a17",
    fetching: function(city){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.api}`)
        .then(response=>response.json())
        .then(data=>this.display(data))        
    },
    display: function(data){
        const { name } = data;
        const { country } = data.sys;
        const { humidity, temp} = data.main;
        const {speed} = data.wind;
        const {icon} = data.weather[0];
        console.log(name, humidity,icon, temp);
        document.querySelector('.name').innerHTML=name+","+country;
        document.querySelector('.temp').innerHTML="Temp:"+temp+" deg";
        document.querySelector('.humidity').innerHTML="Humidity:"+humidity;
        document.querySelector('.speed').innerHTML="Speed:"+speed;
        document.querySelector('.img').style.background=`url( http://openweathermap.org/img/wn/${icon}@2x.png)`
        document.querySelector('.img').style.backgroundRepeat="no-repeat";
        document.querySelector('.img').style.height="89px";

    }
}

let btn =document.querySelector('.subBtn');
btn.addEventListener('click', ()=>{
    let cityname=document.querySelector('.cityName').value;
    wheather.fetching(cityname)
})