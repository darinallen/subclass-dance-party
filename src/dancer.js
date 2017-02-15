// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  //document.getElementById('Music.mp3').play();

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.makeNewPosition = function(){
  var height = $('body').height() - 50;
  var width = $('body').width() - 50;
  var newHeight = Math.floor(Math.random() * height);
  var newWidth = Math.floor(Math.random() * width );

  return [newHeight, newWidth];
};

Dancer.prototype.lineUp = function() {
  this.$node.toggleClass('lineUp');
}
