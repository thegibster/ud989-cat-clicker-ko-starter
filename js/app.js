var ViewModel = function (){
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttribution = ko.observable('https://www.flickr.com/phtos/big');
  this.level = ko.observable('newBorn');
  this.nickNames = ko.observableArray(['Mittens','Bubbles','Cuteness']);

  this.incrementCounter = function(){
    if(this.clickCount()>5 && this.clickCount()<10){
      this.clickCount(this.clickCount()+1);
      this.level('infant');
    }
    else if(this.clickCount()>10){
      this.clickCount(this.clickCount()+1);
      this.level('teen');
    }
    else {
      this.clickCount(this.clickCount()+1);
    }
  };
}

ko.applyBindings(new ViewModel());
