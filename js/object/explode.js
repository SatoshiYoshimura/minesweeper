var Explode  = Class.create(Sprite,{
  initialize: function(){
    Sprite.call(this,SpriteSize.explode.x,SpriteSize.explode.y);
    this.frame = 1;
    this.image = GAME.assets[ImagePath.explode];
    this.num = 1;
    this.count = 0;
    this.explode_flg = false;
  },
  ontouchstart: function(e){
    this.startEvent = e;
  },
  ontouchend: function(){
    console.log("aa");
   // var block = new Block('white');
   // block.x = this.x;
   // block.y = this.y;
   // currentStage.push(block);
   // this.parentNode.addChild(block);

  },
  onenterframe: function(){
    if(this.explode_flg == false){
      if(this.count == 1){
        //カウンター戻す
        this.count = 0;
        if(this.frame == 14)
        {
          this.explode_flg = true;
        }
        this.frame += this.num;
      }
      this.count++;
    }
  }
});
