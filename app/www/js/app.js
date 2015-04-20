// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

    .run(function ($ionicPlatform, $http) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });

        if (typeof(Storage) !== "undefined") {
            if (ifDataNotSet) {
                $http.post('http://api.national500apps.com/index.php?r=apiMenu/Getmenu', {'app_id': '140'})
                    .success(function (response) {
                        alert("successfully retrieved data");
                        console.log(response);
                        window.localStorage.setItem('menu', JSON.stringify(response));
                        setDataSet();
                    }).error(function (response) {
                        alert("Could not retrieve data from server" + response);
                    })
            }
        }

        function ifDataNotSet(){
            return window.localStorage.getItem('dataIsSet') === null;
        }

        function setDataSet(){
            window.localStorage.setItem('dataIsSet', 'true');
        }
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html",
                controller: 'AppCtrl'
            })

            .state('app.about', {
                url: "/about",
                views: {
                    'menuContent': {
                        templateUrl: "templates/about.html",
                        controller: "AboutCtrl"
                    }
                }
            })

            .state('app.projects', {
                url: "/projects",
                'views': {
                    'menuContent': {
                        templateUrl: "templates/projects.html",
                        controller: 'ProjectsCtrl'
                    }
                }
            })

            .state('app.project-details', {
                url: "/projects/:name",
                'views': {
                    'menuContent': {
                        templateUrl: "templates/project-details.html",
                        controller: 'ProjectDetailsCtrl'
                    }
                }
            })

            .state('app.search', {
                url: "/search",
                views: {
                    'menuContent': {
                        templateUrl: "templates/search.html"
                    }
                }
            })

            .state('app.browse', {
                url: "/browse",
                views: {
                    'menuContent': {
                        templateUrl: "templates/browse.html"
                    }
                }
            })
            .state('app.playlists', {
                url: "/playlists",
                views: {
                    'menuContent': {
                        templateUrl: "templates/playlists.html",
                        controller: 'PlaylistsCtrl'
                    }
                }
            })

            .state('app.single', {
                url: "/playlists/:playlistId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/playlist.html",
                        controller: 'PlaylistCtrl'
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/playlists');
    });
