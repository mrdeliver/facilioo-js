console.log("Hi I'm an external js file NEW VERSION");

//slider code

var headings = ['erweitert Ihre bestehende IT-Landschaft', 'macht Vorgangsmanagement intuitiv', 'standardisiert Ihre Kunden&shy;kommunikation', 'kann sogar hybrid', 'verarbeitet ihre Daten und erstellt Reportings'];

var headingElement = document.getElementById("dependent-header-span");

var sliderElement = document.querySelector('#our-custom-slider .swiper-container');

setTimeout( function(){ 
        var sliderInstance = sliderElement.swiper;
        sliderInstance.on('slideChange', function () {
            let index = sliderInstance.activeIndex % 5;
            headingElement.innerHTML = headings[index];
        });
        
        // on first page load
        let index = sliderInstance.activeIndex - 4;
        headingElement.innerHTML = headings[index];
}  , 5000 );
