// Animation

// scrollspy
var nav = document.querySelectorAll(".nav-item");
var body = document.querySelector("body");

function scrollToY (y, duration = 0, element = document.scrollingElement) {
    // cancel if already on target position
    if (element.scrollTop === y) return;
  
    const cosParameter = (element.scrollTop - y) / 2;
    let scrollCount = 0, oldTimestamp = null;
  
    function step (newTimestamp) {
      if (oldTimestamp !== null) {
        // if duration is 0 scrollCount will be Infinity
        scrollCount += Math.PI * (newTimestamp - oldTimestamp) / duration;
        if (scrollCount >= Math.PI) return element.scrollTop = y;
        element.scrollTop = cosParameter + y + cosParameter * Math.cos(scrollCount);
      }
      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
}

function scrollToElement(element, duration = 0) {
	const offset = Math.round(element.getBoundingClientRect().top);
	scrollToY(document.scrollingElement.scrollTop + offset, duration);
}

function scrollSpy(event) {
    event.preventDefault();
    nav.forEach((item) => {
        let children = this.childNodes;
        let id_scroll = children[1].getAttribute("href");
        let position = document.querySelector(id_scroll);
        scrollToElement(position, 1000);
    })
}

nav.forEach(item => {
    item.addEventListener("click",scrollSpy)
})

// function getOffset(el) {
//   const rect = el.getBoundingClientRect();
//   return {
//     left: rect.left + window.scrollX,
//     top: rect.top + window.scrollY
//   };
// }


// window.addEventListener("scroll", () =>  {
//   let about = document.querySelector("#about");
//   let y = Math.round(getOffset(about).top);
//   // console.log(y);
//   // console.log(window.scrollY);
//   if(window.scrollY >= y){
//     nav.forEach( item => {
//       let span = item.childNodes[3];
//       span.style.color = "#555"
//     })
//   } else {
//     nav.forEach( item => {
//       let span = item.childNodes[3];
//       span.style.color = "#fff"
//     })
//   }
// })