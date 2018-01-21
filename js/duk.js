$(document).ready(function () {
  $('.gallery_photo').on('click', function (event) {
    console.log(this)
    var image = $(this).attr('src')
    console.log(image)
    $('#modal-img').attr('src', image)
  })
})
