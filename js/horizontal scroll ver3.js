
function getWidth() {
  if (self.innerWidth) return self.innerWidth;
  if (document.documentElement && document.documentElement.clientWidth) return document.documentElement.clientWidth;
  if (document.body) return document.body.clientWidth;
}


var navItems = document.getElementsByClassName("nav-item");
var contentWrapper = document.getElementById("js-wrapper");
var currentIndex = 0;

window.addEventListener('wheel', function(event){
  if (event.deltaY < 0){
    if (currentIndex != 0){
      
      currentIndex -= 1;
      
      contentWrapper.scrollLeft = getWidth()*currentIndex;
    }
  }
  else if (event.deltaY > 0){
    if (currentIndex != navItems.length-1){
    
      currentIndex += 1;
      
      contentWrapper.scrollLeft = getWidth()*currentIndex;
    }
  }
});