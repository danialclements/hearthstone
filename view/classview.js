var searchsubmit = {
  firstvalue:'',
  secondvalue:'',
  classvalue:''

}


var classview = Backbone.View.extend({
 events:{
'click .navhearth' : 'switchcollection',
'click  form': 'getvalues',
'click  #submit' : 'submitentry',
 },




 getvalues: function(){
if ( event.target.name == 'first' ){
  
  searchsubmit['firstvalue'] = event.target.value
  console.log(searchsubmit['firstvalue'])
  
}

if ( event.target.name == 'second' ){
    
   searchsubmit['secondvalue'] = event.target.value
 console.log(searchsubmit['secondvalue'])
}

if(event.target.name == 'hsclass'){
searchsubmit['classvalue'] = event.target.value;
}
},

submitentry: function(){
if(userinfo != false){
  console.log('eee')
}
  var querysearch = organize(searchsubmit['firstvalue'],searchsubmit['secondvalue'])
  var classname = searchsubmit['classvalue'];
  var lowerclass = classname.toLowerCase();
  var classcomparatar = cardviews[lowerclass].collection.comparator=querysearch
  var collectionsort =  cardviews[lowerclass].collection.sort()
  var viewplace = cardviews[lowerclass].render()
  
    
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


 
  


    
function organize(field1, field2, field1r, field2r){ //organize creates comparator
   var flip1 = field1r ? -1 : 1;
  var flip2 = field2r ? -1 : 1;


  return function lexSort(a,b) {
    if(a.get(field1) > b.get(field1)) {
      return 1*flip1;
    } 

    else if(a.get(field1) === b.get(field1)) {

      if(a.get(field2) > b.get(field2)) {
        return 1*flip2;
      } 

      else if (a.get(field2) === b.get(field2)) {
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