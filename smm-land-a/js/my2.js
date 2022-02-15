


$(function(){
$('.timer').each(function(){
  let timerDate = $(this).data('date')


  $(this).countdown(timerDate, function(event) {
    let hoursArr = event.strftime( '%H' ).split('')
    let minutesArr = event.strftime( '%M' ).split('')
    let secondsArr = event.strftime( '%S' ).split('')

    $(this).html( event.strftime(String()
    
      + '<div class="item">'
        + '<div class="val"><span>'+hoursArr[0]+'</span><span>'+hoursArr[1]+'</span></div>'
        + '<div>часов</div>'
      + '</div>'

      + '<div class="item">'
        + '<div class="val"><span>'+minutesArr[0]+'</span><span>'+minutesArr[1]+'</span></div>'
        + '<div>минут</div>'
      + '</div>'

      + '<div class="item">'
        + '<div class="val"><span>'+secondsArr[0]+'</span><span>'+secondsArr[1]+'</span></div>'
        + '<div>секунд</div>'
      + '</div>'
      ) )
  })
});
})      


