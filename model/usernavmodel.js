var usernav = Backbone.Model.extend({
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
    verified:''
})
console.log(userobject)
var loginobject = new usernav(userobject)
console.log(loginobject);
