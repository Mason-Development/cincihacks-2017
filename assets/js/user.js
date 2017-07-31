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

window.addEventListener("load", function(){
  var urlString = window.location.href;
  urlParams = parseURLParams(urlString);
  // alert(urlParams.access_token);
  $.get("https://my.mlh.io/api/v2/user.json?access_token="+urlParams.access_token, function(data){
    // alert(data.data.first_name);
    var fname = $("#fname");
    var firstname=data.data.first_name;
    fname.value = firstname;
    // alert(fname.innerHTML);

  });

});;
