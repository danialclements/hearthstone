    var loginobject;
var usernav = Backbone.Model.extend({
   defaults: {
    id:'',
    email:'',
    first_name:'',
    gender:'',
    last_name:'',
    link:'',
    locale:'',
    name:'',
    timezone:'',
    update_time:'',
    verified:'',
    createdeck: 'create deck'
    }
})

   loginobject = new usernav(userobject)
         