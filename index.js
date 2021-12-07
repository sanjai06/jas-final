var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
var year = now.getFullYear()
var origin = 334;
var customers = 3652
var projects = 5895
var originYear = 2021;
var years = 0;
if (originYear < year){
    years = year - originYear;
}
if(day > origin){
    customers =Math.ceil(customers + (day - origin) + (years*365));
    projects = Math.ceil(projects + (day - origin) * 1.5 +(years*365) );

}
else{
    customers = customers +30+ day + (years*365);
    projects = projects + 45 + day * 1.5 + (years*365);
}
 var customer = document.querySelector(".customer");
 var project = document.querySelector(".proj")
 if (customer.innerHTML != null){
     console.log(customer.innerHTML)
    customer.innerHTML = customers;
    project.innerHTML = projects
 }

 function onload(){
     setTimeout(()=>{
        document.querySelector(".preloader").style.display = "none";
        document.querySelector(".index").style.display="block";
        
       
     },1000)
 }
