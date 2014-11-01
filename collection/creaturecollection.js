var creaturecollection = Backbone.Collection.extend({
    model: hearthcreatures,
    
})
var hearthbasic = new creaturecollection();
var groups = {'Hunter':[],'Druid':[],'Mage':[],'Shaman':[],'Rogue':[], 'Priest':[],'Warlock':[],'Warrior':[],'Rogue':[]}
$.ajax({
    dataType:'json',
    url:'http://localhost/hearthstone/script/AllSets.json',
    success: function(hsjson){
        for(var i = 0 ; i<hsjson.Basic.length;i++){
          var cards = hsjson.Basic[i];
          hearthbasic.add(cards)
          var cardClass = hearthbasic.models[i].attributes['playerClass'];
          if(!(cardClass in groups)){
            groups[cardClass] = [];
          }
            groups[cardClass].push(hearthbasic.models[i])


           //console.log('blah')
         
            
        
        cardcreatureview.render();
         
      }  
      function createCollection(){
        $.each(groups, function(key,value){
          console.log(groups[key])
            key = new creaturecollection();
            key.add(groups[key])
           
        })
      }
      createCollection()
    }
})


//comperator ,    