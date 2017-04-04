app.directive('showTime', function () {
  return {
    restrict: 'E',
    template: "<div> The current time is {{time}}</div>",
    link: function (s, e, a) {
      var currentTime = new Date()
      s.time = currentTime.toString();
    }
  }
})
