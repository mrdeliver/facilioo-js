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

  const container = document.querySelector("body > div.elementor.elementor-81 > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-6dcffff.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-b688e28.calendar-horizontale > div");
  
  let isDown = false;
  let startX;
  let scrollLeft;
  const leftarrow = document.querySelectorAll('.calendar-leftarrow');
  const rightarrow = document.querySelectorAll('.calendar-rightarrow');
  // get width of parent element
  // for each horizon, set width

  for(let i = 0; i < horizons.length; i++) {
      let horizon = horizons[i];
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
  };
});

// fix menu

window.onload = function() {
  var menuItem = document.querySelector("#menu-item-64");
 console.log(menuItem);
 menuItem.parentNode.replaceChild(menuItem.cloneNode(true), menuItem);
};

// scroll-box 

document.addEventListener("DOMContentLoaded", function(event) {
  const horizons = document.querySelectorAll('.horizontale > div');
  let isDown = false;
  let startX;
  let scrollLeft;
  
  const leftArrow = document.querySelectorAll('.leftarrow');
  const rightArrow = document.querySelectorAll('.rightarrow');
  
  horizons.forEach( (horizon, i) => {
  
      let scrollAmount;
      
      if (horizon.querySelector('.elementor-posts-container')){
          
          let scrollPostContainerWidth = horizon.querySelector('.elementor-widget-container').offsetWidth;
      let scrollPostsAmount = horizon.querySelectorAll('article').length;
      let scrollPostWidth = scrollPostContainerWidth / scrollPostsAmount;
      
          scrollAmount = scrollPostWidth;
          
      } else {
          
          scrollAmount = horizon.offsetWidth; /* Change this to 300 to scroll by 300 pixels on each arrow click, for example. As set, it scrolls the width of the elements shown */
  window.addEventListener('resize',function(){
      scrollAmount = horizon.offsetWidth; /* idem , needs to be same value as above */
  });
  
      }
  
  let smoothFunction = function(){horizon.setAttribute('style','scroll-behavior:smooth;')};
  let clearBehavior = function(){setTimeout (function(){horizon.removeAttribute('style');},771)};
  
  if(leftArrow[i]){
  leftArrow[i].setAttribute('tabindex','0');
  rightArrow[i].setAttribute('tabindex','0');
  
  leftArrow[i].onclick = function () {
  smoothFunction();
  horizon.scrollLeft -= scrollAmount;
  clearBehavior();
  };
  rightArrow[i].onclick = function () {
  smoothFunction();
  horizon.scrollLeft += scrollAmount;
  clearBehavior();
  };
  }
  
  const links = horizon.querySelectorAll('div > div > div');
  horizon.addEventListener('mousedown', (e) => {
  isDown = true;
  horizon.classList.add('active');
  startX = e.pageX - horizon.offsetLeft;
  scrollLeft = horizon.scrollLeft;
  });
  horizon.addEventListener('mouseleave', () => {
  isDown = false;
  horizon.classList.remove('active');
  for (var i = 0; i < links.length; i++) {
  links[i].classList.remove('noclick');
  }
  });
  horizon.addEventListener('mouseup', () => {
  isDown = false;
  horizon.classList.remove('active');
  for (var i = 0; i < links.length; i++) {
  links[i].classList.remove('noclick');
  }
  });
  horizon.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - horizon.offsetLeft;
  const walk = (x - startX) * 1.6 ;
  horizon.scrollLeft = scrollLeft - walk;
  for (var i = 0; i < links.length; i++) {
  links[i].classList.add('noclick');
  }
  });
  
  });
  });
  
  function autoScroll(element) {
      element.scrollBy({
      top: 0,
      left: +300,
      behavior: 'smooth'
    }) 
  }
  
  var scrollingSection = document.querySelector("body > div.elementor.elementor-81 > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-1a892ff.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-33.elementor-top-column.elementor-element.elementor-element-0dc000b.horizontale > div");
  
  var scrollingCalendar = document.querySelector("body > div.elementor.elementor-81 > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-6dcffff.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-b688e28.calendar-horizontale > div");
  
  function handler(entries, observer) {
    for (entry of entries) {
      if (entry.isIntersecting) {
          setTimeout(autoScroll(entry.target), 750);
      }
    }
  }
  
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
      let observer = new IntersectionObserver(handler);
      observer.observe(scrollingCalendar);
      observer.observe(scrollingSection);
  }
  