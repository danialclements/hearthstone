
var creaturecollection = Backbone.Collection.extend({
    model: hearthcreatures,
    
    initialize: function(){
     
    }

    
})

var hearthbasic = new creaturecollection();
var groups = {'Hunter':[],'Druid':[],'Mage':[],'Shaman':[],'Rogue':[], 'Priest':[],'Warlock':[],'Warrior':[],'Neutral':[],'All':[]}
console.log(groups['Hunter'])
function createCollection(){
            $.each(groups, function(key,value){
              console.log(groups[key])
            groups[key] = new creaturecollection(); // Not asking what is in groups[key] resassigning it instead.
              console.log(groups[key])
        })
      }
       createCollection()
      $.ajax({
        dataType:'json',
        url:'http://localhost/hearthstone/script/AllSets.json',
        success: function(hsjson){
            for(var i = 0 ; i<hsjson.Basic.length;i++){
              var cards = hsjson.Basic[i];
              hearthbasic.add(cards)
              var cardClass = hearthbasic.models[i].attributes['playerClass'];
              if(!(cardClass in groups)){
                groups[cardClass] = new creaturecollection(); 


            }
            groups[cardClass].add(hearthbasic.models[i])
           // groups['Shaman'] prints out the value



           //console.log('blah')



           cardviews.all.render();


       }  
         }
    })

 
//comperator ,    

// var character  =  'Hunter';
// createCollection(character);

//  
// 


