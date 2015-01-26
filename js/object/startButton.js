var StartButton  = Class.create(Sprite,{
  initialize: function( maxX, maxY, maxMine){
    Sprite.call(this,SpriteSize.playButton.w,SpriteSize.playButton.h);
    this.className = "startButton";
    //これらはinputオブジェクト
    this.image = GAME.assets[ImagePath.playButton];
    this.maxX = maxX;
    this.maxY = maxY;
    this.maxMine = maxMine;
    this.isXError = false;
    this.isYError = false;
    this.isMineError = false;
  },
  ontouchstart: function(e){
    this.startEvent = e;
  },
  ontouchend: function(){
    //最大値最小値チェック
    if(this.maxX.value <= 0 || this.maxX.value== null || this.maxX.value == undefined || this.maxX.value == ""){
      var xErrorLabel = new Label("横を１以上入力してください");
      xErrorLabel.font = "14px cursive";
      xErrorLabel.x = 350;
      xErrorLabel.y = 200;
      this.parentNode.addChild(xErrorLabel);
      this.isXError = true;
    }else if(this.maxX.value > 20){
      var xErrorLabel = new Label("横は20以内を入力してください");
      xErrorLabel.font = "14px cursive";
      xErrorLabel.x = 350;
      xErrorLabel.y = 230;
      this.parentNode.addChild(xErrorLabel);
      this.isXError = true;
    }else{
      this.isXError = false;
    }

    if(this.maxY.value <= 0 || this.maxY.value == null || this.maxY.value == undefined || this.maxY.value == ""){
      var yErrorLabel = new Label("縦を１以上入力してください");
      yErrorLabel.font = "14px cursive";
      yErrorLabel.x = 350;
      yErrorLabel.y = 260;
      this.parentNode.addChild(yErrorLabel);
      this.isYError = true;
    }else if(this.maxY.value > 20){
      var yErrorLabel = new Label("縦は20以内を入力してください");
      yErrorLabel.font = "14px cursive";
      yErrorLabel.x = 350;
      yErrorLabel.y = 290;
      this.parentNode.addChild(yErrorLabel);
      this.isYError = true;
    }else{
      this.isYError = false;
    }

    if(this.maxMine.value <= 0 || this.maxMine.value == null || this.maxMine.value == undefined || this.maxMine.value == ""){
      var mineErrorLabel = new Label("地雷数を１以上入力してください");
      mineErrorLabel.font = "14px cursive";
      mineErrorLabel.x = 350;
      mineErrorLabel.y = 320;
      this.parentNode.addChild(mineErrorLabel);
      this.isMineError = true;
    }else if( this.maxMine.value > (this.maxX.value * this.maxY.value) / 2 ){
      var mineErrorLabel = new Label("地雷数は縦x横の半分以下を入力してください");
      mineErrorLabel.font = "14px cursive";
      mineErrorLabel.x = 350;
      mineErrorLabel.y = 350;
      this.parentNode.addChild(mineErrorLabel);
      this.isMineError = true;
    }else{
      this.isMineError = false;
    }

    //エラーチェック
    if(this.isXError == true || this.isYError == true || this.isMineError == true){
      return;
    }

    MASSARRAY = new Array(this.maxX.value);
    for(var x = this.maxX.value; x--;){
      MASSARRAY[x] = new Array(this.maxY.value);
    }

    var mainScene = new Scene();
    mainScene.backgroundColor  = 'gray';
    stageMaker( this.maxX.value, this.maxY.value, mainScene, this.maxMine.value);
    GAME.pushScene(mainScene);
  }
});
