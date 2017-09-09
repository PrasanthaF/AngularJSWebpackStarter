//angular.module('dashboard', []);

angular.module('dashboard', []).config(function($sceProvider) {
    $sceProvider.enabled(false);
    });

require('./directives');
require('./services');
require('./controllers');