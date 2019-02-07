var chaines = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "squeezielive"];
var table = "";

function getDataClassic(){
  for (i = 0;i<chaines.length;i++){
    $.ajax({
      url: "https://wind-bow.glitch.me/twitch-api/channels/"+chaines[i],
      Accept: "application/json",
      success: function(data){
        if (data.status == null){
          table+=("<tr class='deconnecte'><td><a target='_blank' href='"+data.url+"'><img src='"+data.logo+"' height=70px style='border-radius: 30px;'/></a></td><td>"+data.display_name+"</td><td style='color: red;'>DECONNECTE</td></tr>");
        }
        else{
          var monStatut = data.status;
          table+=("<tr class='connecte'><td><a target='_blank' href='"+data.url+"'><img src='"+data.logo+"' height=70px style='border-radius: 30px; border: 4px solid grey;'/></a></td><td>"+data.display_name+"</td><td>"+monStatut+"</td></tr>");
        }
        $("table").html(table);
      }
    });     
  }
}

function getDataOnline(){
  for (i = 0;i<chaines.length;i++){
    $.ajax({
      url: "https://wind-bow.glitch.me/twitch-api/channels/"+chaines[i],
      Accept: "application/json",
      success: function(data){
        if (data.status != null){
          var monStatut = data.status;
          table+=("<tr class='connecte'><td><a target='_blank' href='"+data.url+"'><img src='"+data.logo+"' height=70px style='border-radius: 30px; border: 4px solid grey;'/></a></td><td>"+data.display_name+"</td><td>"+monStatut+"</td></tr>");
        }
        $("table").html(table);
      }
    });     
  }
}

function getDataOffline(){
  for (i = 0;i<chaines.length;i++){
    $.ajax({
      url: "https://wind-bow.glitch.me/twitch-api/channels/"+chaines[i],
      Accept: "application/json",
      success: function(data){
        if (data.status == null){
            table+=("<tr class='deconnecte'><td><a target='_blank' href='"+data.url+"'><img src='"+data.logo+"' height=70px style='border-radius: 30px;'/></a></td><td>"+data.display_name+"</td><td style='color: red;'>DECONNECTE</td></tr>");
        }
        $("table").html(table);
      }
    });     
  }
}

$("document").ready(function(){
  getDataClassic();
  
  document.getElementById("btnAll").onclick = function(){
    table = "";
    getDataClassic();
  }
  document.getElementById("btnOnline").onclick = function(){
    table = "";
    getDataOnline();
  }
  document.getElementById("btnOffline").onclick = function(){
    table = "";
    getDataOffline();
  }
})