angular.module('starter.controllers', [])

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function () {
            $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function () {
            $scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function () {
            console.log('Doing login', $scope.loginData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function () {
                $scope.closeLogin();
            }, 1000);
        };
    })

    .controller('AboutCtrl', function ($scope) {
        $scope.html = '<p style="font-size: 16px;text-align:justify">Bangladesh hi- tech park has been established with a view to achieve a set of specific mission and vision. The underlying mission and vision are-</p><ul style="text-align: justify; font-size: 14px; list-style: circle; padding: 10px"><li style="">To establish a world class business environment for targeted high growth industrial sector and new business</li><li style="">To develop indigenous technological capability for the development of the local industries</li><li style="">To enter into foreign markets by exporting state of the art technology products</li><li style="">Infrastructure to facilitate hassle-free industrial operation with necessary support</li></ul>'
        //$scope.
    })

    .controller('ProjectsCtrl', function ($scope) {

    })

    .controller('ProjectDetailsCtrl', function ($scope) {
        $scope.html = '<p style="text-align:justify"><span style="color:rgb(0, 128, 0)"><span style="font-size:18px"><strong>&nbsp; &nbsp;&nbsp;<u>কালিয়াকৈর হাই- টেক পার্ক</u></strong></span></span></p> <p style="text-align:justify">&nbsp;</p> <p style="text-align:justify">The Government of Bangladesh has declared &lsquo;Vision 2021&rsquo; with a target to make Bangladesh as a middle income country using Information and Communication Technology (ICT) and development of favorable business environment for innovative companies. Information Technology has been identified as the &ldquo;thrust sector&rdquo; for the economy of Bangladesh. Government has taken various initiatives to achieve the target. Among them conducive business environment for Hi-Tech Industries is mentionable. So, Information and Technology (IT) Village / Software Technology Park (STP) in divisional level will be one of the important and priority projects which would be the milestone for the development of IT sector as well as industrialization in Bangladesh. To fasten up the economic development of the country, Bangladesh Hi-Tech Park Authority (BHTPA) was established in 2010. Bangladesh Hi-Tech Park Authority (BHTPA) is responsible for the establishment and expansion along with management, operation and development of Hi-Tech Parks within the country. Hi-Tech parks are being developed in different areas with a purpose to provide adequate infrastructure support services to create an environment well organized for development of need-based industries. Kailakoir Hi-Tech Park is the first state-level Hi-Tech Park initiated by the government.</p> <table border="" cellpadding="0" cellspacing="0" style="color:rgb(0, 0, 0); font-family:arial,sans-serif; font-size:small; line-height:normal"> <tbody> <tr> <td style="width:338px"> <p style="text-align:justify"><img alt="" src="http://bhtpa.portal.gov.bd/sites/default/files/files/bhtpa.portal.gov.bd/page/ef44e2ae_41b3_48bb_8c98_8cf3e1603160/001.jpg" style="height:324px; width:449px" /></p> </td> <td style="width:346px"> <p style="text-align:justify"><img alt="" src="http://bhtpa.portal.gov.bd/sites/default/files/files/bhtpa.portal.gov.bd/page/ef44e2ae_41b3_48bb_8c98_8cf3e1603160/002.jpg" style="height:325px; width:467px" /></p> </td> </tr> </tbody> </table> <p style="text-align:justify">&nbsp;</p> <p style="text-align:justify">&nbsp;Kaliakoir hi-tech park is the first ever hi-tech park in Bangladesh, located at kaliakoir upazilla in Gazipur district, only 40 km. north from Dhaka city which total area of land is 232 acre. Additional 100 acres of adjacent Government land is under processing to be included with the Park. The park will be considered as specialized economic zone (SEZ) to attract foreign and local investors where they could utilize vast potential of young educated and technically skilled work force. Eventually country&rsquo;s economy will be substantially augmented by increasing foreign exchange. To establish a world class business environment and to enrich the facilities the SDKHTP has been taken up at the cost of BDT 23,698.81 lakh.</p> <p style="text-align:justify">&nbsp;</p> <table border="1" cellpadding="1" cellspacing="1" style="color:rgb(0, 0, 0); font-family:arial,sans-serif; font-size:small; line-height:normal; width:500px"> <tbody> <tr> <td>&nbsp;</td> <td>&nbsp;</td> </tr> <tr> <td><img alt="" src="http://bhtpa.portal.gov.bd/sites/default/files/files/bhtpa.portal.gov.bd/page/ef44e2ae_41b3_48bb_8c98_8cf3e1603160/05.jpg" style="height:316px; width:447px" /></td> <td><img alt="" src="http://bhtpa.portal.gov.bd/sites/default/files/files/bhtpa.portal.gov.bd/page/ef44e2ae_41b3_48bb_8c98_8cf3e1603160/06.jpg" style="height:319px; width:454px" /></td> </tr> <tr> <td>&nbsp;</td> <td>&nbsp;</td> </tr> <tr> <td><img alt="" src="http://bhtpa.portal.gov.bd/sites/default/files/files/bhtpa.portal.gov.bd/page/ef44e2ae_41b3_48bb_8c98_8cf3e1603160/03.jpg" style="height:289px; width:450px" /></td> <td> <p style="text-align:justify"><img alt="" src="http://bhtpa.portal.gov.bd/sites/default/files/files/bhtpa.portal.gov.bd/page/ef44e2ae_41b3_48bb_8c98_8cf3e1603160/04.jpg" style="height:292px; width:453px" /></p> </td> </tr> <tr> <td>&nbsp;</td> <td>&nbsp;</td> </tr> </tbody> </table> <p style="text-align:justify">&nbsp;</p> <p style="text-align:justify"><strong>Area and Block-wise Distribution:</strong></p> <p style="text-align:justify">The total area of Kaliakoir divided into 5 blocks. The Block-1 is for administrative and residential purpose and other blocks are to be industrial zones.</p> <table align="center" border="" cellpadding="0" cellspacing="0" style="color:rgb(0, 0, 0); font-family:arial,sans-serif; font-size:small; line-height:normal"> <tbody> <tr> <td style="width:182px"> <p style="text-align:justify">Bloc and Areas (232 acres)</p> </td> <td style="width:483px"> <p style="text-align:justify">Purpose</p> </td> </tr> <tr> <td style="width:182px"> <p style="text-align:justify">Block- 1 (65 acres)</p> </td> <td style="width:483px"> <p style="text-align:justify">Residential facility, recreation facility, Educational institute, Training institute, Landing station, Hospital, Dormitory, Solid waste Management plant, Custom, Fire Services, Shopping mall, Parking.</p> </td> </tr> <tr> <td style="width:182px"> <p style="text-align:justify">Block- 2 (62 acres)</p> </td> <td style="width:483px"> <p style="text-align:justify">For different Kind of Industries Including MTB (IT/ITES), Hotel cum Convention Centre.</p> </td> </tr> <tr> <td style="width:182px"> <p style="text-align:justify">Block- 3 (40 acres)</p> </td> <td style="width:483px"> <p style="text-align:justify">Different Industries</p> </td> </tr> <tr> <td style="width:182px"> <p style="text-align:justify">Block- 4 (36 acres)</p> </td> <td style="width:483px"> <p style="text-align:justify">Different Industries with a Helipad.</p> </td> </tr> <tr> <td style="height:25px; width:182px"> <p style="text-align:justify">Block- 5 (29 acres)</p> </td> <td style="height:25px; width:483px"> <p style="text-align:justify">Different Industries including Bi- Tech</p> </td> </tr> </tbody> </table> <div style="color: rgb(0, 0, 0); font-family: arial, sans-serif; font-size: small; line-height: normal; clear: both; text-align: justify;">&nbsp;</div> <p style="text-align:justify">&nbsp;</p> <table border="" cellpadding="0" cellspacing="0" style="color:rgb(0, 0, 0); font-family:arial,sans-serif; font-size:small; line-height:normal"> <tbody> <tr> <td style="width:367px"> <p style="text-align:justify"><strong>Objectives of the&nbsp;</strong><strong>SDKHTP</strong><strong>&nbsp;project</strong></p> </td> <td style="width:318px"> <p style="text-align:justify"><strong>Important Component of the Project</strong></p> </td> </tr> <tr> <td style="width:367px"> <ol style="list-style-type:lower-roman"> <li style="text-align:justify">to create a world-class business environment for establishing ICT and other knowledge-based advance hi-tech&nbsp; industries in the parks;</li> <li style="text-align:justify">to develop landmark physical facilities which will attract leading ICT companies in the parks;</li> <li style="text-align:justify">to engage an internationally renowned private Park Developer (s) , on a PPP basis, for development of necessary infrastructural facilities, operate and management.</li> <li style="text-align:justify">to develop appropriate training modules for public and private sector;</li> <li style="text-align:justify">to help develop sustainable technology and firm-level innovation; and</li> <li style="text-align:justify">to provide capacity building support for hi-tech park related institutions, private sector IT/IT Enabled services companies, IT/ITES Association members, skills development training, Freelancers training enabling improved and&nbsp; enhanced business environment with increased opportunities for growth</li> </ol> </td> <td style="width:318px"> <ul> <li style="text-align:justify">Construction Alternate Road of Kaliakoir Hi-tech park for the use of the people</li> <li style="text-align:justify">Construction Internal Access Road with drain&nbsp; of Kaliakoir Hi-tech park</li> <li style="text-align:justify">Construction Multi Tenant Building(MTB) in Jessore Software Technology Park</li> <li style="text-align:justify">Construction IT Business Incubator centre&nbsp; in CUET</li> <li style="text-align:justify">Site/ Land Development of Sylhet Electronic City</li> <li style="text-align:justify">Sewerage system, water supply&nbsp; waste management, electric works&nbsp; &amp; Gas connection in Kaliakoir Hi-tech park</li> <li style="text-align:justify">Human Resource Development for IT/ITES</li> <li style="text-align:justify">Capacity Development of IT/ITES sector</li> <li style="text-align:justify">Appointment of Consultancy services for the project</li> <li style="text-align:justify">Training, Workshop and study tour</li> <li style="text-align:justify">Establishment of laboratory in BITM &amp; other universities of the country.</li> </ul> </td> </tr> </tbody> </table> <p style="text-align:justify">&nbsp;</p> <p style="text-align:justify">&nbsp;</p> <table border="" cellpadding="0" cellspacing="0" style="color:rgb(0, 0, 0); font-family:arial,sans-serif; font-size:small; line-height:normal"> <tbody> <tr> <td style="height:25px; width:247px"> <p style="text-align:justify"><strong>The Target Industries:</strong></p> </td> <td style="height:25px; width:216px"> <p style="margin-left:-45.9pt; text-align:justify"><strong>Existing Service &amp; Facilities:</strong></p> </td> <td style="height:25px; width:207px"> <p style="text-align:justify"><strong>Upcoming service/facilities:</strong></p> </td> </tr> <tr> <td style="width:247px"> <ul> <li style="text-align:justify">Computer hardware</li> <li style="text-align:justify">Computer software</li> <li style="text-align:justify">Communication hardware/ software</li> <li style="text-align:justify">IT Enabled service</li> <li style="text-align:justify">Design and consultancy</li> <li style="text-align:justify">Bioinformatics</li> <li style="text-align:justify">Human resource development institute</li> <li style="text-align:justify">Manufacturing and assembling products</li> <li style="text-align:justify">Design of electronic products</li> <li style="text-align:justify">New and advanced materials</li> <li style="text-align:justify">Automobile and metal industries</li> <li style="text-align:justify">Agro bio technology</li> <li style="text-align:justify">Genetic engineering etc</li> </ul> </td> <td style="width:216px"> <ul> <li style="text-align:justify">Basic Facilities available</li> <li style="text-align:justify">Electric Sub- station</li> <li style="text-align:justify">Fiber optic connectivity (24 core)</li> <li style="text-align:justify">Telephone Sub exchange capacity with 1000 lines, which is extendable up to 3000</li> <li style="text-align:justify">Administrative building with 30,000 sq feet floor space</li> <li style="text-align:justify">Water pump for supply of ground water</li> <li style="text-align:justify">Electricity and gas connection</li> </ul> </td> <td style="width:207px"> <ul> <li style="text-align:justify">Water Treatment Plant</li> <li style="text-align:justify">Integrated Solid Waste Management Plant</li> <li style="text-align:justify">School</li> <li style="text-align:justify">Shopping Mall</li> <li style="text-align:justify">Training Centre</li> <li style="text-align:justify">Fire Station</li> <li style="text-align:justify">Hospital</li> <li style="text-align:justify">Custom Facility</li> <li style="text-align:justify">Hotel cum Convention Centre</li> <li style="text-align:justify">Gymnasium &amp; Swimming Pool</li> <li style="text-align:justify">Car Parking &amp; Helipad</li> </ul> <p style="text-align:justify">&nbsp;</p> </td> </tr> </tbody> </table>';
    })

    .controller('PlaylistsCtrl', function ($scope) {
        $scope.playlists = [
            {title: 'Reggae', id: 1},
            {title: 'Chill', id: 2},
            {title: 'Dubstep', id: 3},
            {title: 'Indie', id: 4},
            {title: 'Rap', id: 5},
            {title: 'Cowbell', id: 6}
        ];
    })

    .controller('PlaylistCtrl', function ($scope, $stateParams) {
    });