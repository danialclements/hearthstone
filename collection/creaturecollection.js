var creaturecollection = Backbone.Collection.extend({
    model: hearthcreatures
})
var hearthbasic = new creaturecollection();
$.ajax({
    dataType:'json',
    url:'http://localhost/hearthstone/script/AllSets.json',
    success: function(hsjson){
        console.log(hsjson)
        for(var i = 0 ; i<hsjson.Basic.length;i++){
          var cards = hsjson.Basic[i];
          hearthbasic.add(cards)
        }
        cardcreatureview.render();
        }   
     
  
})
