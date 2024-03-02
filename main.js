let alllis =document.querySelectorAll(".pricing .container .box");

alllis.forEach(function(ele){
    ele.onclick =function(){
        alllis.forEach(function(ele){
            ele.classList.remove("popular");
        });
        this.classList.add("popular")
    }
});
console.log("Hazem")