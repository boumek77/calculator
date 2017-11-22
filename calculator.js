function my_max()

  function vowel_count()

  function reverse()

  return Number(x) + Number(y);
};

function multiply(x, y){
  return Number(x) * Number(y);
};


function divide(x, y){
  return Number(x) / Number(y);
};



  function newRound() {
      var sequence = [1,2,1]; //red, green, red
      animate(sequence);
  }

  function animate(sequence) {
      var i = 0;
      var interval = setInterval(function() {
          lightUp(sequence[i]);

          i++;
          if (i >= sequence.length) {
              clearInterval(interval);
          }
     }, 600);
  }

  function lightup(tile) {
    var $tile = $('[data-tile=' + tile + ']').addClass('lit');
    window.setTimeout(function() {
        $tile.removeClass('lit');
    }, 300);

}

function playSound(tile) {
    var audio = $('<audio autoplay></audio>');
    audio.append('<source src="sounds/' + tile + '.ogg" type="audio/ogg" />');
    audio.append('<source src="sounds/' + tile + '.mp3" type="audio/mp3" />');
    $('[data-action=sound]').html(audio);
}
