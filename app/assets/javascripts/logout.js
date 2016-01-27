angular.module('orderApp')
  .controller('LogoutCtrl', function($auth) {
    if (!$auth.isAuthenticated()) {
        return;
    }
    $auth.logout()      
  });
