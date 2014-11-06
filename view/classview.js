var classview = Backbone.View.extend({
    el: '#list',
    initialize: function(){
        this.render()
    },
    render: function(){
        var self= this;
        var output='';
        this.model.each(
            function(model){
                    output += self.template(model.attributes)
            }
            )
        this.$el.html(output)
     
    },
     template:_.template($("#listtemplate").html())
})

   var classnavview = new classview({
        model: classmodel1
    })

   classnavview.render()