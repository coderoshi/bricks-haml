(function () {
  var fs = require('fs');
  var haml = require('haml');

  var data;
  var file_data;

  // accepts 'file_path' string and 'data' object
  exports.init = function(options) {
    options = options || { };
    data = options.data || { };
    file_path = options.file || file_path;
    file_data = fs.readFileSync( file_path, 'utf8' );
  };

  exports.plugin = function (request, response, options) {
    response.write(haml.render(file_data, {locals: data}));
    response.end();
  };
})();
