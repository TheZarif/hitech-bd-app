// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.filters'])

    .run(function ($ionicPlatform, $http, ContentService, $ionicPopup, $window, $state) {
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
            if (ifDataNotSet()) {
                failure()
            }
        }

        function success(msg){
            setDataSet();
            $state.go('app.submenus');
            $window.location.reload(true);

        }

        function failure(msg){
            populateOffline();
            setDataSet();
            enableTips();
            $window.location.reload(true);

        }

        function ifDataNotSet(){
            return window.localStorage.getItem('dataIsSet') === null;
        }

        function setDataSet(){
            window.localStorage.setItem('dataIsSet', 'true');
        }

        function enableTips(){
            window.localStorage.setItem('enableTips', "true");
        }

        function ifTipEnabled(){
            return window.localStorage.getItem('enableTips') == "true";

        }

        function populateOffline(){
            window.localStorage.setItem('menu', JSON.stringify(menuItems.Menu));
            window.localStorage.setItem('home', JSON.stringify(ContentService.setHome()));
            window.localStorage.setItem('submenu-' + 33, JSON.stringify(subMenuItem33.Submenu))
            window.localStorage.setItem('submenu-' + 50, JSON.stringify(subMenuItem50.Submenu))
            window.localStorage.setItem('submenu-' + 55, JSON.stringify(subMenuItem55.Submenu))

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

            .state('app.submenus', {
                url: "/submenus/:menuId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/submenus.html",
                        controller: "MenuContentCtrl"
                    }
                }
            })

            .state('app.content', {
                url: "/content",
                views: {
                    'menuContent': {
                        templateUrl: 'templates/content.html',
                        controller: 'ContentController'
                    }
                }
            })

            .state('app.fail', {
                url: "/fail",
                'views': {
                    'menuContent': {
                        templateUrl: "templates/fail.html",
                        controller: 'AppCtrl'
                    }
                }
            })

            .state('app.map', {
                url: "/map",
                views: {
                    'menuContent': {
                        templateUrl: "templates/map.html",
                        controller: 'MapCtrl'
                    }
                }
            })

            .state('app.test', {
                url: "/test",
                views: {
                    'menuContent': {
                        templateUrl: "templates/kormokorta/kormokorta.html"
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/submenus/');
    });

var menuItems = {
    "Menu": [
        {
            "menu_id": "50",
            "menu_name": "প্রকল্প-সমূহ",
            "app_code": 2,
            "app_id": "140",
            "menu_type": "1",
            "content": null,
            "active": "1",
            "has_submenu": "1"
        },
        {
            "menu_id": "52",
            "menu_name": "প্রয়োজনীয়",
            "app_code": 3,
            "app_id": "140",
            "menu_type": "1",
            "content": "<p>&lsquo;বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষ&rsquo;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>দেশের শহর থেকে শুরু করে প্রত্যন্ত অঞ্চল পর্যন্ত আপামর জনতার মাঝে তথ্য সেবা পৌঁছানোর লক্ষ্যে &lsquo;বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষ&rsquo; গুরুতপূর্ণ ভূমিকা রেখে চলছে ।</p>\r\n\r\n<p>&lsquo;ডিজিটাল বাংলাদেশ&rsquo; গড়ার লক্ষ্যে &lsquo;বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষ&rsquo; ইতোমধ্যে বিভিন্ন প্রকল্প হাতে নিয়েছে, যার মধ্যে বেশ কিছু প্রকল্প বাস্তবায়িত হয়েছে ( যেমন &lsquo;কালিয়াকৈর হাই-টেক পার্ক&rsquo;, &lsquo;যশোর সফটওয়্যার প্রযুক্তি পার্ক&rsquo; ) এবং কিছু প্রকল্প চলমান ( যেমন &lsquo;মহাখালী আইটি ভিলেজ&rsquo;, &lsquo;সিলিকন সিটি, রাজশাহী&rsquo;, &lsquo;ইলেকট্রনিক সিটি, সিলেট&rsquo; ) রয়েছে ।</p>\r\n\r\n<p>এই প্রতিষ্ঠানের মুল লক্ষ্য &lsquo;ডিজিটাল বাংলাদেশ&rsquo; গড়ার লক্ষ্যে বাংলাদেশ সরকারের মাননীয় প্রধানমন্ত্রীর নেয়া &lsquo;ভিশন ২০২১&rsquo; বাস্তবায়ন করা, যা বাংলাদেশের মত উন্নয়নশীল দেশের আর্থ-সামাজিক উন্নয়নে গুরুত্বপূর্ণ ভূমিকা রাখতে পারে ।</p>\r\n",
            "active": "0",
            "has_submenu": "0"
        },
        {
            "menu_id": "54",
            "menu_name": "সেবা",
            "app_code": 4,
            "app_id": "140",
            "menu_type": "1",
            "content": "<p>বঙ্গবন্ধুর স্বপ্নের &lsquo;ডিজিটাল বাংলাদেশ&rsquo; গড়ার লক্ষ্যে গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের মাননীয় প্রধানমন্ত্রী শেখ হাসিনার নেয়া &lsquo;ভিশন ২০২১&rsquo; বাস্তবায়নে &lsquo;বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষ&rsquo; গুরুত্বপূর্ণ ভূমিকা রাখছে ।</p>\r\n\r\n<p>বাংলাদেশের মত উন্নয়নশীল দেশে তথ্যপ্রযুক্তি সেবার সম্প্রসারণে এই প্রতিষ্ঠানের ভূমিকা অনস্বীকার্য । দেশের শহর থেকে প্রত্যন্ত অঞ্চল পর্যন্ত আপামর জনতার মাঝে তথ্য সেবা পৌঁছানোর লক্ষ্যে &lsquo;বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষ&rsquo; প্রতিটি উপজেলায় তথ্যকেন্দ্র স্থাপন করেছে, যাতে রয়েছে উন্নতমানের ইন্টারনেট সেবাসহ অন্যান্য প্রযুক্তিগত সেবা ( যেমন জনগণকে কম্পিউটার সংক্রান্ত সাধারণ জ্ঞান প্রদান থেকে শুরু করে কম্পিউটার বিষয়ক প্রশিক্ষণ ) প্রদান করছে ।</p>\r\n",
            "active": "1",
            "has_submenu": "0"
        },
        {
            "menu_id": "55",
            "menu_name": "কর্মকর্তা-কর্মচারী",
            "app_code": 3,
            "app_id": "140",
            "menu_type": "1",
            "content": null,
            "active": "1",
            "has_submenu": "1"
        },
        {
            "menu_id": "64",
            "menu_name": "সম্পর্কিত তথ্য",
            "app_code": "0",
            "app_id": "140",
            "menu_type": "1",
            "content": "<div class=\"card\">\r\n        <div class=\"item item-divider\">‘বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষ’</div>\r\n        <div class=\"item item-text-wrap\">\r\n            <p>দেশের শহর থেকে শুরু করে প্রত্যন্ত অঞ্চল পর্যন্ত আপামর জনতার মাঝে তথ্য সেবা পৌঁছানোর লক্ষ্যে ‘বাংলাদেশ হাই-টেক\r\n                পার্ক কর্তৃপক্ষ’ গুরুতপূর্ণ ভূমিকা রেখে চলছে ।</p>\r\n\r\n            <p>‘ডিজিটাল বাংলাদেশ’ গড়ার লক্ষ্যে ‘বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষ’ ইতোমধ্যে বিভিন্ন প্রকল্প হাতে নিয়েছে, যার\r\n                মধ্যে বেশ কিছু প্রকল্প বাস্তবায়িত হয়েছে ( যেমন ‘কালিয়াকৈর হাই-টেক পার্ক’, ‘যশোর সফটওয়্যার প্রযুক্তি পার্ক’ )\r\n                এবং কিছু প্রকল্প চলমান ( যেমন ‘মহাখালী আইটি ভিলেজ’, ‘সিলিকন সিটি, রাজশাহী’, ‘ইলেকট্রনিক সিটি, সিলেট’ ) রয়েছে\r\n                ।</p>\r\n\r\n            <p>এই প্রতিষ্ঠানের মুল লক্ষ্য ‘ডিজিটাল বাংলাদেশ’ গড়ার লক্ষ্যে বাংলাদেশ সরকারের মাননীয় প্রধানমন্ত্রীর নেয়া ‘ভিশন\r\n                ২০২১’ বাস্তবায়ন করা, যা বাংলাদেশের মত উন্নয়নশীল দেশের আর্থ-সামাজিক উন্নয়নে গুরুত্বপূর্ণ ভূমিকা রাখতে পারে\r\n                ।</p>\r\n        </div>\r\n    </div>\r\n\r\n<div class=\"card\">\r\n    <div class=\"item item-divider\">\r\n        মিশন ও ভিশন\r\n    </div>\r\n    <div class=\"item item-text-wrap\">\r\n        ‘বাংলাদেশ হাই_টেক পার্ক’ প্রতিষ্ঠিত হয়েছে কিছু সূনির্দিষ্ট লক্ষ্য ও উদ্দেশ্য সামনে রেখে । সুনির্দিষ্ট লক্ষ্য ও উদ্দেশ্যগুলো নিম্নরূপ-\r\n    </div>\r\n    <div class=\"item item-text-wrap\">\r\n        <ol>\r\n            <li>কিছু সুনির্দিষ্ট উচ্চ প্রবৃদ্ধি শিল্প খাত ও নতুন ব্যবসার জন্য যথোপযুক্ত ব্যবসায়ীক পরিবেশ নিশ্চিত করা</li>\r\n            <li>স্থানীয় শিল্পের উন্নয়নে আদিবাসী প্রযুক্তিগত সামর্থ্যের বিকাশ</li>\r\n            <li>শিল্প-প্রযুক্তি পণ্য বৈদেশিক বাজারে প্রবেশ করানো</li>\r\n            <li>অবকাঠামোগত প্রয়োজনীয় সহায়তার মাধ্যমে ঝামেলা-বিহিন শিল্প পরিবেশ নিশ্চিতকরণ</li>\r\n            <li>তথ্য-প্রযুক্তি খাতে দক্ষ জনবল বাড়ানোর জন্য প্রয়োজনীয় প্রশিক্ষণের ব্যবস্থা করা</li>\r\n            <li>অবকাঠামো উন্নয়নের মাধ্যমে আই.সি.টি খাতে দেশী-বিদেশী বিনিয়োগ আকৃষ্ট করা , স্থানীয় কোম্পানীসমূহকে প্রতিযোগিতামূলক করা এবং কর্মসংস্থান ও রপ্তানি বৃদ্ধি করা</li>\r\n            <li>তথ্য ও যোগাযোগ প্রযুক্তির উন্নয়ন, গবেষণা, সফল প্রয়োগ এবং ডিজিটাল ব্যবস্থাপনা প্রসারের মাধ্যমে তথ্য প্রযুক্তির সার্বজনীন প্রবেশাধিকার প্রতিষ্ঠাপূর্বক জনগণের আর্থ-সামাজিক সমৃদ্ধি অর্জন</li>\r\n            <li>তথ্য ও যোগাযোগ প্রযুক্তি সম্পর্কিত বিভিন্ন দেশে এবং আন্তর্জাতিক ও বিশ্ব সংস্থাসমূহের উদ্যোগের সাথে সম্পৃক্ততা বৃদ্ধি</li>\r\n        </ol>\r\n\r\n    </div>\r\n</div>\r\n",
            "active": "1",
            "has_submenu": "0"
        }
    ]
}

var subMenuItem33 = {
    "Submenu": [
        {
            "submenu_id": "13",
            "menu_id": "33",
            "submenu_name": "Something",
            "content": "<div id=\"printable_area\"><u>নোটিশ</u>\r\n\r\n<h3>বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষের বর্তমান ওয়েবসাইট URL/Link পরিবর্তন প্রসঙ্গে।</h3>\r\n<a href=\"http://bhtpa.portal.gov.bd/sites/default/files/files/bhtpa.portal.gov.bd/notices/5f55e95b_755e_48ed_9c77_7b723c0bcb49/scan0032.pdf\"><img alt=\"scan0032.pdf\" class=\"file-icon\" src=\"/themes/responsive_npf/img/file-icons/16px/pdf.png\" /> scan0032.pdf</a><iframe height=\"780\" src=\"http://docs.google.com/viewer?url=http://bhtpa.portal.gov.bd//sites/default/files/files/bhtpa.portal.gov.bd/notices/5f55e95b_755e_48ed_9c77_7b723c0bcb49/scan0032.pdf&amp;embedded=true\" style=\"border: none;\" width=\"100%\"></iframe></div>\r\n",
            "active": "1"
        }
    ]
}
var subMenuItem50 = {
    "Submenu": [
        {
            "submenu_id": "22",
            "menu_id": "50",
            "submenu_name": "প্রস্তাবিত প্রকল্প",
            "content": "<p>বাংলাদেশের মোট জনসংখ্যার প্রায় ৩৪% (৫৩ মিলিয়ন) বেকার যুবক, যাদের বয়স ১৫-৩৪ বছরের মধ্যে । এই বিপুল জনগোষ্ঠীকে যথাযথ প্রশিক্ষণের মাধ্যমে দক্ষ জনগোষ্ঠীতে পরিণত করা সম্ভব, তথ্যপ্রযুক্তি খাতে যার চাহিদা ব্যাপক ।</p>\r\n\r\n<p>এই লক্ষ্যে &lsquo;বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষ&rsquo; ঢাকা শহরের মহাখালীতে ৪৭ একর জায়গার ওপর &lsquo;তথ্যপ্রযুক্তি পার্ক স্থাপন&rsquo; প্রকল্পসহ বাকি ছয়টি বিভাগেও তদ্রূপ প্রকল্প স্থাপনের উদ্যোগ গ্রহণ করেছে ।</p>\r\n",
            "active": "1"
        },
        {
            "submenu_id": "23",
            "menu_id": "50",
            "submenu_name": "পরিবেশগত ব্যবস্থাপনা",
            "content": "<p>বাংলাদেশ সরকার তথ্যপ্রযুক্তি সেবার প্রসারে বিশ্বব্যাংক এবং ডিএফআইডি এর সহায়তায় &lsquo;কালিয়াকৈর হাই-টেক পার্ক&rsquo;, &lsquo;আইটি পার্ক&rsquo; সহ বিভিন্ন প্রকল্প হাতে নিয়েছে, যার অন্যতম প্রধান লক্ষ্য দেশের বিপুল বেকার জনগোষ্ঠীর কর্মসংস্থানের ব্যবস্থা করা ।</p>\r\n\r\n<p>বিশ্বায়নের এই যুগে বাংলাদেশের মত উন্নয়নশীল দেশে আইটি পার্ক স্থাপনের জন্য যথোপযুক্ত পরিকল্পনা গ্রহণ করা প্রয়োজন ।</p>\r\n\r\n<p>&lsquo;তথ্যপ্রযুক্তি পার্ক&rsquo; এমন একটা জায়গা যেখানে কর্মকর্তা ও বিনিয়োগকারীদের জন্য উন্নতমানের যাতায়াত, টেলিযোগাযোগ, উচ্চ গতিসম্পন্ন ব্রডব্যান্ড ইন্টারনেট সেবা, বিভ্রাট-মুক্ত বিদ্যুৎ সরবরাহ, আবাসন ব্যবস্থা, পানি ও গ্যাস সরবরাহ, ব্যাংকিং, বীমা, বিনোদন, সুচিকিৎসা, পণ্য পরিবহন, ভ্রমণ ইত্যাদি সুবিধা থাকবে ।</p>\r\n\r\n<p>রাজধানী ঢাকা থেকে মাত্র ১৫৬ কিলোমিটার দক্ষিণ-পশ্চিমে যশোর সদর উপজেলায় &lsquo;যশোর সফটওয়্যার প্রযুক্তি পার্ক&rsquo; সরকারের প্রত্যক্ষ তত্ত্বাবধানে ৩.০৩ একর জায়গা জুড়ে অবস্থিত ।&nbsp;</p>\r\n",
            "active": "1"
        },
        {
            "submenu_id": "69",
            "menu_id": "50",
            "submenu_name": "চলমান প্রকল্প",
            "content": "<div class=\"card\">\r\n            <div class=\"item item-text-wrap\">\r\n                বর্তমান সরকারের ‘ডিজিটাল বাংলাদেশ’ গড়ার নির্বাচনী ইশতেহার বাস্তবায়নের লক্ষ্যে ডিজিটাল প্রযুক্তি সেবা\r\n                দেশের শহর থেকে শুরু করে প্রত্যন্ত অঞ্চলে পৌঁছানোর উদ্যোগ গ্রহণ করেছে। এছাড়াও বর্তমান সরকার ‘ভিশন ২০২১’\r\n                হাতে নিয়েছে, যার মূল লক্ষ্য স্বাধীনতার সুবর্ণ জয়ন্তী, ২০২১ সালের মধ্যে বাংলাদেশকে একটি মধ্যম আয়ের দেশে\r\n                পরিণত করা।\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"list card\">\r\n\r\n            <div class=\"item item-assertive\">\r\n                <h2>Kaliakoir Hi-Tech Park</h2>\r\n            </div>\r\n\r\n            <div class=\"item item-image\">\r\n                <img src=\"http://sdkhtp.htpbd.org.bd/HITEC_FILES/8Home.jpg\">\r\n            </div>\r\n\r\n            <div class=\"item item-text-wrap\">বাংলাদেশ সরকার তথ্য ও যোগাযোগ প্রযুক্তি (আইসিটি) ব্যবহার করে বাংলাদেশকে একটি মধ্যম আয়ের উন্নয়নশীল দেশ\r\n                হিসেবে তৈরি করতে এবং হাই-টেক শিল্পের জন্য অনুকূল ব্যবসায়িক পরিবেশ তৈরি করার লক্ষ্যে দ্বার 'ভিশন 2021'\r\n                ঘোষণা করেছে। ‘তথ্য-প্রযুক্তি’ বাংলাদেশের অর্থনীতির জন্য \"সম্ভাবনাময় খাত\" হিসাবে চিহ্নিত করা হয়েছে।\r\n                সরকার লক্ষ্য অর্জন করতে বিভিন্ন উদ্যোগ গ্রহণ করেছে।\r\n\r\n                দেশের অর্থনৈতিক উন্নয়ন দৃঢ় করার জন্য, ‘বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষ’ 2010 সালে প্রতিষ্ঠিত হয়।\r\n                কালিয়াকৈর হাই-টেক পার্ক, যশোর সফটওয়্যার টেকনোলজি (আইটি) পার্ক, সিলেট হাই-টেক পার্ক, মহাখালী আইটি\r\n                ভিলেজ, জনতা টাওয়ার সফটওয়্যার টেকনোলজি পার্ক গুরুত্বপূর্ণ এবং অগ্রাধিকার ভিত্তিতে আইটি খাতের উন্নয়নে\r\n                মাইলফলক হবে, যা প্রকল্প হিসেবে বাংলাদেশের শিল্পায়নে গুরুত্বপূর্ণ ভুমিকা রাখবে।\r\n\r\n                কালিয়াকৈর হাই-টেক পার্ক গাজীপুর জেলার কালিয়াকৈর উপজেলায় অবস্থিত বাংলাদেশের প্রথম হাই-টেক পার্ক। এটা\r\n                ঢাকা শহর থেকে শুধুমাত্র 40 কিমি উত্তরে 232 একর জমির উপরে অবস্থিত। অতিরিক্ত 100 একর সরকারী জমি পার্কে\r\n                অন্তর্ভুক্ত করার জন্য প্রক্রিয়াধীন রয়েছে। এই আইটি পার্ক তরুণ শিক্ষিত এবং টেকনিক্যালি দক্ষ\r\n                কর্মী-বাহিনীর বিশাল সম্ভাবনা কাজে লাগাতে পারে, যেখানে বিনিয়োগকারী বিশেষ করে বিদেশী বিনিয়োগকারীদের\r\n                আকৃষ্ট করতে বিশেষ অঞ্চল হিসেবে বিবেচনা করা হবে। অবশেষে দেশের অর্থনীতি যথেষ্ট বৈদেশিক মুদ্রা দ্বারা\r\n                উদ্দীপ্ত হবে।26 এপ্রিল 2012 বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষ বাংলাদেশ বিভাগীয় পর্যায়ে আইটি ভিলেজ\r\n                'স্থাপনের একটি সিদ্ধান্ত গ্রহণ করেছে।যা অদূর ভবিষ্যতে বাংলাদেশের অর্থনীতিকে আরো সামনে এগিয়ে নিবে\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"list card\">\r\n\r\n            <div class=\"item item-assertive\">\r\n                <h2>যশোর সফটওয়্যার টেকনোলজি পার্ক</h2>\r\n            </div>\r\n\r\n            <div class=\"item item-text-wrap\">বর্তমান সরকার, অপ্রতিরোধ্য বিজয়ের মাধ্যমে ক্ষমতায় আসার আগে তার নির্বাচনী ইশতেহারে বাংলাদেশের শহুর থেকে\r\n                শুরু করে দূরবর্তী গ্রামাঞ্চলে সব মানুষের কাছে ডিজিটাল প্রযুক্তি সুবিধা পৌঁছনোর সঙ্গে একটি 'ডিজিটাল\r\n                বাংলাদেশ' গড়ে তুলতে অঙ্গীকার করেছিল। ২০২১ সাল- বাংলাদেশ স্বাধীনতার এর সুবর্ণ জয়ন্তীর ভিতরে বাংলাদেশকে\r\n                একটি মধ্যম দেশ রূপান্তর করা।\r\n\r\n                দেশের প্রথম ডিজিটাল মডেল জেলা যশোরে ৪৭ কোটি ৫৩ লাখ টাকা ব্যয়ে নির্মাণ করা হচ্ছে ‘যশোর সফটওয়্যার টেকনোলজি\r\n                পার্ক’।\r\n                সম্মানিত প্রধানমন্ত্রী, 27 ডিসেম্বর 2010 যশোর তার দর্শনের (খুলনা বিভাগ অধীন একটি জেলা) সময় সরকারের\r\n                'ডিজিটাল বাংলাদেশ' এর অংশ হিসেবে সেখানে একটি আইটি পার্ক স্থাপন করার অঙ্গীকার করেন। তার প্রতিশ্রুতি\r\n                অনুসরণ করে, \"যশোর সফটওয়্যার টেকনোলজি শীর্ষক 'প্রতিষ্ঠা পার্ক \" বাংলাদেশ হাইটেক পার্ক অথরিটি দ্বারা\r\n                গ্রহণ করা হয়েছে।\r\n\r\n                প্রকল্পের জন্য সাইট বারান্দ্রি এবং শঙ্করপুর মৌজার মধ্যে অবস্থিত জমির একটি ৩.০৩ একর মধ্যে নির্বাচিত করা\r\n                হয়েছে সদর উপজেলার যশোর জেলার।\r\n\r\n                এই প্রকল্পের দীর্ঘমেয়াদী উদ্দেশ্য সারা দেশে জ্ঞান ভিত্তিক শিল্প স্থাপন করা হয়।\r\n                বিশেষ করে, সফটওয়্যার এবং এর সাথে সম্পর্কিত আইটি জাতীয় খাতে অবদান রাখার মাধ্যমে 'ডিজিটাল বাংলাদেশ ভীষণ\r\n                ২০১২ ' অর্থনীতির চূড়ান্ত লক্ষ্য অর্জন।\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"list card\">\r\n            <div class=\"item item-stable\">\r\n                <h2>প্রকল্পের নির্দিষ্ট উদ্দেশ্য হল:</h2>\r\n            </div>\r\n            <div class=\"item item-text-wrap\">\r\n                <p>১। দেশের দক্ষিণ অঞ্চলের আইসিটি শিল্প সুষম উন্নয়ন উন্নীত করা।</p>\r\n\r\n                <p>২। আইটি'র মৌলিক অবকাঠামো তৈরি করতে আঞ্চলিক স্তরের আইটি পার্ক / এসটিপি তিনি প্রতিষ্ঠা।</p>\r\n\r\n                <p> ৩। একটি মাল্টি-টেনেন্ট ভবন (এমটিবি) নির্মাণ করা এবং যশোরে আইটি পার্ক এর জন্য জমি বিনিয়োগকারীদের\r\n                    (স্থানীয় ও বিদেশী) জন্য অন্যান্য ইউটিলিটি সেবার প্রস্তুত পরিকাঠামো তৈরি করা।</p>\r\n\r\n                <p>৪। প্রতিষ্ঠার জন্য বিদেশী কোম্পানি আকৃষ্ট করতে একটি সহায়ক পরিবেশ তৈরি করতে এবং যশোরের সাথে সাথে বাংলাদেশে\r\n                    অপারেটিং সফটওয়্যার এবং আইটিইএস শিল্পের প্রসার।</p>\r\n\r\n                <p>৫। আইসিটি পেশাদারদের জন্য কর্মসংস্থানের সুযোগ সৃষ্টি করা।</p>\r\n\r\n                <p>৬। 'ডিজিটাল বাংলাদেশ ভিশন 2021' বুঝতে জ্ঞান ভিত্তিক শিল্প উন্নীত করা।</p>\r\n            </div>\r\n\r\n        </div>",
            "active": "1"
        }
    ]
}
var subMenuItem55 = {
    "Submenu": [
        {
            "submenu_id": "24",
            "menu_id": "55",
            "submenu_name": "কর্মকর্তা",
            "content": " <div class=\"list\">\\\r\\\n            <div class=\"item item-thumbnail-left\">\\\r\\\n                <img src=\"http:\\/\\/bhtpa.portal.gov.bd\\/sites\\/default\\/files\\/files\\/bhtpa.portal.gov.bd\\/officer_list\\/e1d6f436_3aca_4f0a_a5f9_8b0000b8e99f\\/Untitled.jpg\">\\\r\\\n                <span class=\"bold\">হোসনে আরা বেগম, এনডিসি<\\/span>\\\r\\\n\\\r\\\n                <p>\\\r\\\n                    ব্যবস্থাপনা পরিচালক<\\/br>\\\r\\\n                    বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষ<\\/br>\\\r\\\n                    <a href=\"tel: +8801818254637\">ফোনঃ ০১৮১৮-২৫৪৬৩৭<\\/br><\\/a>\\\r\\\n                    <a href=\"mailto: md@htpbd.org.bd\">md@htpbd.org.bd<\\/span><\\/a>\\\r\\\n                <\\/p>\\\r\\\n            <\\/div>\\\r\\\n            <div class=\"item item-thumbnail-left\">\\\r\\\n                <img src=\"http:\\/\\/bhtpa.portal.gov.bd\\/sites\\/default\\/files\\/files\\/bhtpa.portal.gov.bd\\/officer_list\\/cf3e9271_2243_44e2_afbd_052e5d742dbd\\/scan0004.jpg\">\\\r\\\n                <span class=\"bold\"> জনাব মোঃ হাসানুল ইসলাম<\\/span>\\\r\\\n\\\r\\\n                <p>পরিচালক (কারিগরি) <\\/br>\\\r\\\n                    বাংলাদেশ হাই-টেক পার্ক কর্তৃপক<\\/br>\\\r\\\n                    <a href=\"tel:+8801818254637\">ফোনঃ ০১৫৩৪৮৯০৮৫৬<\\/a><\\/br>\\\r\\\n                    <a href=\"mailto: hasanulislam91@gmail.com\">hasanulislam91@gmail.com <\\/a>\\\r\\\n                <\\/p>\\\r\\\n            <\\/div>\\\r\\\n            <div class=\"item item-thumbnail-left\">\\\r\\\n                <img src=\"http:\\/\\/bhtpa.portal.gov.bd\\/sites\\/default\\/files\\/files\\/bhtpa.portal.gov.bd\\/officer_list\\/f1bc233e_2bfd_45bb_ac68_d859bebc2df6\\/Director.jpg\">\\\r\\\n                <span class=\"bold\">জনাব সৈয়দ এমদাদুল হক <\\/span>\\\r\\\n\\\r\\\n                <p>পরিচালক (অর্থ ও প্রশাসন) <\\/br>\\\r\\\n                    বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষ <\\/br>\\\r\\\n                    <a href=\"01720343861\">ফোনঃ ০১৭২০-৩৪৩৮৬১<\\/br><\\/a>\\\r\\\n                    <a href=\"mailto:d.adfin@htpbd.org.bd\">d.adfin@htpbd.org.bd <\\/a><\\/p>\\\r\\\n            <\\/div>\\\r\\\n            <div class=\"item item-thumbnail-left\">\\\r\\\n                <img src=\"http:\\/\\/bhtpa.portal.gov.bd\\/sites\\/default\\/files\\/files\\/bhtpa.portal.gov.bd\\/officer_list\\/b8314745_309a_415c_98e1_a94b65d129ef\\/scan0003.jpg\">\\\r\\\n                <span class=\"bold\">জনাব এস এম আব্দুল্লাহ আল-মামুন <\\/span>\\\r\\\n\\\r\\\n                <p> উপ-পরিচালক (অর্থ ও প্রশাসন)<\\/br>\\\r\\\n                    বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষ<\\/br>\\\r\\\n                    <a href=\"tel:++88028181299\">ফোনঃ +৮৮-০২-৮১৮১২৯৯<br><\\/a>\\\r\\\n                    <a href=\"mailto:dd.adfin@htpbd.org.bd\">dd.adfin@htpbd.org.bd <\\/a>\\\r\\\n                <\\/p>\\\r\\\n            <\\/div>\\\r\\\n            <div class=\"item item-thumbnail-left\" href=\"#\">\\\r\\\n                <img src=\"http:\\/\\/bhtpa.portal.gov.bd\\/sites\\/default\\/files\\/files\\/bhtpa.portal.gov.bd\\/officer_list\\/6cb911d3_f4ad_4d5b_9939_51fb5aeb9d52\\/Mobassor.jpg\">\\\r\\\n                <span class=\"bold\">জনাব শেখ মোবাশ্বের হোসেন <\\/span>\\\r\\\n\\\r\\\n                <p>হিসাব রক্ষন কর্মকর্তা <br>\\\r\\\n                    বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষ<br>\\\r\\\n                    <a href=\"tel:+88028181160\">+৮৮-০২৮১৮১১৬০<\\/a><br>\\\r\\\n                    <a href=\"mailto:ad@htpbd.org.bd \">ad@htpbd.org.bd <\\/a>\\\r\\\n                <\\/p>\\\r\\\n            <\\/div>\\\r\\\n            <div class=\"item item-thumbnail-left\" href=\"#\">\\\r\\\n                <img src=\"http:\\/\\/bhtpa.portal.gov.bd\\/sites\\/default\\/files\\/files\\/bhtpa.portal.gov.bd\\/officer_list\\/0d560f5c_a6ae_486b_9e16_f269788ed168\\/Civil.jpg\">\\\r\\\n                <span class=\"bold\">জনাব মোঃ আতিকুল ইসলাম <\\/span>\\\r\\\n\\\r\\\n                <p>সহকারী প্রকৌশলী (সিভিল-1)<br>\\\r\\\n                    বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষ<br>\\\r\\\n                    <a href=\"tel:01712259696\">০১৭১২২৫৯৬৯৬<\\/a><br>\\\r\\\n                    <a href=\"mailto:ae.civil@htpbd.org.bd\">ae.civil@htpbd.org.bd<\\/a>\\\r\\\n                <\\/p>\\\r\\\n            <\\/div>\\\r\\\n\\\r\\\n            <div class=\"item item-thumbnail-left\" href=\"#\">\\\r\\\n                <img src=\"http:\\/\\/bhtpa.portal.gov.bd\\/sites\\/default\\/files\\/files\\/bhtpa.portal.gov.bd\\/officer_list\\/571d8c26_9bdc_48c2_a267_7a3dfff44101\\/Khadija.jpg\">\\\r\\\n                <span class=\"bold\">খাদিজা আক্তার <\\/span>\\\r\\\n\\\r\\\n                <p>সহকারী পরিচালক (প্রশাসন)<br>\\\r\\\n                    বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্<br>\\\r\\\n                    <a href=\"tel:168281545 \">ফোনঃ ০১৬৮২৮১২৫৪৫<\\/a><br>\\\r\\\n                    <a href=\"mailto:ad.admin@htpbd.org.bd\">ad.admin@htpbd.org.bd<\\/a>\\\r\\\n                <\\/p>\\\r\\\n            <\\/div>\\\r\\\n            <div class=\"item item-thumbnail-left\" href=\"#\">\\\r\\\n                <img src=\"http:\\/\\/bhtpa.portal.gov.bd\\/sites\\/default\\/files\\/files\\/bhtpa.portal.gov.bd\\/officer_list\\/924026e5_6bc4_4dcf_8e08_d6b113ae0381\\/Mahfuzul%20Kabir.jpg\">\\\r\\\n                <span class=\"bold\"> জনাব মোঃ মাহফুজুল কবির<\\/span>\\\r\\\n                <p>সহকারী পরিচালক (সংগ্রহ)<br>\\\r\\\n                    বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্<br>\\\r\\\n                    <a href=\"tel:01827100443\">ফোনঃ ০১৮২৭১০০৪৪৩<\\/a><br>\\\r\\\n                    <a href=\"mailto:ad.pro@htpbd.org.bd\">ad.pro@htpbd.org.bd<\\/a>\\\r\\\n                <\\/p>\\\r\\\n            <\\/div>\\\r\\\n            <div class=\"item item-thumbnail-left\" href=\"#\">\\\r\\\n                <img src=\"http:\\/\\/bhtpa.portal.gov.bd\\/sites\\/default\\/files\\/files\\/bhtpa.portal.gov.bd\\/officer_list\\/f37bb876_a27d_4196_a380_c2fda1ea11ac\\/AME.jpg\">\\\r\\\n                <span class=\"bold\">জনাব এস.এম. আল-মামুন <\\/span>\\\r\\\n                <p>সহকারী মেইন্টেনেন্স ইঞ্জিনিয়ার<br>\\\r\\\n                    বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্<br>\\\r\\\n                    <a href=\"tel:01839679090\">ফোনঃ ০১৮৩৯৬৭৯০৯০<\\/a><br>\\\r\\\n                    <a href=\"mailto:ame@htpbd.org.bd\">ame@htpbd.org.bd<\\/a>\\\r\\\n                <\\/p>\\\r\\\n            <\\/div>\\\r\\\n            <div class=\"item item-thumbnail-left\" href=\"#\">\\\r\\\n                <img src=\"http:\\/\\/bhtpa.portal.gov.bd\\/sites\\/default\\/files\\/files\\/bhtpa.portal.gov.bd\\/officer_list\\/2531a8c5_516a_4627_9607_71cc6cad81d4\\/Untitled1.png\">\\\r\\\n                <span class=\"bold\">জনাব শাহরিয়ার আল হাসান<\\/span>\\\r\\\n                <p>সহকারী পরিচালক (বিনিয়োগ)<br>\\\r\\\n                    বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্<br>\\\r\\\n                    <a href=\"tel:01716011212\">ফোনঃ ০১৭১৬০১১২১২<\\/a><br>\\\r\\\n                    <a href=\"mailto:ad.invest@htpbd.org.bd\">ad.invest@htpbd.org.bd<\\/a>\\\r\\\n                <\\/p>\\\r\\\n            <\\/div>\\\r\\\n            <div class=\"item item-thumbnail-left\" href=\"#\">\\\r\\\n                <img src=\"http:\\/\\/bhtpa.portal.gov.bd\\/sites\\/default\\/files\\/files\\/bhtpa.portal.gov.bd\\/officer_list\\/846814d7_ce69_4c5d_881f_1037cac13336\\/Norottom.Picture.JPG\">\\\r\\\n                <span class=\"bold\">জনাব নরোত্তম পাল<\\/span>\\\r\\\n                <p>সহকারী প্রকৌশলী (ই\\/এম)<br>\\\r\\\n                    বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্<br>\\\r\\\n                    <a href=\"tel:01717514806\">ফোনঃ ০১৭১৭৫১৪৮০৬<\\/a><br>\\\r\\\n                    <a href=\"mailto:norottom@gmail.com\">norottom@gmail.com<\\/a>\\\r\\\n                <\\/p>\\\r\\\n            <\\/div>\\\r\\\n            <div class=\"item item-thumbnail-left\" href=\"#\">\\\r\\\n                <img src=\"http:\\/\\/bhtpa.portal.gov.bd\\/sites\\/default\\/files\\/files\\/bhtpa.portal.gov.bd\\/officer_list\\/27a5547c_9bab_4c4c_b04d_fc14add9efda\\/scan0014.jpg\">\\\r\\\n                <span class=\"bold\">জনাব ফিরোজ আহমেদ<\\/span>\\\r\\\n                <p>সহকারী প্রকৌশলী (সিভিল-2))<br>\\\r\\\n                    বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্<br>\\\r\\\n                    <a href=\"tel:01917884840\">ফোনঃ ০১৯১৭৮৮৪৮৪০<\\/a><br>\\\r\\\n                    <a href=\"mailto:firojahmed2010@yahoo.com\">firojahmed2010@yahoo.com<\\/a>\\\r\\\n                <\\/p>\\\r\\\n            <\\/div>\\\r\\\n            <div class=\"item item-thumbnail-left\" href=\"#\">\\\r\\\n                <img src=\"http:\\/\\/bhtpa.portal.gov.bd\\/sites\\/default\\/files\\/files\\/bhtpa.portal.gov.bd\\/officer_list\\/ca4d3149_1129_4f9a_be79_21ae187b7b24\\/scan0027.jpg\">\\\r\\\n                <span class=\"bold\"> জনাব মোঃ শফিক ঊদ্দীন ভুঁইয়া<\\/span>\\\r\\\n                <p>রিসার্চ অফিসার<br>\\\r\\\n                    বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্<br>\\\r\\\n                    <a href=\"tel:01914322575\">ফোনঃ ০১৯১৪৩২২৫৭৫<\\/a><br>\\\r\\\n                    <a href=\"mailto:su_bhuiyan@yahoo.com\">su_bhuiyan@yahoo.com<\\/a>\\\r\\\n                <\\/p>\\\r\\\n            <\\/div>\\\r\\\n            <div class=\"item item-thumbnail-left\" href=\"#\">\\\r\\\n                <img src=\"http:\\/\\/bhtpa.portal.gov.bd\\/sites\\/default\\/files\\/files\\/bhtpa.portal.gov.bd\\/officer_list\\/96acf87d_e7dc_4204_a67d_1881ebbaa17c\\/Jibanur.jpg.jpg\">\\\r\\\n                <span class=\"bold\">জিবানূর-বিনতে-জহির<\\/span>\\\r\\\n                <p>উপ-সহকারী প্রকৌশলী (ই\\/এম-১)<br>\\\r\\\n                    বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্<br>\\\r\\\n                    <a href=\"tel:01912463448\">ফোনঃ ০১৯১২৪৬৩৪৪৮<\\/a><br>\\\r\\\n                    <a href=\"mailto:sae.gibanur@htpbd.org.bd\">sae.gibanur@htpbd.org.bd<\\/a>\\\r\\\n                <\\/p>\\\r\\\n            <\\/div>\\\r\\\n\\\r\\\n            <div class=\"item item-thumbnail-left\" href=\"#\">\\\r\\\n                <img src=\"http:\\/\\/bhtpa.portal.gov.bd\\/sites\\/default\\/files\\/files\\/bhtpa.portal.gov.bd\\/officer_list\\/949abef0_afbf_4492_a6b9_0270e1028de2\\/Maruf.jpg\">\\\r\\\n                <span class=\"bold\">জনাব হাসান মারুফ পারভেজ<\\/span>\\\r\\\n\\\r\\\n                <p>উপ-সহকারী প্রকৌশলী (সিভিল-১)<br>\\\r\\\n                    বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্<br>\\\r\\\n                    <a href=\"tel:01717534300\">ফোনঃ ০১৭১৭৫৩৫৩০০<\\/a><br>\\\r\\\n                    <a href=\"mailto:sae.parvez@htpbd.org.bd\">sae.parvez@htpbd.org.bd<\\/a>\\\r\\\n                <\\/p>\\\r\\\n            <\\/div>\\\r\\\n            <div class=\"item item-thumbnail-left\" href=\"#\">\\\r\\\n                <img src=\"http:\\/\\/bhtpa.portal.gov.bd\\/sites\\/default\\/files\\/files\\/bhtpa.portal.gov.bd\\/officer_list\\/109ba639_3dfa_48d8_8425_87e2f915a4fb\\/Untitled.jpg\">\\\r\\\n                <span class=\"bold\">জনাব ওবায়েত হোসেন<\\/span>\\\r\\\n                <p>উপ-সহকারী প্রকৌশলী (সিভিল-২)<\\/br>\\\r\\\n                    বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্<br>\\\r\\\n                    <a href=\"tel:0171957439\">ফোনঃ ০১৭১৯৫৭৪৩৯<\\/a><br>\\\r\\\n                    <a href=\"mailto:sae.obayet@htpbd.org.bd\">sae.obayet@htpbd.org.bd<\\/a>\\\r\\\n                <\\/p>\\\r\\\n            <\\/div>\\\r\\\n            <div class=\"item item-thumbnail-left\" href=\"#\">\\\r\\\n                <img src=\"http:\\/\\/bhtpa.portal.gov.bd\\/sites\\/default\\/files\\/files\\/bhtpa.portal.gov.bd\\/officer_list\\/9528227d_f291_4b4c_91e4_307f8ea381a9\\/Shahi.jpg\">\\\r\\\n                <span class=\"bold\">জনাব মোঃ হাসান ইবনে শাহী<\\/span>\\\r\\\n\\\r\\\n                <p>উপ-সহকারী প্রকৌশলী (ই\\/এম-2)<\\/br>\\\r\\\n                    বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্<br>\\\r\\\n                    <a href=\"tel:01711849172\">ফোনঃ ০১৭১১৮৪৯১৭২<\\/a><br>\\\r\\\n                    <a href=\"mailto:sae.shahi@htpbd.org.bd\">sae.shahi@htpbd.org.bd<\\/a>\\\r\\\n                <\\/p>\\\r\\\n            <\\/div>\\\r\\\n\\\r\\\n\\\r\\\n        <\\/div>\\\r\\\n",
            "active": "1"
        },
        {
            "submenu_id": "25",
            "menu_id": "55",
            "submenu_name": "কর্মচারী",
            "content": "  <div class=\"list\">\\\r\\\n            <div class=\"item item-divider\">\\\r\\\n                বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষের কর্মচারী বৃন্দের তালিকা\\\r\\\n            <\\/div>\\\r\\\n            <div class=\"item item-thumbnail-left item-text-wrap\">\\\r\\\n                <img src=\"http:\\/\\/bhtpa.portal.gov.bd\\/sites\\/default\\/files\\/files\\/bhtpa.portal.gov.bd\\/page\\/b6f9c040_fe94_45a3_a0d0_a5b44c7523d7\\/Najrul.jpg\">\\\r\\\n\\\r\\\n                <p class=\"bold\">\\\r\\\n                    জনাব কাজী নজরুল ইসলাম\\\r\\\n                <\\/p>\\\r\\\n\\\r\\\n                <p>\\\r\\\n                    কম্পিউটার মুদ্রাক্ষরিক কাম অফিস সহকারী\\\r\\\n                    <\\/br>\\\r\\\n                    বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষের ব্যবস্থাপনা পরিচালক মহোদয়ের দপ্তরিক কাজে কর্মরত\\\r\\\n                    <br>\\\r\\\n                    <a href=\"tel: +8801814097767\">ফোনঃ ০১৯১৪-০৯৭৭৬৭<\\/br><\\/a>\\\r\\\n                    <a href=\"mailto: nazrul.link@gmail.com\"> nazrul.link@gmail.com<\\/span><\\/a>\\\r\\\n                <\\/p>\\\r\\\n            <\\/div>\\\r\\\n\\\r\\\n            <div class=\"item item-thumbnail-left item-text-wrap\">\\\r\\\n                <img src=\"\">\\\r\\\n\\\r\\\n                <p class=\"bold\">\\\r\\\n                    জনাব মোশারফ হোসেন পারভেজ\\\r\\\n                <\\/p>\\\r\\\n\\\r\\\n                <p>\\\r\\\n                    হিসাব রক্ষক\\\r\\\n                    <\\/br>\\\r\\\n                    বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষ\\\r\\\n                    <\\/br>\\\r\\\n                    <a href=\"tel: 01717858003\">ফোনঃ ০১৭১৭-৮৫৮০০৩ <\\/br><\\/a>\\\r\\\n                    <a href=\"mailto: parvejbriste@gmail.com\">parvejbriste@gmail.com<\\/a>\\\r\\\n                <\\/p>\\\r\\\n            <\\/div>\\\r\\\n\\\r\\\n            <div class=\"item item-thumbnail-left item-text-wrap\">\\\r\\\n                <img src=\"\">\\\r\\\n\\\r\\\n                <p class=\"bold\">\\\r\\\n                    মোসাঃ নাছরিন আক্তার\\\r\\\n                <\\/p>\\\r\\\n\\\r\\\n                <p>\\\r\\\n                    স্টোর কিপার\\\r\\\n                    <\\/br>\\\r\\\n                    বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষ\\\r\\\n                    <\\/br>\\\r\\\n                    <a href=\"mailto: akternnasrin@gmail.com\">akternnasrin@gmail.com<\\/a>\\\r\\\n                <\\/p>\\\r\\\n            <\\/div>\\\r\\\n\\\r\\\n            <div class=\"item item-thumbnail-left item-text-wrap\">\\\r\\\n                <img src=\"http:\\/\\/bhtpa.portal.gov.bd\\/sites\\/default\\/files\\/files\\/bhtpa.portal.gov.bd\\/page\\/b6f9c040_fe94_45a3_a0d0_a5b44c7523d7\\/Titon.jpg\">\\\r\\\n\\\r\\\n                <p class=\"bold\">\\\r\\\n                    জনাব টিটন চন্দ্র সাহা\\\r\\\n                <\\/p>\\\r\\\n\\\r\\\n                <p>\\\r\\\n                    কম্পিউটার মুদ্রাক্ষরিক কাম অফিস সহকারী\\\r\\\n                    <\\/br>\\\r\\\n                    সহকারী পরিচালক (প্রশাসন) ওসহকারী প্রকৌশলী\\\r\\\n                    <\\/br>\\\r\\\n                    <a href=\"tel: +8801717806433\">ফোনঃ ০১৭১৭-৮০৬৫৩৩ <\\/br><\\/a>\\\r\\\n                    <a href=\"mailto: \">titonshaha@gmail.com<\\/a><\\/a>\\\r\\\n                <\\/p>\\\r\\\n            <\\/div>\\\r\\\n\\\r\\\n            <div class=\"item item-thumbnail-left item-text-wrap\">\\\r\\\n                <img src=\"http:\\/\\/bhtpa.portal.gov.bd\\/sites\\/default\\/files\\/files\\/bhtpa.portal.gov.bd\\/page\\/b6f9c040_fe94_45a3_a0d0_a5b44c7523d7\\/Jahangir_Passport-01.jpg\">\\\r\\\n\\\r\\\n                <p class=\"bold\">\\\r\\\n                    জনাব জাহাঙ্গীর আলম\\\r\\\n                <\\/p>\\\r\\\n\\\r\\\n                <p>\\\r\\\n                    কম্পিউটার মুদ্রাক্ষরিক কাম অফিস সহকারী\\\r\\\n                    <\\/br>\\\r\\\n                    সহকারী পরিচালক (প্রশাসন) ওসহকারী প্রকৌশলী\\\r\\\n                    <\\/br>\\\r\\\n                    <a href=\"tel: +8801917836783\">ফোনঃ ০১৯১৭-৮৩৬৭৮৩ <\\/br><\\/a>\\\r\\\n                    <a href=\"mailto: \">jahangir_a70@yahoo.com<\\/a><\\/a>\\\r\\\n                <\\/p>\\\r\\\n            <\\/div>\\\r\\\n\\\r\\\n            <div class=\"item item-thumbnail-left item-text-wrap\">\\\r\\\n                <img src=\"http:\\/\\/bhtpa.portal.gov.bd\\/sites\\/default\\/files\\/files\\/bhtpa.portal.gov.bd\\/page\\/b6f9c040_fe94_45a3_a0d0_a5b44c7523d7\\/Anwar.jpg\">\\\r\\\n\\\r\\\n                <p class=\"bold\">\\\r\\\n                    জনাব মোঃ আনোয়ার হোসেন\\\r\\\n                <\\/p>\\\r\\\n\\\r\\\n                <p>\\\r\\\n                    কম্পিউটার মুদ্রাক্ষরিক কাম অফিস সহকারী\\\r\\\n                    <\\/br>\\\r\\\n                    বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষেরউপ-পরিচালক(অর্থ ও প্রশাসন) এর দপ্তরিক কাজে কর্মরত\\\r\\\n                    <\\/br>\\\r\\\n                    <a href=\"tel: 0172589970\">ফোনঃ ০১৭২৫৮৯৯৭০০ <\\/br><\\/a>\\\r\\\n                    <a href=\"mailto: c.op.keka@htpbd.org.bd\">c.op.keka@htpbd.org.bd<\\/a><\\/a>\\\r\\\n                <\\/p>\\\r\\\n            <\\/div>\\\r\\\n\\\r\\\n            <div class=\"item item-thumbnail-left item-text-wrap\">\\\r\\\n                <img src=\"http:\\/\\/bhtpa.portal.gov.bd\\/sites\\/default\\/files\\/files\\/bhtpa.portal.gov.bd\\/page\\/b6f9c040_fe94_45a3_a0d0_a5b44c7523d7\\/Keka.jpg\">\\\r\\\n\\\r\\\n                <p class=\"bold\">\\\r\\\n                    বেগম কেকা রায়\\\r\\\n                <\\/p>\\\r\\\n\\\r\\\n                <p>\\\r\\\n                    কম্পিউটার মুদ্রাক্ষরিক কাম অফিস সহকারী\\\r\\\n                    <\\/br>\\\r\\\n                    বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষেরউপ-পরিচালক(অর্থ ও প্রশাসন) এর দপ্তরিক কাজে কর্মরত    <\\/br>\\\r\\\n                    <a href=\"tel: 0172589970\">ফোনঃ ০১৭২৫৮৯৯৭০০ <\\/br><\\/a>\\\r\\\n                    <a href=\"mailto: c.op.keka@htpbd.org.bd\">c.op.keka@htpbd.org.bd<\\/a>\\\r\\\n                <\\/p>\\\r\\\n            <\\/div>\\\r\\\n\\\r\\\n            <div class=\"item item-thumbnail-left item-text-wrap\">\\\r\\\n                <img src=\"http:\\/\\/bhtpa.portal.gov.bd\\/sites\\/default\\/files\\/files\\/bhtpa.portal.gov.bd\\/page\\/b6f9c040_fe94_45a3_a0d0_a5b44c7523d7\\/ripon.jpg\">\\\r\\\n\\\r\\\n                <p class=\"bold\">\\\r\\\n                    জনাব ওবায়দুল হক রিপন\\\r\\\n                <\\/p>\\\r\\\n\\\r\\\n                <p>\\\r\\\n                    কম্পিউটার মুদ্রাক্ষরিক কাম অফিস সহকারী\\\r\\\n                    <\\/br>\\\r\\\n                    বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষেরউপ-পরিচালক(অর্থ ও প্রশাসন) এর দপ্তরিক কাজে কর্মরত    <\\/br>\\\r\\\n                    <a href=\"tel: 01710219419\">ফোনঃ ০১৭১০-২১৯৪১৯ <\\/br><\\/a>\\\r\\\n                    <a href=\"mailto: obydul.ripon2000@gmail.com\">obydul.ripon2000@gmail.com\\\r\\\n                    <\\/a>\\\r\\\n                <\\/p>\\\r\\\n            <\\/div>\\\r\\\n\\\r\\\n            <div class=\"item item-thumbnail-left item-text-wrap\">\\\r\\\n                <img src=\"http:\\/\\/bhtpa.portal.gov.bd\\/sites\\/default\\/files\\/files\\/bhtpa.portal.gov.bd\\/page\\/b6f9c040_fe94_45a3_a0d0_a5b44c7523d7\\/scan0001.jpg\">\\\r\\\n\\\r\\\n                <p class=\"bold\">\\\r\\\n                    জনাব মনির হোসেন\\\r\\\n                <\\/p>\\\r\\\n\\\r\\\n                <p>\\\r\\\n                    রিসিপসনিস্ট\\\r\\\n                    <\\/br>\\\r\\\n                    বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষের পরিচালক (অর্থ ও প্রশাসন) মহোদয়ের দপ্তরিক কাজে কর্মরত\\\r\\\n                    <\\/br>\\\r\\\n                    <a href=\"tel: 01912906587\">ফোনঃ ০১৯২২-৯০৬৫৮৭ <\\/br><\\/a>\\\r\\\n                <\\/p>\\\r\\\n            <\\/div>\\\r\\\n\\\r\\\n            <div class=\"item item-thumbnail-left item-text-wrap\">\\\r\\\n                <img src=\"\">\\\r\\\n\\\r\\\n                <p class=\"bold\">\\\r\\\n                    জনাব মোঃ ফাহীদি খান\\\r\\\n                <\\/p>\\\r\\\n\\\r\\\n                <p>\\\r\\\n                    কম্পিউটার মুদ্রাক্ষরিক কাম অফিস সহকারী\\\r\\\n                    <\\/br>\\\r\\\n                    বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষের সহকারী পরিচালক (সংগ্রহ) এর দপ্তরিক কাজে কর্মরত\\\r\\\n                    <\\/br>\\\r\\\n                    <a href=\"tel: 01556333638\">ফোনঃ ০১৫৫৬-৩৩৩৫৩৮ <\\/br><\\/a>\\\r\\\n                    <a href=\"mailto:fahedi.khan@gmail.com\">\\\r\\\n                        fahedi.khan@gmail.com\\\r\\\n                    <\\/a>\\\r\\\n                <\\/p>\\\r\\\n            <\\/div>\\\r\\\n\\\r\\\n            <div class=\"item item-divider\">\\\r\\\n                কালিয়াকৈর হাই টেক প্রজেক্ট\\\r\\\n            <\\/div>\\\r\\\n\\\r\\\n            <div class=\"item item-thumbnail-left item-text-wrap\">\\\r\\\n                <img src=\"http:\\/\\/bhtpa.portal.gov.bd\\/sites\\/default\\/files\\/files\\/bhtpa.portal.gov.bd\\/page\\/b6f9c040_fe94_45a3_a0d0_a5b44c7523d7\\/taslima.jpg\">\\\r\\\n\\\r\\\n                <p class=\"bold\">\\\r\\\n                    তাসলিমা ইসলাম\\\r\\\n                <\\/p>\\\r\\\n                <p>\\\r\\\n                    কম্পিউটার অপারেটর\\\r\\\n                    <\\/br>\\\r\\\n                    (সাপোর্ট টু ডেভেলপমেন্ট অফ কালিয়াকৈর হাই-টেক পার্ক প্রকল্প)\\\r\\\n                    <\\/br>\\\r\\\n                    বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষ\\\r\\\n                    <br>\\\r\\\n                    <a href=\"mailto: taslimaislam24@gmail.com\">\\\r\\\n                        taslimaislam24@gmail.com\\\r\\\n                    <\\/a>\\\r\\\n                <\\/p>\\\r\\\n            <\\/div>\\\r\\\n\\\r\\\n            <div class=\"item item-thumbnail-left item-text-wrap\">\\\r\\\n                <img src=\"http:\\/\\/bhtpa.portal.gov.bd\\/sites\\/default\\/files\\/files\\/bhtpa.portal.gov.bd\\/page\\/b6f9c040_fe94_45a3_a0d0_a5b44c7523d7\\/Untitled.jpg\">\\\r\\\n\\\r\\\n                <p class=\"bold\">\\\r\\\n                    জনাব হান্নান মোহাম্মদ ফরহাদ\\\r\\\n                <\\/p>\\\r\\\n                <p>\\\r\\\n                    হিসাবরক্ষক\\\r\\\n                    <\\/br>\\\r\\\n                    (সাপোর্ট টু ডেভেলপমেন্ট অফ কালিয়াকৈর হাই-টেক পার্ক প্রকল্প)বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষ\\\r\\\n                    <\\/br>\\\r\\\n                    <a href=\"tel: 01814404686\">ফোনঃ ০১৮১৪৪০৪৬৮৬ <\\/br><\\/a>\\\r\\\n                    <a href=\"mailto: hannanforhad@gmail.com\">\\\r\\\n                        hannanforhad@gmail.com\\\r\\\n                    <\\/a><\\/a>\\\r\\\n                <\\/p>\\\r\\\n            <\\/div>\\\r\\\n\\\r\\\n            <div class=\"item item-divider\">\\\r\\\n                যশোর হাই টেক প্রজেক্ট\\\r\\\n            <\\/div>\\\r\\\n\\\r\\\n            <div class=\"item item-thumbnail-left item-text-wrap\">\\\r\\\n                <img src=\"http:\\/\\/bhtpa.portal.gov.bd\\/sites\\/default\\/files\\/files\\/bhtpa.portal.gov.bd\\/page\\/b6f9c040_fe94_45a3_a0d0_a5b44c7523d7\\/rsz_passport_picture.jpg\">\\\r\\\n\\\r\\\n                <p class=\"bold\">\\\r\\\n                    দীপ্তি ইসলাম\\\r\\\n                <\\/p>\\\r\\\n\\\r\\\n                <p>\\\r\\\n                    হিসাবরক্ষক\\\r\\\n                    <\\/br>\\\r\\\n                    (যশোর সফটওয়্যার টেকনোলজি পার্ক)<br>\\\r\\\n                    বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষ\\\r\\\n                    <\\/br>\\\r\\\n                <\\/p>\\\r\\\n            <\\/div>\\\r\\\n\\\r\\\n            <div class=\"item item-thumbnail-left item-text-wrap\">\\\r\\\n                <img src=\"http:\\/\\/bhtpa.portal.gov.bd\\/sites\\/default\\/files\\/files\\/bhtpa.portal.gov.bd\\/page\\/b6f9c040_fe94_45a3_a0d0_a5b44c7523d7\\/scan0001%20%281%29.jpg\">\\\r\\\n\\\r\\\n                <p class=\"bold\">\\\r\\\n                    জনাব মোঃশরিফুল ইসলাম\\\r\\\n                <\\/p>\\\r\\\n\\\r\\\n                <p>\\\r\\\n                    কম্পিউটার অপারেটর\\\r\\\n                    <\\/br>\\\r\\\n                    (যশোর সফটওয়্যার টেকনোলজি পার্ক)\\\r\\\n                    <br>\\\r\\\n                    বাংলাদেশ হাই-টেক পার্ক কর্তৃপক্ষ\\\r\\\n                    <\\/br>\\\r\\\n                    <a href=\"tel: 0171385540\">ফোনঃ ০১৭১৩৮৬৫৫৪০ <\\/br><\\/a>\\\r\\\n                    <a href=\"tel: 01716231751\">ফোনঃ ০১৭১৬২৩১৭৫১ <\\/br><\\/a>\\\r\\\n                    <a href=\"mailto: shorifulislam177@gmail.com\">\\\r\\\n                        shorifulislam177@gmail.com\\\r\\\n                    <\\/a>\\\r\\\n                <\\/p>\\\r\\\n            <\\/div>\\\r\\\n\\\r\\\n        <\\/div>",
            "active": "1"
        }
    ]
}
