var Flag  = Class.create(Sprite,{
  initialize: function(){
    Sprite.call(this,SpriteSize.flag.w,SpriteSize.flag.h);

    this.image = GAME.assets[ImagePath.flag];
    this.className = "Flag";
  },
  onmousedown: function(e){
    //左クリック
    if (e.button == 0) {
      return;
    } else if (e.button == 2) {
      //右クリック
      this.parentNode.removeChild(this);
    }
  }
});
