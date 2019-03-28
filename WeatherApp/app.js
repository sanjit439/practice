const getWeather= new Weather('Vancouver');

const cityName= document.querySelector('.cityName');
const maxTemp=document.querySelector('.maxTemp');
const minTemp=document.querySelector('.minTemp');

document.addEventListener('DOMContentLoaded',getInfo)

function getInfo()
{
    
    getWeather.getWeather('Delhi')
    .then(data=>{
      
      console.log(data);
      cityName.innerHTML=`${data.name} `;
      maxTemp.innerHTML=`${Math.round(data.main.temp_max/10)} degree Celcius `;
      minTemp.innerHTML=`${Math.round(data.main.temp_min/10)} degree Celcius `;
      
    
    })
    .catch(error=>{
        console.log(error);
    })
}