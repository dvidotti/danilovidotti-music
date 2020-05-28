(function(){
  'use strict';

  angular
    .module('danilo')
    .controller('IndexController', IndexController);

  IndexController.$inject = ['$interval', '$scope', '$translate', '$http'];

  function IndexController($interval, $scope, $translate, $http) {
    var vm = this,
        _private = {};

    _private.promise;
    _private.video = document.getElementById("video");

    vm.tab        = null;
    vm.menuOpen   = false;
    vm.showError  = false;
    vm.showSuccess = false;
    vm.lang       = $translate.use();
    vm.videoShow  = false;
    vm.currentScroll;

    vm.pauseVideo = function() {
      _private.video.pause();
      _private.closeFullScreen();
      vm.videoShow = false;
    };

    vm.showVideo = function(){
      _private.video.play();
      vm.videoShow = true;
    };

    vm.setLang = function(lang) {
      $translate.use(lang);
      vm.lang = lang;
    };

    vm.scroll = function(id, top) {
      _private.promise = $interval(function () {
        var element = document.getElementById(id);
        element.scrollTop += top * 5;
        vm.currentScroll = top > 0 ? 'down' : 'up';
      }, 50);
    };

    vm.scrollUpClass = function(id) {
      return {
        'double': vm.currentScroll && vm.currentScroll === 'up'
      }
    };

    vm.scrollDownClass = function(id) {
      return {
        'double': vm.currentScroll && vm.currentScroll === 'down'
      }
    };

    vm.stopScroll = function() {
      $interval.cancel(_private.promise);
    };

    vm.sendForm = function() {
      vm.showError = $scope.contactForm.$invalid;

      if(!vm.showError) {
        $http({
          method  : 'POST',
          url     : 'send.php',
          data    : 'name=' + $scope.name + '&email=' + $scope.email + '&message=' + $scope.message,
          headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
         })
          .success(function(data) {
            vm.showError = false;
            vm.showSuccess = true;
          })
          .error(function(data) {
            vm.showError = true;
          });
      }
    };

    vm.menuClose = function() {
      vm.openMenu   = false;
      vm.tab        = null;
      vm.showError  = false;
    };

    vm.toggleMenu = function() {
      vm.openMenu ? vm.menuClose() : vm.openMenu = true;
    };

    _private.video.addEventListener('ended', function() {
      vm.pauseVideo();
      _private.video.load();
      $scope.$apply();
    });

    _private.closeFullScreen = function() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };
})();