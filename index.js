// Code your solution in this file!
function logDriverNames(driver){
  const cb=function(el, i, driver){
    
    console.log(el.name);
  }
  
  driver.forEach(cb);
  
}
function logDriversByHometown(driver,location){
  const cb=function(el, i, driver){
    if(el.hometown===location){
    console.log(el.name);
    }
  }
  
  driver.forEach(cb);
}
const driversByRevenue=function (driver){
 let arr=[];
 arr=driver.slice();
return arr.sort(function(a,b){
   
   return a.revenue - b.revenue;
  
 });
}
 
 const driversByName=function (driver){
 let arr=[];
 arr=driver.slice();
return arr.sort(function(a,b){
   
   return a.name.localeCompare(b.name);
  
 });
 
 }
 function totalRevenue (driver){
   return driver.reduce(function(a,el){
     return a +=el.revenue
   },0);
   
 }
function averageRevenue(driver){
  return driver.reduce(function(a,el){
     a=a+el.revenue;
    return a/driver.length;
    
  },0);
}