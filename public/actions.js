$( document ).ready(function() {
  for (var i=1; i<3.5; i++) {
    console.log(" and in the loop i is: ",String(i));
    document.getElementById("btn"+String(i)).addEventListener("click", getClickFunction(i),false);
  };  // this closes the for loop
});   // this closes the doc ready

   function getClickFunction(j){
      return function(){
        console.log("a call to getClickFunction"+j);
        console.log("button "+j+" clicked");
        var gpioPin = j+15;
        // Now toggle the state of the output when clicked
        if(document.getElementById("btn"+String(j)).innerHTML=="Channel "+j+" OFF"){
          console.log("going into the switch on loop for channel "+j);
          document.getElementById("btn"+j).innerHTML="Channel "+j+" ON";
          document.getElementById("btn"+j).className="btn btn-success btn-lg";
          // gpio.open(gpioPin, "output", function(err){
          //  gpio.write(gpioPin,1,function(){
          // gpio.close(gpioPin);  
          //})  
          //})
        }
        else{
          console.log("going into the switch off loop");
          document.getElementById("btn"+j).innerHTML="Channel "+j+" OFF";
          document.getElementById("btn"+j).className="btn btn-danger btn-lg";
          //gpio.close(gpioPin);
        }
    }
}





