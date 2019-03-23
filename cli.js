// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for
// User input
var finder = require('./search');
const SEARCH_ACTOR_COMMAND = "actor";
const SEARCH_SHOW_COMMAND = "show";

var actorPromise;
var showPromise;





//check for command viability
var command = process.argv[2];
if(command !== SEARCH_ACTOR_COMMAND && command !== SEARCH_SHOW_COMMAND){
    return inputErrorMessage();
}else{
    console.log("This works");
    var commandVar = getUserVar();
    if(commandVar !== undefined){
        switch (command) {
            case SEARCH_ACTOR_COMMAND:
                actorPromise = finder.searchActor(unPackCommandVar(commandVar));
                actorPromise
                .then(function (response) {
                    console.log(response.data);
        
            // var data = response.data;
            // data.forEach(element => {
            //     console.log("Venue Name: "+element.venue.name);
            //     console.log("Venue City: "+element.venue.city);
            //     var date =  moment(element.datetime).format('MM-DD-YYYY');
            //     console.log("Event Date: "+ date);
            //     console.log("<--------------------------------------------->");
            //});   
                })
                .catch(function (error) {
                    console.log(error);
                });
            
                
                break; 
            case SEARCH_SHOW_COMMAND:
                showPromise = finder.searchShow(unPackCommandVar(commandVar));
                showPromise
                    .then(function (response) {
                        console.log(response.data);
                    
                        // var data = response.data;
                        // data.forEach(element => {
                        //     console.log("Venue Name: "+element.venue.name);
                        //     console.log("Venue City: "+element.venue.city);
                        //     var date =  moment(element.datetime).format('MM-DD-YYYY');
                        //     console.log("Event Date: "+ date);
                        //     console.log("<--------------------------------------------->");
                        //});   
                        })
                    .catch(function (error) {
                        console.log(error);
                    });
                break; 
            
            default: 
            
        }
    }else{
        inputErrorMessage();
    }
 }

function getUserVar(){
    var userVarArray =[];
    if(process.argv.length > 3){
        for(var i = 3;i < process.argv.length;i++){
          userVarArray.push(process.argv[i]);
        }
        return userVarArray;
    }
}
function unPackCommandVar(commandArray){
    var commandString = "";
    if(commandArray.length > 1){
        for(var i = 0; i < commandArray.length;i++){
            if(i == commandArray.length -1){
                commandString += commandArray[i];
            }else{
                commandString += commandArray[i] + "+";
            }
        }
    }else{
        console.log(commandString);
        commandString += commandArray[0];
    }
    return commandString;
  }

  function inputErrorMessage(){
    return console.log("Sorry, I don't know that command means. \nPlease use: \nnode cli.js actor <actor's name> \nor \nnode cli.js show <show's name>");

  }
