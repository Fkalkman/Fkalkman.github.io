$(function () {
  var prices = {
    Wit: "850,-",
    Zwart: "894,95",
    Rood: "869,-",
    Groen: "909,-",
    Blauw: "894,95",
  };

  $("#select_color").change(function (iets) {
    var selected_color = $("#select_color option:selected").text();
    var price = prices[selected_color];
    $("#price").text(price);
  });
});
