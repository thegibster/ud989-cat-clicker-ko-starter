var Cat = function(){
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttribution = ko.observable('https://www.flickr.com/phtos/big');
  this.nickNames = ko.observableArray([{name: 'Mittens'},{name :'Bubbles'},{name:'Cuteness'}]);

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

  this.currentCat = ko.observable(new Cat());

  this.incrementCounter = function(){
    this.currentCat().clickCount(this.currentCat().clickCount()+1);
  };
};

ko.applyBindings(new ViewModel());
