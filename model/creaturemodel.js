
var hearthcreatures = Backbone.Model.extend({
    defaults:{
    id:'',
    name:'',
    type:'text',
    faction: '',
    rarity:'',
    cost:'',
    attacK:'',
    health:'',
    flavor:'',
    text:'',
    artist:'',
    collectible:'',
    playerClass:'Neutral',
    mechanics:[],
    button: 'Add to Deck'


},
    initialize: function(){
    }

})
