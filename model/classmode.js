var classmodel = Backbone.Model.extend({
    defaults:
    {    
   Hunter:'Hunter',
   Druid:'Druid',
   Mage:'Mage',
   Shaman:'Shaman',
   Rogue: 'Rogue', 
   Priest: 'Priest',
   Warlock: 'Warlock',
   Warrior: 'Warrior',
   },
   initialize: function(){
      classnavview.render();
   }

    
})