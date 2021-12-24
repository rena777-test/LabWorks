 window.onload = init;

function init(){
  function success(position){
    let map2,/* marker ,*/
    latitude = position.coords.latitude,
    longitude = position.coords.longitude;
  
    map2 = L.map('map2').setView([latitude,longitude],3);  
  
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
      maxZoom:18
    }).addTo(map2);
  
   /*  marker = L.marker([latitude,longitude]).addTo(map2); */
  }

  function error(){
    alert('Получить текущую позицию не удалось. Пожалуйста, разрешите доступ к  вашей геолокации');
  };
  
  navigator.geolocation.getCurrentPosition(success, error);
   
}

 