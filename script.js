/*$(window).scroll(function(){
    if($(window).scrollTop()){
        $("nav").addClass("black");
        
    }else{
        $("nav").removeClass("black");
        
    }
});*/

var navbar = document.querySelector("nav");
var tex = document.querySelector(".home");
var tex2 = document.querySelector(".skill");
        window.onscroll = ()=>{
            /*this.scrollY > 50 ? navbar.classList.add("black"):
            navbar.classList.remove("black")*/
            this.scrollY > 50 && this.scrollY<500 ?tex.classList.add("high") :tex.classList.remove("high");
            this.scrollY > 500 && this.scrollY<1000 ?tex2.classList.add("high") :tex2.classList.remove("high");

        }
        
