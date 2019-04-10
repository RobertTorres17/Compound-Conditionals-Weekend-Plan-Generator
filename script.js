
function whatToDo(dayOfWeek, weather) {
    //Create a compound conditional statement below. 
        var day = dayOfWeek;
        var weather2 = weather;
           if (day === "Saturday" && weather2 === "Sunny"){
            $("p").text("I'll go for a bike ride");
        }else if (day === "Saturday" && weather2 === "Cloudy"){
            $("p").text("I'll binge watch Netflix");
        }else if (day === "Sunday" && weather2 === "Sunny"){
            $("p").text("I'll go to the park");
        }else if (day === "Sunday" && weather2 === "Cloudy"){
            $("p").text("I'll binge watch Hulu");
        }else{
            $("p").text("Otherwise, I'll stay inside");
        }
    //These three lines will have to be used in the conditional statement. Feel free to re-arrange.

} 

$("button").click(function(){
    var dayOfWeek = $("#dayOfWeek").val();
    var weather = $("#weather").val();
    whatToDo(dayOfWeek, weather);
        });    
        