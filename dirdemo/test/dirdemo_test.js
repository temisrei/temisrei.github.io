(function ($) {
  module('jQuery#dirdemo', {
    setup: function () {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function () {
    expect(1);
    strictEqual(this.elems.dirdemo(), this.elems, 'should be chainable');
  });

  test('is dirdemo', function () {
    expect(1);
    strictEqual(this.elems.dirdemo().text(), 'dirdemo0dirdemo1dirdemo2', 'should be dirdemo');
  });

}(jQuery));
