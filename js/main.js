$(document).ready(function() {
  // Efecto h1 y texto del header
  if ($(window).width() > 800) {
    $("header .texto").css({
      opacity: 0,
      marginTop: 0
    });

    $("header .contenedor-texto .texto").animate(
      {
        opacity: 1,
        marginTop: "-52px"
      },
      1500
    );
  }
  // Scroll Elementos Menu
  var sobreMi = $("#acerca-de").offset().top,
    proyectos = $("#proyectos").offset().top,
    contacto = $("#contacto").offset().top;

  $("#btn-sobre-mi").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 300
      },
      500
    );
  });

  $("#btn-proyectos").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: proyectos
      },
      500
    );
  });

  $("#btn-contacto").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: contacto
      },
      500
    );
  });
  // Parallax
  $(window).scroll(function() {
    var windowWidth = $(window).width();
    if (windowWidth > 800) {
      var scroll = $(window).scrollTop();
      $("header .contenedor-texto").css({
        transform: "translate(0px," + scroll / 2 + "%)"
      });
    }
  });
  // Enlaces activos
  $("#menu a").on("click", function() {
    $("a.activo").removeClass("activo");
    $(this).addClass("activo");
  });

  $(function() {
    var menu = document.getElementById("menu");
    var headroom = new Headroom(menu);
    headroom.init();

    //Menu Responsive
    //Ancho de la página
    var ancho = $(window).width(),
      enlaces = $("#enlaces"),
      btnMenu = $("#btn-menu"),
      icono = $("#btn-menu .icono");

    if (ancho < 768) {
      enlaces.hide();
      icono.addClass("fa-bars");
    }

    btnMenu.on("click", function(e) {
      enlaces.slideToggle();
      icono.toggleClass("fa-bars");
      icono.toggleClass("fa-times");
    });

    $(window).on("resize", function() {
      if ($(this).width() > 768) {
        enlaces.show();
        icono.addClass("fa-times");
        icono.removeClass("fa-bars");
      } else {
        enlaces.hide();
        icono.addClass("fa-bars");
        icono.removeClass("fa-times");
      }
    });
  });
});

// Slider
$(window).on("load", function() {
  $("#slider").nivoSlider();
});

(function() {
  // Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "UA-145056950-1");

  // Materialize
  document.addEventListener("DOMContentLoaded", () => {
    const imgLightBox = document.querySelectorAll(".materialboxed");
    M.Materialbox.init(imgLightBox, {
      inDuration: 500,
      outDuration: 500
    });
  });

  // Imagenes Cargadas
   window.addEventListener("load", () => {
 const proyectos = document.getElementById("contenedor-proyectos")
 proyectos.classList.add("proyectos-cargados");
});
  // Ruta de la imagen y descripción para el overlay
  const overlay = document.getElementById("overlay");
  document.querySelectorAll(".proyectos .thumb img").forEach(elemento => {
    // Muestro el Overlay para cada imagen
    elemento.addEventListener("click", () => {
      const ruta = elemento.getAttribute("src");
      const descripcion = elemento.parentNode.parentNode.dataset.descripcion;

      overlay.classList.add("activo");
      document.querySelector("#overlay img").src = ruta;
      document.querySelector("#overlay .descripcion").innerHTML = descripcion;
    });
  });

  // botón cerrar
  document
    .querySelector("#btn-cerrar-lightbox")
    .addEventListener("click", () => {
      overlay.classList.remove("activo");
    });

  overlay.addEventListener("click", evento => {
    evento.target.id === "overlay" ? overlay.classList.remove("activo") : "";
  });
})();
