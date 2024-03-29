var user;
var creatureview = Backbone.View.extend({
    el:'#cards1',
    initialize: function(){
        
    },
    events:{
       'click .addcard': 'addcards' 
    },

    addcards: function(){
        var idcoll = event.target.id
        if (user){
                cardcounter++;
        console.log('hello')
        $('.createdeckbutton').empty();
        

        }else{
            console.log('false')
        }
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
var cardviews = {};
cardviews.creature = new creatureview({
    collection: hearthbasic
 });

cardviews.hunter = new creatureview({
    collection: groups['Hunter']
});

cardviews.druid = new creatureview({
    collection: groups['Druid']
});

cardviews.mage = new creatureview({
    collection: groups['Mage']
});

cardviews.shaman = new creatureview({
   collection: groups['Shaman']
});

cardviews.rogue = new creatureview({
collection: groups['Rogue']
});

cardviews.priest = new creatureview({
   collection: groups['Priest']
});

cardviews.warlock = new creatureview({
    collection: groups['Warlock']
});
cardviews.warrior = new creatureview({
    collection: groups['Warrior']
});
cardviews.neutral = new creatureview({
    collection: groups['Neutral']
});

cardviews.all = new creatureview({
    collection: groups['Neutral']
});





