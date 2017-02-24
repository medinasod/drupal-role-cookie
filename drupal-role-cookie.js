var drupalRoleCookie = {
  onReady: function () {
    // Check to see if the user is on the dashboard page.
    var isDash = document.querySelector('#user-panel');
    // Only apply cookie on this page.
    if (isDash !== null) {
      // Set the cookie expire date
      var now = new Date();
      var time = now.getTime();
      var expireTime = time + 3600 * 1000 * 24 * 30; // One month.
      now.setTime(expireTime);
      // Get the <body>.
      var body = document.getElementsByTagName("BODY")[0];
      // Get all the class attributes.
      var list = body.classList;
      var roles = '';
        // Look for the roles you want to segment.
        list.forEach(function (role) {
          if (role.search('student') !== -1) {
            roles += role + " ";
          }
          if (role.search('faculty') !== -1) {
            roles += role + " ";
          }
          if (role.search('employee') !== -1) {
            roles += role + " ";
          }
        });
        // Apply the cookie if the user has the roles you're looking for.
        if (roles !== '') {
          document.cookie = 'drupal_roles=' + roles + ';domain=example.com;expires=' + now.toGMTString();
        }
      }  // End of if statement.
  } // End of onReady.
};

// Call drupalRoleCookie when the document is loaded.
document.addEventListener("DOMContentLoaded", function() {
  drupalRoleCookie.onReady();
});
