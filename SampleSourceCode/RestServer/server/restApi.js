HTTP.methods({
  'test': function(data) {
    console.log(data.foo);

    return {
      'login': 'value1',
      'contribution': 'value2'
    }
  }
});
