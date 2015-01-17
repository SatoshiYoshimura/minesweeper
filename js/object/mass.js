var Mass  = Class.create(Sprite,{
  initialize: function(scene,group, maxX,maxY){
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
    this.maxX = maxX;
    this.maxY = maxY;
  },
  onmousedown: function(e){
    //左クリック
    if (e.button == 0) {
      //地雷なら爆発
      if(this.contents.className == "Mine"){
        var explode = new Explode(this.currentScene,this.group,this.maxX, this.maxY);
        explode.x = this.x;
        explode.y = this.y;
        this.currentScene.addChild(explode);
      }else{
        //数字なら自分を消す
        this.visible = false;
        // openmass イベントを発行する
        var e = new enchant.Event("openmass");
        this.group.dispatchEvent(e);
      }
    } else if (e.button == 2) {
      //右クリック
      //旗をおく
      var flag = new Flag();
      flag.x = this.x;
      flag.y = this.y;
      this.flag = flag;
      this.currentScene.addChild(flag);
    }
  },
  clearChecker: function(){
    //クリアチェック

    //地雷以外のマス配列

    for(var i = this.maxX * this.maxY; i--;){
      //地雷を抱えていないマスを集約
      if(this.group.childNodes[i].content.className != "Mine")
        {


        }
    }
  }
});
