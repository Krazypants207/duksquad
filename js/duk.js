$(document).ready(function () {
  $('.gallery_photo').on('click', function (event) {
    var image = $(this).attr('src')

    $('#modal-img').attr('src', image)
  })

  $('.dropdown-toggle').on('click', function (e) {

    var id = $(this).attr('id')
    var route = 'https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=' + id + '&key=AIzaSyDiWtUOMzwnO32DZBa2y4Sozq9SPPWCoFs'
    var request = $.ajax({
      url: route,
      method: 'GET'
    })
    $('.description').empty()
    $('.channel-name').empty()
    request.done(function (response) {
      $('.description').append(response.items[0].snippet.description)
      $('.channel-name').append(response.items[0].snippet.title)
    })
  })
})
