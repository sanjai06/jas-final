
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
console.log('Day of year: ' + day);
var origin = 334;
var customers = 3568
var projects = 5259

if(day > origin){
    customers =Math.ceil(customers + (day - origin));
    projects = Math.ceil(projects + (day - origin) * 1.5 );

}
else{
    // customers = 
}
console.log(projects,customers)
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