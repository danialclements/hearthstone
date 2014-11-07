var creaturecollection = Backbone.Collection.extend({
    model: hearthcreatures,
    
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



           cardcreatureview.render();


       }  
         }
    })
function organize(field1, field2, fieldr1, field2r) {
  var flip1 = field1r ? -1 : 1;
  var flip2 = field2r ? -1 : 1;
  return function lexSort(a,b) {
    if(a[field1] > b[field1]) {
      return 1*flip1;
    } 

    else if(a[field1] === b[field1]) {

      if(a[field2] > b[field2]) {
        return 1*flip2;
      } 

      else if (a[field2] === b[field2]) {
        return 0;
      } 

      else {
        return -1*flip2;
      }

    } else {
      return -1*flip1;
    }
  }
}
//comperator ,    

// var character  =  'Hunter';
// createCollection(character);

//  
// 
