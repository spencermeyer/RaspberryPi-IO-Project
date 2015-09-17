$( document ).ready(function() {
  console.log( "ready!" );

  document.getElementById("btn1").addEventListener("click", function(){
    console.log("button 1 clicked");
    //gpio.open(16, "output", function(err) {     // Open pin 16 for output 
    //    gpio.write(16, 1, function() {          // Set pin 16 high (1) 
    //        gpio.close(16);                     // Close pin 16 
    //    });
    //});
  // first find the current state of the output
  var stateOne = document.getElementById("btn1").innerHTML
  // Now toggle the state of the output when clicked
  if(stateOne=="Channel 1 OFF"){
    console.log(stateOne);
    document.getElementById("btn1").innerHTML="Channel 1 ON";
    document.getElementById("btn1").className="btn btn-success btn-lg";
    stateOne="Channel 1 ON";
    console.log(stateOne);
  }
  else{
    document.getElementById("btn1").innerHTML="Channel 1 OFF";
    document.getElementById("btn1").className="btn btn-danger btn-lg";
  }

  
});


});