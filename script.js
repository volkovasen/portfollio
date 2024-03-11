// cursor
const cursorRounded = document.querySelector('.cursor-dot-outline .cursor-video-outline');
const cursorPointed = document.querySelector('.cursor-dot');
var cursor = {
delay: 8,
_x: 0,
_y: 0,
endX: (window.innerWidth / 2),
endY: (window.innerHeight / 2),
cursorVisible: true,
cursorEnlarged: false,
$dot: document.querySelector('.cursor-dot'),
$outline: document.querySelector('.cursor-dot-outline'),
init: function() {
    this.dotSize = this.$dot.offsetWidth;
    this.outlineSize = this.$outline.offsetWidth;
    this.setupEventListeners();
    this.animateDotOutline();
},
setupEventListeners: function() {
    var self = this;
    document.querySelectorAll('a').forEach(function(el) {
        el.addEventListener('mouseover', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        el.addEventListener('mouseout', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });
    });
    document.querySelectorAll('button').forEach(function(el) {
        el.addEventListener('mouseover', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        el.addEventListener('mouseout', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });
    });
    document.querySelectorAll('label').forEach(function(el) {
        el.addEventListener('mouseover', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        el.addEventListener('mouseout', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });
    });
    document.querySelectorAll('input').forEach(function(el) {
        el.addEventListener('mouseover', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        el.addEventListener('mouseout', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });
    });
    document.addEventListener('mousedown', function() {
        self.cursorEnlarged = true;
        self.toggleCursorSize();
    });
    document.addEventListener('mouseup', function() {
        self.cursorEnlarged = false;
        self.toggleCursorSize();
    });
    document.addEventListener('mousemove', function(e) {
        self.cursorVisible = true;
        self.toggleCursorVisibility();

        self.endX = e.clientX;
        self.endY = e.clientY;
        self.$dot.style.top = self.endY + 'px';
        self.$dot.style.left = self.endX + 'px';
    });
    document.addEventListener('mouseenter', function(e) {
        self.cursorVisible = true;
        self.toggleCursorVisibility();
        self.$dot.style.opacity = 1;
        self.$outline.style.opacity = 1;
    });
    document.addEventListener('mouseleave', function(e) {
        self.cursorVisible = true;
        self.toggleCursorVisibility();
        self.$dot.style.opacity = 0;
        self.$outline.style.opacity = 0;
    });
},
animateDotOutline: function() {
    var self = this;
    self._x += (self.endX - self._x) / self.delay;
    self._y += (self.endY - self._y) / self.delay;
    self.$outline.style.top = self._y + 'px';
    self.$outline.style.left = self._x + 'px';
    requestAnimationFrame(this.animateDotOutline.bind(self));
},
toggleCursorSize: function() {
    var self = this;
    
    if (self.cursorEnlarged) {
        self.$dot.style.transform = "translate(-50%, -50%) scale(0.20)";
        self.$outline.style.transform = 'translate(-50%, -50%) scale(0)';
    } else {
        self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
        self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
    }
},
toggleCursorVisibility: function() {
    var self = this;
    
    if (self.cursorVisible) {
        self.$dot.style.opacity = 1;
        self.$outline.style.opacity = 1;
    } else {
        self.$dot.style.opacity = 0;
        self.$outline.style.opacity = 0;
    }
}
}
cursor.init();
// filter
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}