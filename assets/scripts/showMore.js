function enableProjectDescAnimations() {
  // var projectDesc = $(".project-desc");
  // projectDesc.click(function() {
  //   $(this).toggleClass('show');
  // });

  // stop links inside projects from triggering the toggleClass
  $(".project-desc a").click(function(e){
    e.stopPropagation();
  });

  var project = $(".project");
  project.click(function() {
    $(this).siblings().find(".project-desc").removeClass("show");
    $(this).find(".project-desc").toggleClass('show');

    $(this).siblings().find(".project-thumb > img").removeClass("dim");
    $(this).find(".project-thumb > img").toggleClass('dim');

  });

  $("body").click(function(e) {
    if ($(e.target).parents(".project-thumb").length == 0) {
      $(".project-desc").removeClass('show');
      $(".project-thumb > img").removeClass("dim");
    }    
  });
}
