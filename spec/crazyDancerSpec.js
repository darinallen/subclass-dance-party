describe('crazyDancer', function() {

  var crazyDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    crazyDancer = new CrazyDancer(10, 20, timeBetweenSteps);//pseudoclassical class instantiation!!
  });

  it('should have a jQuery $node object', function() {
    expect(crazyDancer.$node).to.be.an.instanceof(jQuery);
  });

    });
  });
});
