var Mass  = Class.create(Sprite,{
  initialize: function(scene, group, maxX, maxY,xPos,yPos){
    Sprite.call(this,SpriteSize.mass.w,SpriteSize.mass.h);
    this.frame = 1;
    this.image = GAME.assets[ImagePath.mass];
    this.num = 1;
    this.count = 0;
    //地雷もしくは数字が入る
    this.contents = null;
    this.currentScene = scene;
    //旗
    this.flag = null;
    //massGroup
    this.group = group;
    //最大の横と縦
    this.maxX = maxX;
    this.maxY = maxY;
    //自分の配列の位置
    this.xPos = xPos;
    this.yPos = yPos;
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
        if(this.contents.count == 0){
          this.decisionXpos();
        }
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
  openNeighbor: function(xNum,yNum){
    //自分は調べない
    if(xNum == this.xPos && yNum == this.yPos){
      return;
    }
    else if(MASSARRAY[xNum][yNum].contents.className != "Mine")
    {
      //チェック済みなら何もしない
      if(this.group.checkedMassArray[xNum][yNum]){
        return;
      }
      console.log("xNum:"+ xNum + "yNum" + yNum);
      //TODO Mass.content == 地雷か数字しかない前提
      if(MASSARRAY[xNum][yNum].contents.count == 0)
      {
        this.group.checkedMassArray[xNum][yNum] = true;
        //空白マスならそのマスの隣接も調べる
        MASSARRAY[xNum][yNum].decisionXpos();
      }else{
        this.group.checkedMassArray[xNum][yNum] = true;
      }
      //マスを空ける
      this.group.nonMineGroup.removeChild(MASSARRAY[xNum][yNum]);
      //チェック済みにする
    }
  },
  decisionXpos: function(){
    if( this.xPos - 1 >= 0){
      this.decisionYpos(this.xPos - 1);
    }
    if(this.xPos + 1 <= this.maxX - 1 ){
      this.decisionYpos(this.xPos + 1);
    }
    this.decisionYpos(this.xPos);
  },
  decisionYpos: function(xNum){
    if( this.yPos - 1 >= 0){
      this.openNeighbor(xNum, this.yPos - 1);
    }
    if(this.yPos + 1 <= this.maxY - 1){
      this.openNeighbor(xNum, this.yPos + 1);
    }
    this.openNeighbor(xNum, this.yPos);
  }
});
