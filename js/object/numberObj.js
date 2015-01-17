var NumberObj  = Class.create(Sprite,{
  initialize: function(maxX, maxY){
    Sprite.call(this,SpriteSize.numberObj.w,SpriteSize.numberObj.h);

    this.image = GAME.assets[ImagePath.one];
    this.className = "NumberObj";
    this.xPos = null;
    this.yPos = null;
    this.count = 0;
    this.maxX = maxX;
    this.maxY = maxY;
  },
  ontouchstart: function(e){
    this.startEvent = e;
  },
  ontouchend: function(){
  },
  searchMine: function(xNum,yNum){
    if(xNum == this.xPos && yNum == this.yPos){
      return;
    }
    else if(MASSARRAY[xNum][yNum].contents.className == "Mine")
    {
      this.count++;
    }
  },
  countMine: function(){
    //周囲1マスを調べる
    this.decisionXpos();

    switch (this.count){
      case 0:
        this.image = GAME.assets[ImagePath.zero];
        break;
      case 1:
        this.image = GAME.assets[ImagePath.one];
        break;
      case 2:
        this.image = GAME.assets[ImagePath.two];
        break;
      case 3:
        this.image = GAME.assets[ImagePath.three];
        break;
      case 4:
        this.image = GAME.assets[ImagePath.four];
        break;
      case 5:
        this.image = GAME.assets[ImagePath.five];
        break;
      case 6:
        this.image = GAME.assets[ImagePath.six];
        break;
      case 7:
        this.image = GAME.assets[ImagePath.seven];
        break;
      case 8:
        this.image = GAME.assets[ImagePath.eight];
        break;
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
        this.searchMine(xNum, this.yPos - 1);
      }
      if(this.yPos + 1 <= this.maxY - 1){
        this.searchMine(xNum, this.yPos + 1);
      }
      this.searchMine(xNum, this.yPos);
  }
});
