'use strict';

var app = angular.module('thaisMartins');
app.filter('splitWords', ['$sce',  function($sce) {
    return function(input) {

        var words = input.split(' ');

        if(words.length == 2)
            input = '<strong>' + words[0] + '</strong><br>' + words[1] + '<span class="dot">.</span>';

        console.log(input);
        return $sce.trustAsHtml(input);
    };
}]);