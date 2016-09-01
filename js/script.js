var NAME;
var client = mqtt.connect();

$(document).ready(function(){
  $('#showModal').show();
});

$('#go').on('click', function() {
  $('#showModal').hide();
  NAME = $('#name')[0].value;
})

$('#seguir').on('click', function() {
  var user = $('#user')[0].value;
  client.subscribe(user);
  var sucess = `
  <div class="ui success messagefollow">
    <i class="close icon"></i>
    <p>Você está seguindo ${user}</p>
  </div>`;
  $('#follow').prepend(sucess);
})
$('#publicar').on('click', function() {
  var mensagem = $('#msg')[0].value;
  client.publish(NAME, mensagem);
  var sucess = `
  <div class="ui success messagepush">
    <i class="close icon"></i>
    <p>Mensagem enviada com sucesso</p>
  </div>`;
  $('#push').prepend(sucess);
})

client.on("message", function(topic, payload) {
  console.log(topic,payload);
  var alert = `
    <div class="ui info message">
      <i class="close icon"></i>
      <ul class="list">
        <li>        <strong>${topic}</strong> ${payload}</li>
      </ul>
    </div>`;
  $('#message').append(alert)
  client.end();
});

// Alert close
$('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade')
    ;
  })
;
$('.messagefollow .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade')
    ;
  })
;
$('.messagepush .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade')
    ;
  })
;
