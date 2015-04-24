/**
 * Created by V3-571G on 22/4/2015.
 */
angular.module('starter.services', [])

    .service('ContentService', function ($http, $window) {
        var _thisService = this;
        this.url = 'http://api.national500apps.com/index.php?r=apiMenu/';
        this.appId = 140;

        this.selectedItem = {}

        this.setSelectedItem = function (item) {
            this.selectedItem = item;
            console.log(this.selectedItem);
        }

        this.getMenuItem = function (menuId) {
            var menus = JSON.parse(window.localStorage.getItem('menu'));
            for(var i=0; i<menus.length; i++){
                if(menus[i].menu_id == menuId){
                    return menus[i];
                }
            }
        }

        this.getMenu = function () {
            return $http.post(this.url + 'Getmenu', {'app_id': this.appId})
        }

        this.setMenu = function (response) {
            window.localStorage.setItem('menu', JSON.stringify(response.data.Menu));
            window.localStorage.setItem('home', JSON.stringify(setHome()));
            console.log("Menu: ", JSON.parse(window.localStorage.getItem('menu')));
            console.log("Menu: ", JSON.parse(window.localStorage.getItem('home')));
        }

        function setHome(){
            var menus = JSON.parse(window.localStorage.getItem('menu'));
            for(var i=0; i<menus.length; i++){
                if(menus[i].app_code == 0){
                    return menus[i];
                }
            }
        }

        this.getSubMenu = function (menuId) {
            return $http.post(this.url + 'GetSubMenu', {menu_id: menuId})
                .success(function (response) {
                    window.localStorage.setItem('submenu-' + menuId, JSON.stringify(response.Submenu))
                    console.log("Submenu, menuID: " + menuId, JSON.parse(window.localStorage.getItem('submenu-' + menuId)));
                })
        }

        this.update = function (success, failure) {
            var s = success;
            _thisService.getMenu()
                .then(function (response) {
                    _thisService.setMenu(response);

                    var menuItems = JSON.parse(window.localStorage.getItem('menu'));
                    var count = 0;
                    for (var i = 0; i < menuItems.length; i++) {
                        _thisService.getSubMenu(menuItems[i].menu_id).then(function(){
                            count++;
                            if(count == menuItems.length){
                                success({title: "Success!",template: "Successfully updated data"})
                            }
                        });
                    }
                })
                .catch(function () {
                    failure({title: "Failed!",template: "Failed to get data. Please check your internet connection"});
                })
        }
    });

