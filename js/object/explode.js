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
          GAME.assets[SoundPath.explode].play();
          //ゲームオーバー表示
          var gameOverLabel = new Label("GameOver");
          gameOverLabel.x = 680;
          gameOverLabel.font = "25px cursive";
          this.currentScene.addChild(gameOverLabel);
          gameOverLabel.tl.moveTo(680, 320, 50, enchant.Easing.BOUNCE_EASEOUT).delay(30).then(function(){
            GAME.assets[SoundPath.gameOver].play();
          })
          .moveTo(680, 200, 80, enchant.Easing.QUAD_EASEIN ).delay(30).then(function(){
            gameOverLabel.text = "画面更新で再挑戦";
          });
          this.massGroup.removeAllMass();
          this.scene.removeChild(this);
        }
        this.frame += this.num;
      }
      this.count++;
    }
  }
});
