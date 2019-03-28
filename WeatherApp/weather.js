class Weather{
    constructor(city){
        this.cityName=city;
        this.appId='5c42ea510c8da901f336ea1fc54b5bbf'
    }
    getWeather(city)
    {
        return new Promise((resolve,reject)=>{
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.appId}`)
            .then(res=>res.json())
            .then(data=>{
                resolve(data);
              })
            .catch(error=>{
                reject(error)
            })
        })
       
    }
}