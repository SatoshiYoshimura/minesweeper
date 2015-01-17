var Mine  = Class.create(Sprite,{
  initialize: function(){
    Sprite.call(this,SpriteSize.mine.w,SpriteSize.mine.h);

    this.image = GAME.assets[ImagePath.mine];
    this.className = "Mine";
  },
  ontouchstart: function(e){
    this.startEvent = e;
  },
  ontouchend: function(){
   // var block = new Block('white');
   // block.x = this.x;
   // block.y = this.y;
   // currentStage.push(block);
   // this.parentNode.addChild(block);

  }
});
