var newclass =   ['Hunter','Druid','Mage','Shaman','Rogue','Priest','Warlock','Warrior','Neutral','All' ];
var finalarray = []
var newarray = (function(){for(var i = 0; i < newclass.length ;i++){  finalarray.push(newclass[i]); }}());

var classmodel = Backbone.Model.extend({

    defaults:
    {    
    order:[0,1,2,3,4,5,6,7,8,9],
    rarity:[],
    name:'name'

   },
   initialize: function(){
    
   }

    
})

var classmodel1 = new classmodel({
  classes1: finalarray
});