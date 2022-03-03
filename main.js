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

// Arrow Buttons

document.addEventListener("DOMContentLoaded", function(event) {
    const horizons = document.querySelector("#mec_skin_events_220 > div > div > div").children;
    const scrollContainer = document.querySelector("body > div.elementor.elementor-81 > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-6dcffff.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-b688e28.calendar-horizontale > div");

    const container = document.querySelector("body > body > div.elementor.elementor-81 > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-6dcffff.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-b688e28.calendar-horizontale > div");

    let isDown = false;
    let startX;
    let scrollLeft;
    const leftarrow = document.querySelectorAll('.calendar-leftarrow');
    const rightarrow = document.querySelectorAll('.calendar-rightarrow');
    console.log("left arrow and right arrow set")
    // get width of parent element
    // for each horizon, set width
    console.log("horizon lenght:")
    console.log(horizons.length)
    for(let i = 0; i < horizons.length; i++) {
        console.log(i)
        let horizon = horizons[i];
        console.log(container.offsetWidth);
        horizon.style.width = "100%";
        horizon.style.maxWidth = container.offsetWidth + "px";
        horizon.style.paddingLeft = "30px";
        let scrollAmount;
        scrollAmount = horizon.offsetWidth; 
        // Change this to 300 to scroll by 300 pixels on each arrow click, for example. As set, it scrolls the width of the elements shown
        window.addEventListener('resize', function() {
            scrollAmount = horizon.offsetWidth; /* idem , needs to be same value as above */
            horizon.style.width = "100%";
            horizon.style.maxWidth = container.offsetWidth + "px";
            horizon.style.paddingLeft = "30px";
            scrollContainer.scrollLeft -= scrollContainer.scrollWidth - scrollContainer.clientWidth;
        });
        let smoothFunction = function() {
            scrollContainer.setAttribute('style', 'scroll-behavior:smooth;')
        };
        let clearBehavior = function() {
            setTimeout(function() {
                scrollContainer.removeAttribute('style');
            }, 771)
        };
        if(leftarrow[i]) {
            leftarrow[i].setAttribute('tabindex', '0');
            rightarrow[i].setAttribute('tabindex', '0');
            
            leftarrow[i].onclick = function() {
                smoothFunction();
                scrollContainer.scrollLeft -= scrollAmount;
                clearBehavior();
            };
            
            rightarrow[i].onclick = function() {
                smoothFunction();
                scrollContainer.scrollLeft += scrollAmount;
                clearBehavior();
            };
        }
    console.log(i)
    };
});
