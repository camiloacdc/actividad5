document.getElementById("myForm").onsubmit = function() { myFunction()};

function myFunction() {
  
  var text, y, mensaje;

  /*validar el campo numero*/
  mensaje = document.getElementById("nombreForm").value;
 
  y = document.getElementById("cemail").value;
  
 
  var eeeemail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if ((y.match(eeeemail))===null && y=="") {
          
          text = "Ingresa un correo valido";
          document.getElementById("cemail").focus(); 
          event.preventDefault();
          
      } else{
          text="";
      }
      document.getElementById("valid-mail").innerHTML = text;


      if (mensaje == "") {
          
          text = "Ingresa tu nombre";
          document.getElementById("nombreForm").focus();
          event.preventDefault();
      
      } else {
          text = "";
      }
      document.getElementById("valid-mensaje").innerHTML = text;
}




  document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems);
    });
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems,{
      indicators: false
    });
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'left'
      // hoverEnabled : true,
      // toolbarEnabled: true
    });
  });

  $(document).ready(function(){
    var altura = $('.menu').offset().top;
    
    $(window).on('scroll', function(){
      if ( $(window).scrollTop() > altura ){
        $('.menu').addClass('menu-fixed');
      } else {
        $('.menu').removeClass('menu-fixed');
      }
    });
  });
  
 