/**
 * Created by V3-571G on 24/4/2015.
 */

angular.module('starter.filters',[])
    .filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);