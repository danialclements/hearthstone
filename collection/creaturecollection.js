var creaturecollection = Backbone.Collection.extend({
    model: hearthcreatures,

    initialize: function(){
      this.sort_key = 'cost';
      this.sort_keysecond = 'alphabet';
    },

    function comperatorfieldset(field1, field2, reverse1, reverse2){
      var reverser1 = reverse1  ? -1 : 1;
      var reverser2 = reverse2  ? -1: 1;

    function comperator(a,b)
    if(a.get(field1) > b.get(field1){
      return 1*flip1
    }
    else if(a.get(field1) == b.get(field1){
      if(a.get(field2) > b.get(field2)){
        return 1*flip2;
      }
      else if(a.get(field2) > b.get(field2)){
        return 0;
      }
      else{
        return -1*flip2; //this is actually a.get(field2) < b.get(field2)
      }
    }
    else{
      return -1*flip1 //this is actually a.get(field1) < b.get(field1)
    }
    
})

}
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



           cardcreatureview.render();


       }  
         }
    })

 
//comperator ,    

// var character  =  'Hunter';
// createCollection(character);

//  
// 
