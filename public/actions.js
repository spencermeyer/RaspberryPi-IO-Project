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