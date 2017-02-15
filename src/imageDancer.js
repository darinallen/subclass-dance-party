var ImageDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('imageDancer');
};

ImageDancer.prototype = Object.create(Dancer.prototype);
ImageDancer.prototype.constructor = ImageDancer;

ImageDancer.prototype.step = function() {
  var newPosition = this.makeNewPosition();
  var context = this;
  this.$node.animate({top : newPosition[0],left:newPosition[1]}, 1000,
    function(){ if(!context.$node.hasClass('lineUp')){ context.step()} } );
};

ImageDancer.prototype.makeNewPosition = function(){
  var height = $('body').height() - 500;
  var width = $('body').width() - 500;
  var newHeight = Math.floor(Math.random() * height);
  var newWidth = Math.floor(Math.random() * width );

  return [newHeight, newWidth];
};
