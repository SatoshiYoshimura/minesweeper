var Mass  = Class.create(Sprite,{
  initialize: function(scene){
    Sprite.call(this,SpriteSize.mass.w,SpriteSize.mass.h);
    this.frame = 1;
    this.image = GAME.assets[ImagePath.mass];
    this.num = 1;
    this.count = 0;
    this._style.zIndex = 5;
    //地雷もしくは数字が入る
    this.contents = null;
    this.currentScene = scene;
  },
  ontouchstart: function(e){
    this.startEvent = e;
  },
  ontouchend: function(){
    //地雷なら爆発
    if(this.contents.className == "Mine"){
      var explode = new Explode(this.currentScene);
      explode.x = this.x;
      explode.y = this.y;
      this.currentScene.addChild(explode);
    }
  },
  onenterframe: function(){
  }
});
