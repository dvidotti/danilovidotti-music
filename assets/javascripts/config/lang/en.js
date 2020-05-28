(function() {
  'use strict';

  angular
    .module('danilo')
    .config(En);

  En.$inject = ['$translateProvider'];

  function En($translateProvider) {
    $translateProvider.translations('en', {
      PROFILE: 'Songwriter, singer and pianist was born in São Paulo on May 22nd, 1980. Influenced by several artists and musical genres, the musician makes Brazilian Music but keeps his eyes and ears open to the sounds and culture of the world. His first album, Primero Primera (2009), was produced by Claudio Nervi from Chile and recorded in Barcelona with musicians from Spain, Argentina, Chile and Brasil.After traveling for 2 years around the world reaping sounds, inspiration and culture, Danilo Vidotti comes back and shows his versatility, cultural diversity and new songs in his recently released EP Desapego, accompanied by piano, guitar, bass and drums. The songs talks about the Detachment (Desapego) and its reverberations.',
      ABOUT: 'About',
      MUSIC: 'Music',
      CONTACT: 'Contact',
      RELEASE: 'Release',
      PRESS: 'Press',
      NAME: 'Name',
      EMAIL: 'Email',
      MESSAGE: 'Message',
      SEND: 'Send',
      FORM_ERROR_FIRST_LINE: 'An error has occurred',
      FORM_ERROR_SECOND_LINE: 'Please check your data',
      FORM_SUCCESS_FIRST_LINE: 'Your message was sent',
      FORM_SUCCESS_SECOND_LINE: 'successfully',
      FORM_CALL: 'To know + About SHOWS, travels and music'
    });
  };
})();