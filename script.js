$(document).ready(function(){
    $("#currentDay").text(moment().format("MMMM DD YYYY"))
hourchanger()

    var timeBlocksContainer = $(".time-block");


    var workHours = ["9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM"];
var textarea = $(".description").val
   

function hourchanger(){
var current = moment().hours();
console.log(current)
timeBlocksContainer.each(function(){
    var htmltime = parseInt($(this).attr("id"))

  if (current>htmltime){
      $(this).addClass("past")
  }  
})

}



})