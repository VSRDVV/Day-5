//create a request variable
var request = new XMLHttpRequest();
//opne 
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var countrydata = JSON.parse(this.response);
    var temp =[];
    var la;
    var lo;
   for(var i = 0;i<countrydata.length;i++)
   {
        temp = countrydata[i].latlng;
        la = temp[0]
        lon = temp[1];
      // console.log(la,lon);
       
        var req = new XMLHttpRequest();
        req.open('GET',`http://api.openweathermap.org/data/2.5/weather?lat=${la}&lon=${lon}&appid=06d1ca1ab9695828efbfb2050ed9dad6`,true);
        req.send();
        req.onload = function(){
            var weatherdata = JSON.parse(this.response);
            console.log(weatherdata.main.temp);
            
        };//end of function
                
            }//end of for
        
        
        }
   //end of for
   




    
