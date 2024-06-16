function checkVisibility() {
  var boxesMarketing = document.querySelectorAll(".sua-classe-aqui");  //fade-down 
  var contentElements = document.querySelectorAll(".sua-classe-aqui");  //bounce-left
  var iconElements = document.querySelectorAll(".sua-classe-aqui");  //bounce-right 
  var advanceElements = document.querySelectorAll(".sua-classe-aqui");   //fade 
  var attractionElements = document.querySelectorAll(".sua-classe-aqui");  //grow
  var footerElements = document.querySelectorAll(".sua-classe-aqui");   //fade-up

  var windowHeight = window.innerHeight;

  //fade-down  
  boxesMarketing.forEach(function(boxMarketing) {
    var boxMarketingTop = boxMarketing.getBoundingClientRect().top;

    if (boxMarketingTop < windowHeight) {
      boxMarketing.classList.add("fade-down");
    }
  });

  //bounce-left
  contentElements.forEach(function(contentElement) {
    var contentTop = contentElement.getBoundingClientRect().top;

    if (contentTop < windowHeight) {
      contentElement.classList.add("bounce-left");
    }
  });

  //bounce-right
  iconElements.forEach(function(iconElement) {
    var iconTop = iconElement.getBoundingClientRect().top;

    if (iconTop < windowHeight) {
      iconElement.classList.add("bounce-right");
    }
  });

  //fade
  advanceElements.forEach(function(advanceElement) {
    var elementTop = advanceElement.getBoundingClientRect().top;

    if (elementTop < windowHeight) {
      advanceElement.classList.add("fade");
    }
  });

  //grow
  attractionElements.forEach(function(attractionElement) {
      var attractionTop = attractionElement.getBoundingClientRect().top;
  
      if (attractionTop < windowHeight) {
        attractionElement.classList.add("grow");
      }
  });

  //fade-up
  footerElements.forEach(function(footerElement) {
      var footerTop = footerElement.getBoundingClientRect().top;
  
      if (footerTop < windowHeight) {
        footerElement.classList.add("fade-up");
      }
  });

}

// Verificação inicial
document.addEventListener('DOMContentLoaded', function() {
  checkVisibility();
  window.addEventListener("scroll", checkVisibility);
});
