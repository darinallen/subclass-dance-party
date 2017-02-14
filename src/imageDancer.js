var makeImageDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('imageDancer');
}

makeImageDancer.prototype = Object.create(makeDancer.prototype);
makeImageDancer.prototype.constructor = makeImageDancer;

makeImageDancer.prototype.step = function() {
  //var newPosition = this.makeNewPosition();
  //var context = this;
  //this.$node.animate({top : newCoordinates[0],left:newCoordinates[1]}, 800, function(){ context.step()} );
}
