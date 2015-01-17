var Explode  = Class.create(Sprite,{
  initialize: function(scene,massGroup,maxX,maxY){
    Sprite.call(this,SpriteSize.explode.w,SpriteSize.explode.h);
    this.frame = 1;
    this.image = GAME.assets[ImagePath.explode];
    this.num = 1;
    this.count = 0;
    this.isExplode = false;
    this.currentScene = scene;
    this.massGroup = massGroup;
    this.maxX = maxX;
    this.maxY = maxY;
  },
  onenterframe: function(){
    if(this.isExplode == false){
      if(this.count == 1){
        //カウンター戻す
        this.count = 0;
        if(this.frame == 14)
        {
          this.isExplode = true;
          //ゲームオーバー表示
          var gameOverLabel = new Label("GameOver");
          gameOverLabel.x = 320;
          gameOverLabel.font = "40px cursive";
          this.currentScene.addChild(gameOverLabel);
          gameOverLabel.tl.moveTo(320, 120, 50, enchant.Easing.BOUNCE_EASEOUT);
          //マスを消す
         // for(var i = this.maxX * this.maxY; i--;){
         //    removeChild(this.massGroup.childNodes[i]);
         // }
          this.massGroup.removeAllMass();
          this.scene.removeChild(this);
        }
        this.frame += this.num;
      }
      this.count++;
    }
  }
});
