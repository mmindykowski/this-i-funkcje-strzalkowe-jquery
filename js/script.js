$(document).ready(function () {
  $("#click-button").click(function () {
    // this.style.backgroundColor = 'green';
    $(this).css("background-color", "green");
  });

  $("#click-button").click((e) => {
    $(e.target).css("color", "yellow");
  });
});
