'use strict';

describe('Service: gifts', function () {

  // load the service's module
  beforeEach(module('marriageEventApp'));

  // instantiate service
  var gifts;
  beforeEach(inject(function (_gifts_) {
    gifts = _gifts_;
  }));

  it('should do something', function () {
    expect(!!gifts).toBe(true);
  });

});
