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

var cardhunterview = new creatureview({
    collection: groups['Hunter']
});

var carddruidview = new creatureview({
    collection: groups['Druid']
});

var cardmageview = new creatureview({
    collection: groups['Mage']
});

var cardshamanview = new creatureview({
   collection: groups['Shaman']
});

var cardrogueview = new creatureview({
collection: groups['Rogue']
});

var cardpriestview = new creatureview({
   collection: groups['Priest']
});

var cardwarlockview = new creatureview({
    collection: groups['Warlock']
});
var cardwarriorview = new creatureview({
    collection: groups['Warrior']
});
var cardneutralview = new creatureview({
    collection: groups['Neutral']
});

var cardallview = new creatureview({
    collection: groups['Neutral']
});





