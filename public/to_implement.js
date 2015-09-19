//gpio.open(16, "output", function(err) {     // Open pin 16 for output 
//    gpio.write(16, 1, function() {          // Set pin 16 high (1) 
//        gpio.close(16);                     // Close pin 16 
//    });
//});


// WORKING ON A SINGLE BUTTON:

$( document ).ready(function() {

  // for (i=1; i<3.5; i++) {

  document.getElementById("btn1").addEventListener("click", function(){
      console.log("button 1 clicked");

  // Now toggle the state of the output when clicked
    if(document.getElementById("btn1").innerHTML=="Channel 1 OFF"){
      console.log("going into the switch on loop");
      document.getElementById("btn1").innerHTML="Channel 1 ON";
      document.getElementById("btn1").className="btn btn-success btn-lg";
    }
    else{
      console.log("going into the switch off loop");
      document.getElementById("btn1").innerHTML="Channel 1 OFF";
      document.getElementById("btn1").className="btn btn-danger btn-lg";
    }
});

//the for loop}

});

// LOOP DOESN'T WORK

$( document ).ready(function() {
  i=1
  while(i<3.5) {
    console.log(" and at the start of the loop i is=",String(i));
    document.getElementById("btn"+String(i)).addEventListener("click", function(){
       console.log(" and at the get elements i is=",String(i));
        console.log("button "+i+" clicked");

      // Now toggle the state of the output when clicked
      if(document.getElementById("btn"+String(i)).innerHTML=="Channel "+i+" OFF"){
        console.log("going into the switch on loop for channel "+i);
        document.getElementById("btn"+i).innerHTML="Channel "+i+" ON";
        document.getElementById("btn"+i).className="btn btn-success btn-lg";
      }
      else{
        console.log("going into the switch off loop");
        document.getElementById("btn"+i).innerHTML="Channel "+i+" OFF";
        document.getElementById("btn"+i).className="btn btn-danger btn-lg";
      }
    });
    i += 1;
  }
});













