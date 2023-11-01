/* Lambedigdoyo - gubhugreyot : Lereng Sindoro -Sumbing, 01 November 2023 */
/* tooltip from title attribute - tooltip shown above - titleTopTooltip.js */

var ttDiv,  hideTimer;
(function(){
  function ttip(ev){
    var title = this.title;
    this.title = '';
    this.setAttribute("tooltip", title);
    ttDiv = document.createElement("div"); 
    ttDiv.className = 'tooltip';
    ttDiv.appendChild(document.createTextNode(title));
    var fc = document.body.firstChild;
    fc.parentNode.insertBefore(ttDiv, fc); 
    ttDiv.style.cssText = 'position:absolute; background: #2D0000; background-color: rgba(0,0,0,0.8); color: #fafafa; text-shadow: 1px 1px 1px #000; border: 1px solid #eee; box-shadow: 0 0 6px #000; padding: 6px 8px;z-index: 10000; border-radius: 6px; font: normal 12px Arial; width: 160px; text-align: center; ';
    clearTimeout(hideTimer)
    ttDiv.style.left = ev.pageX - 60 + 'px';
    ttDiv.style.top = ev.pageY - 120 + 'px';
    ttDiv.style.opacity = 1;
    ttDiv.style.zIndex = 100000;
    ttDiv.style.visibility = 'visible';    

  hideTimer = setTimeout(function(){
  ttDiv.style.left = -9999 + "px";
  }, 2000)
}

function removeTtip(ev){
var tip = document.querySelector(".tooltip");
  var title = this.getAttribute("tooltip");
  this.title = title;
  this.removeAttribute("tooltip");
  tip.remove();
}

var links = document.querySelectorAll('*');
for(var i=0; i < links.length; i++){
  var tt = links[i];
  if(tt.title !== ''){
    tt.addEventListener('mouseover',ttip);
    tt.addEventListener('mouseout', removeTtip);
  }
}
})()