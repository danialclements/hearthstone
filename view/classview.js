var classview = Backbone.View.extend({
 events:{
'click li' : 'switchcollection',

 },
 switchcollection: function(){
  var classname = event.target.className;
  switch(classname){
    case 'Hunter':[$('#cards1').empty(), cardhunterview.render()];
    break;
    case 'Druid':[$('#cards1').empty(), carddruidview.render()];
     break;
    case 'Mage':[$('#cards1').empty(), cardmageview.render()];
    break;
    case 'Shaman':[$('#cards1').empty(), cardshamanview.render()];
    break;
    case 'Rogue':[$('#cards1').empty(), cardrogueview.render()];
    break;
    case 'Priest':[$('#cards1').empty(), cardpriestview.render()];
    break;
    case 'Warlock':[$('#cards1').empty(), cardwarlockview.render()];
    break;
    case 'Warrior':[$('#cards1').empty(), cardwarriorview.render()];
    break;
    case 'Neutral':[$('#cards1').empty(), cardneutralview.render()];
    break;
        default:[$('#cards1').empty(), cardcreatureview.render()];
    break;
  }
 },
    el: '#list',
    initialize: function(){
        this.render()
    },
    render: function(){
   this.$el.html(this.template(this.model.toJSON()));
     
    },
     template:_.template($("#listtemplate").html())
})

   var classnavview = new classview({
        model: classmodel1
    })

   classnavview.render()