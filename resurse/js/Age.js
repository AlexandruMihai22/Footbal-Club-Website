  function calculeaza(date) {
    var present_date = new Date();
  
    var present_year = present_date.getFullYear();
    var present_month = present_date.getMonth();
    var present_day = present_date.getDate();
	
	var hours = present_date.getHours();
    var minutes = present_date.getMinutes();
    var seconds = present_date.getSeconds();
  
  
  
    var birth_year = date.getFullYear();
    var birth_month = date.getMonth();
    var birth_day = date.getDate();
	
    var years = present_year - birth_year;
    var months = 0;
    var days= 0; 

    if (present_month >= birth_month)
         months = present_month - birth_month;
    else {
      years--;
         months = 12 + present_month -birth_month;
    }
  
    if (present_day>= birth_day)
        days = present_day - birth_day;
    else {
      months--;
        days = 31 + present_day - birth_day;
  
      if (months < 0) {
        months=  11;
        years--;
      }
    }
  
    var div = document.getElementById('Age2');
    div.innerHTML ="";
    div.innerHTML = `${years} ani ${months} luni si ${days} zile, ${hours} ore  ${minutes} minute ${seconds} secunde`;
  }

function Age() {
	var Age = document.getElementById('Age').value;
  if(/\d{2}#\d{2}#\d{4}/.test(Age)) 
  {
    var a=Age.split("#").map(Number);
    var date=new Date(a[2], a[1]-1, a[0],0,0,0);
      setInterval(() => {
          calculeaza(date);
      }, 1000);
  }
  else
  {
    alert("Data invalida!");
  }
}

