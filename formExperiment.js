window.addEventListener( "load", function() {

    form.addEventListener( "submit", function(e) {
      e.preventDefault();
      const pi = 3.14;
      let r = document.getElementById('radius').value;
      let H = document.getElementById('height').value;
      var vol = parseInt(r)**2 * parseInt(H) * pi;
      let result = document.getElementById('result');
      if (isNaN(vol) == true){
        result.innerHTML = "Greška! Unestite broj.";
      } else {
        result.innerHTML = "V = " + vol + " m<sup>3</sup>";
      }
    });

});
