var CrazyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('crazy');
};

CrazyDancer.prototype = Object.create(Dancer.prototype);

CrazyDancer.prototype.constructor = CrazyDancer;

CrazyDancer.prototype.step = function() {
  var newCoordinates = this.makeNewPosition();
  var context = this;
  this.$node.animate({top: newCoordinates[0], left: newCoordinates[1]}, 800,
    function(){if(!context.$node.hasClass('lineUp')){ context.step();} });
};
