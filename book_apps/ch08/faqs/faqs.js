"use strict";
$(document).ready(function() {
  $("div:parent").parent().find("#last_name").text("killed");
    $("#faqs h2").click(function(evt) {
        $(this).toggleClass("minus");
        if ($(this).attr("class") !== "minus") {
            $(this).next().hide();
        }
        else {
            $(this).next().show();
        }
        evt.preventDefault();
    }); // end click
    $("#faqs").find("a:first").focus();
}); // end ready
