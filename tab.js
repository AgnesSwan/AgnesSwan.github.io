$('.tab-list button').click(function (event) {
  event.preventDefault();
  var id = this.id;
  //usuniecie klasy active po kliknieciu na link
  $('.active').removeClass('active');
  //dodanie klasy active do linku, że zmieni podświetlenie w zaleznosci od aktywności
  $(this).addClass('active');
  //dodanie klasy active
  $('.' + id).addClass('active');
  //
});