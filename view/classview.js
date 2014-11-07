var comparer=5;
var classview = Backbone.View.extend({
 events:{
'click .navhearth' : 'switchcollection',
'click .order0': 'findp'
 },
 switchcollection: function(){
  var classname = event.target.className;
  switch(classname){
    case 'Hunter':[$('#cards1').empty(), cardhunterview.render(), console.log(comparer)];
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

 findp: function (ffield1, ffield2){
 
  function organize(field1, field2, field1r, field2r){
   var flip1 = field1r ? -1 : 1;
  var flip2 = field2r ? -1 : 1;
  return function lexSort(a,b) {
    var a = 
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
 return hearthbasic.sort(organize('cost','name')())

    
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