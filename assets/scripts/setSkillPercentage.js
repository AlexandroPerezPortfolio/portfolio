function setSkillPercentage() {
  $(".percentage").each(function(){
    var percentage = $(this).data("percentage");
    $(this).html("<span style='width:" + percentage + "%'>" + percentage + "%</span>");
  });
}
