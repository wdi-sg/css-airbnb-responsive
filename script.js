window.onload = function() {
  var button = document.querySelectorAll('.btn-further');

  button[0].addEventListener('click', function() {
    alert("This feature is not ready yet");
  });

  button[1].addEventListener('click', function() {
    alert("This feature is not ready yet");
  });

  var sf = document.getElementById('SF');
  var sf2 = document.getElementById('SF2');
  var ny = document.getElementById('NY');
  var london = document.getElementById('London');
  var napa = document.getElementById('Napa');
  var sonoma = document.getElementById('Sonoma');

  sf.addEventListener('click', function() {
    window.open("https://www.google.com.sg/maps/place/San+Francisco,+CA,+USA/@37.7576792,-122.5078119,12z/data=!3m1!4b1!4m5!3m4!1s0x80859a6d00690021:0x4a501367f076adff!8m2!3d37.7749295!4d-122.4194155?hl=en")
  })

  sf2.addEventListener('click', function() {
    window.open("https://www.google.com.sg/maps/place/San+Francisco,+CA,+USA/@37.7576792,-122.5078119,12z/data=!3m1!4b1!4m5!3m4!1s0x80859a6d00690021:0x4a501367f076adff!8m2!3d37.7749295!4d-122.4194155?hl=en")
  })

  ny.addEventListener('click', function() {
    window.open("https://www.google.com.sg/maps/place/New+York,+NY,+USA/@40.6971477,-74.2605558,10z/data=!3m1!4b1!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728?hl=en")
  })

  london.addEventListener('click', function() {
    window.open("https://www.google.com.sg/maps/place/London,+UK/@51.5283063,-0.3824662,10z/data=!3m1!4b1!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5073509!4d-0.1277583?hl=en")
  })

  napa.addEventListener('click', function() {
    window.open("https://www.google.com.sg/maps/place/Napa,+CA,+USA/@38.2859416,-122.3601704,12z/data=!3m1!4b1!4m5!3m4!1s0x8084ffe7f8f2deef:0xd6629f3a3384c725!8m2!3d38.2975381!4d-122.286865?hl=en")
  })

  sonoma.addEventListener('click', function() {
    window.open("https://www.google.com.sg/maps/place/Sonoma,+CA+95476,+USA/@38.291092,-122.4666091,14z/data=!3m1!4b1!4m5!3m4!1s0x8085ac43817b9d77:0x380ed210ee6e045!8m2!3d38.291859!4d-122.4580356?hl=en")
  })
};
