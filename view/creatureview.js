var creatureview = Backbone.View.extend({
    el:'#cards1',
    initialize: function(){
        this.render()
    },
    render: function(){
        var self = this;
        var output = '';
        this.collection.each(
            function(models){
                output += self.template(models.attributes)
            }
            )
        this.$el.html(output)
    },
    template:_.template($("#cardtemplate").html())
});

var cardcreatureview = new creatureview({
    collection: hearthbasic
    
});

