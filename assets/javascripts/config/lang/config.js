(function() {
  'use strict';

  angular
    .module('danilo')
    .config(Config);

  Config.$inject = ['$translateProvider'];

  function Config($translateProvider) {
    var lang = navigator.language;

    if(!(lang == 'pt-BR' || lang == 'en')) {
      lang = 'pt-BR';
    }

    $translateProvider.preferredLanguage(lang);
  };
})();