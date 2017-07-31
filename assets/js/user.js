var user;
var firstname;

function parseURLParams(url) {
  var queryStart = url.indexOf("#") + 1,
  queryEnd  = url.length + 1,
  query = url.slice(queryStart, queryEnd - 1),
  pairs = query.replace(/\+/g, " ").split("&"),
  parms = {}, i, n, v, nv;

  if (query === url || query === "") return;

  for (i = 0; i < pairs.length; i++) {
    nv = pairs[i].split("=", 2);
    n = decodeURIComponent(nv[0]);
    v = decodeURIComponent(nv[1]);

    if (!parms.hasOwnProperty(n)) parms[n] = [];
    parms[n].push(nv.length === 2 ? v : null);
  }
  return parms;
}

$(document).load(function(){
  var urlString = window.location.href;
  urlParams = parseURLParams(urlString);
    alert(status);
  if(urlParams != null) {
    $.get("https://my.mlh.io/api/v2/user.json?access_token="+urlParams.access_token,function(data,status){
      user = data;
      // status=stat;
      if (status == "success") {
        firstname=user.data.first_name;
        document.querySelector('#thanks').innerHTML = "Thank you for signing up, " + user.data.first_name + "! We're looking forward to seeing you!";
        throw '';
      }
    });
    document.querySelector('#sign-up').innerHTML = "Haven't signed up? <small>We can change that.</small>";
    document.querySelector('#thanks').innerHTML = "Sign up <a href=''>here</a> today.";
    // alert(status);
  }
});


// $(document).load(function() {
//   alert('test');
//   setTimeout(function() {
//     alert('test2');
//   },1000);
//   alert('test3');
// });


// function test() {
//   alert(status);
//   if (status == "success") {
//     firstname=user.data.first_name;
//     document.querySelector('#thanks').innerHTML = "Thank you for signing up, " + user.data.first_name + "! We're looking forward to seeing you!";
//   } else {
//     document.querySelector('#sign-up').innerHTML = "Haven't signed up? <small>We can change that.</small>";
//     document.querySelector('#thanks').innerHTML = "Sign up <a href=''>here</a> today.";
//   }
}
