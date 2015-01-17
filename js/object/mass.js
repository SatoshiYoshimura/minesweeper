var Mass  = Class.create(Sprite,{
  initialize: function(scene){
    Sprite.call(this,SpriteSize.mass.w,SpriteSize.mass.h);
    this.frame = 1;
    this.image = GAME.assets[ImagePath.mass];
    this.num = 1;
    this.count = 0;
    this.explode_flg = false;
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
//    if(this.explode_flg == false){
//      if(this.count == 1){
//        //カウンター戻す
//        this.count = 0;
//        if(this.frame == 14)
//        {
//          this.explode_flg = true;
//        }
//        this.frame += this.num;
//      }
//      this.count++;
//    }
  }
});
