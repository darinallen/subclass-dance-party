var makeStretchyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeStretchyDancer.prototype = Object.create(makeDancer.prototype);
makeStretchyDancer.prototype.constructor = makeStretchyDancer;

makeStretchyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggleClass('stretchy');
}
