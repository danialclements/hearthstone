var cardcounter = 0;
var buttoninfo = cardcounter + '/30' + ' Cards in Deck';
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
          user = response.authResponse;
      // Logged into your app and Facebook.
      testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '1503124873275231',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.1' // use version 2.1
  });

  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
    console.log(response.authResponse.accessToken);
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
         userinfo = JSON.stringify(response);
         userobject = jQuery.parseJSON( userinfo );
    var usernav = Backbone.Model.extend({
      defaults:{
      id:'',
      email:'',
      first_name:'',
      gender:'',
      last_name:'',
      link:'',
      locale:'',
      name:'',
      timezone:'',
      update_time:'',
      verified:'',
      createdeck:'create deck'
    }
    })
    loginobject = new usernav(userobject)
    var usernavview = Backbone.View.extend({
      el: '#usernavbar',
      initialize: function(){
        this.render()
      },
      events:
      {
       'click .createdeckbutton': 'createdeckhandler'
      },
      createdeckhandler: function(){
        console.log('helo')
        $('#status').empty();
        $('.createdeckbutton').empty();
        console.log(buttoninfo)
        $('<p>'+buttoninfo+'</p>').appendTo('.createdeckbutton')

      },
      render: function(){
        this.$el.html(this.template(this.model.toJSON()));
      },
      template:_.template($("#usernavtemplate").html())
  })        
  var usernavview1 = new usernavview({
        model: loginobject
  })
         usernavview1.render();
  });
}
