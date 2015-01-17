var Mass  = Class.create(Sprite,{
  initialize: function(scene,group){
    Sprite.call(this,SpriteSize.mass.w,SpriteSize.mass.h);
    this.frame = 1;
    this.image = GAME.assets[ImagePath.mass];
    this.num = 1;
    this.count = 0;
    //地雷もしくは数字が入る
    this.contents = null;
    this.currentScene = scene;
    this.flag = null;
    this.group = group;
  },
  onmousedown: function(e){
    //左クリック
    if (e.button == 0) {
      //地雷なら爆発
      if(this.contents.className == "Mine"){
        var explode = new Explode(this.currentScene,this.group);
        explode.x = this.x;
        explode.y = this.y;
        this.currentScene.addChild(explode);
      }else{
        //数字なら自分を消す
        this.group.removeChild(this);
      }
    } else if (e.button == 2) {
      //右クリック
      var flag = new Flag();
      flag.x = this.x;
      flag.y = this.y;
      this.flag = flag;
      this.currentScene.addChild(flag);
    }
  }
});
