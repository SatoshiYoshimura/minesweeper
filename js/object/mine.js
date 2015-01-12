var Mine  = Class.create(Sprite,{
  initialize: function(){
    Sprite.call(this,32,32);

    this.image = GAME.assets[ImagePath.mine];
  },
  ontouchstart: function(e){
    this.startEvent = e;
  },
  ontouchend: function(){
    console.log("aa");
    var explode = new Explode();
    this.parentNode.addChild(explode);
   // var block = new Block('white');
   // block.x = this.x;
   // block.y = this.y;
   // currentStage.push(block);
   // this.parentNode.addChild(block);

  }
});
