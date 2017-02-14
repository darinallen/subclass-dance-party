var makeCrazyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('crazy');
}

makeCrazyDancer.prototype = Object.create(makeDancer.prototype);

makeCrazyDancer.prototype.constructor = makeCrazyDancer;

makeCrazyDancer.prototype.step = function() {
  var newCoordinates = this.makeNewPosition();
  var context = this;
  this.$node.animate({top : newCoordinates[0],left:newCoordinates[1]}, 800, function(){ context.step()} );
}
