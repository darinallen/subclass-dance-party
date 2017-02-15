describe('imageDancer', function() {

  var imageDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    imageDancer = new ImageDancer(10, 20, timeBetweenSteps);//pseudoclassical class instantiation!!
  });

  it('should have a jQuery $node object', function() {
    expect(imageDancer.$node).to.be.an.instanceof(jQuery);
  });

});
