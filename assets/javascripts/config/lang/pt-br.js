(function() {
  'use strict';

  angular
    .module('danilo')
    .config(PtBr);

  PtBr.$inject = ['$translateProvider'];

  function PtBr($translateProvider) {
    $translateProvider.translations('pt-BR', {
      PROFILE: 'Compositor, cantor e pianista, nasceu na cidade de São Paulo no dia 22 de maio de 1980. Influenciado por diversos artistas e estilos, faz música brasileira com os olhos voltado para o mundo e suas belezas sonoras. Lança o EP Desapego e retorna à cena musical com canções inéditas, apoiadas pela sonoridade de um quarteto formado por piano, baixo, bateria e guitarra, as músicas discutem o tema do Desapego e suas reverberações. Seu primeiro disco Primero Primera (2009), foi gravado em Barcelona e contou com a produção musical do chileno Claudio Nervi e músicos de diversos países como Argentina, Espanha, Chile e Brasil. Após 2 anos viajando o mundo, colhendo sons, inspirações e cultura, DaniloVidotti retorna com o EP Desapego mostrando sua versatilidade e pluralidade cultural em canções inéditas.',
      ABOUT: 'Perfil',
      MUSIC: 'Discos',
      CONTACT: 'Contato',
      RELEASE: 'Lançamento',
      PRESS: 'Imprensa',
      NAME: 'Nome',
      EMAIL: 'E-mail',
      MESSAGE: 'Mensagem',
      SEND: 'Enviar',
      FORM_ERROR_FIRST_LINE: 'Ocorreu um erro',
      FORM_ERROR_SECOND_LINE: 'Por favor verifique os seus dados',
      FORM_SUCCESS_FIRST_LINE: 'Enviado com sucesso',
      FORM_SUCCESS_SECOND_LINE: 'obrigado!',
      FORM_CALL: 'PARA SABER + SOBRE SHOWS, VIAGENS E MÚSICA'
    });
  };
})();