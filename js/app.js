var Cat = function(data){
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.nickNames = ko.observableArray(data.nickNames);

  this.level = ko.computed(function(){
    var level;
    var clicks = this.clickCount();
    if(clicks>5 && clicks<10){
      level = 'infant';
    }
    else if(clicks>10){
      level = 'teen';
    }
    else {
      level = 'newborn';
    }
    return level;
  },this);



}

var ViewModel = function (){
  var self = this; // self is always defined as the view model

  this.currentCat = ko.observable(new Cat({
    clickCount : 0,
    name :'Tabby',
    imgSrc :'img/434164568_fea0ad4013_z.jpg',
    imgAttribution : 'https://www.flickr.com/phtos/big',
    nickNames :[{name: 'Mittens'},{name :'Bubbles'},{name:'Cuteness'}]
  }));

  this.incrementCounter = function(){
    self.currentCat().clickCount(self.currentCat().clickCount()+1);
  };
};

ko.applyBindings(new ViewModel());
