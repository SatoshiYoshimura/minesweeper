/***
 *ステージ生成関数
 * 横マス目,縦マス目,シーン,地雷数を渡す
 ****/
function stageMaker(maxX,maxY,scene, mineNumber ){

  //ステージのグループ
  var stageGroup = new Group();
  //マスのグループ
  var massGroup = new MassGroup(scene);
  //地雷のグループ
  var mineGroup = new Group();
  //数字のグループ
  var numberGroup = new Group();
  //地雷マスを設定
  var setMinePos = new SetMinePos(mineNumber,maxX,maxY);
  var mineNumberArray = setMinePos.getMineNumberArray();

  //マスを作成
  //縦×横ループでステージ生成
  for(var x = maxX; x--;){
    for(var y = maxY; y--;){
      //マスを追加
      var mass = new Mass(scene,massGroup,maxX,maxY, x, y);
      mass.y = (SpriteSize.mass.w * y ) + 30;
      mass.x = (SpriteSize.mass.h * x ) + 100;
      massGroup.addChild(mass);
      MASSARRAY[x][y] = mass;
    }
  }

  //地雷を設置
  for(var i = mineNumber; i--;){
    //地雷設定と被ったマス目に地雷置く
    var mine = new Mine();
    mine.y = (SpriteSize.mine.h + (SpriteSize.mine.h * ( mineNumberArray[i].y - 1 ))) + 30;
    mine.x = (SpriteSize.mine.w + (SpriteSize.mine.w * ( mineNumberArray[i].x - 1 ))) + 100
    //地雷をマスに登録
    MASSARRAY[mineNumberArray[i].x][mineNumberArray[i].y].contents = mine;
    mineGroup.addChild(mine);
  }

  //数値を設置
  for(var x = maxX; x--;){
    for(var y = maxY; y--;){
      if(MASSARRAY[x][y].contents == null ){
        var numberObj = new NumberObj(maxX, maxY);
        numberObj.xPos = x;
        numberObj.yPos = y;
        numberObj.x = SpriteSize.numberObj.w * x + 100;
        numberObj.y = SpriteSize.numberObj.h * y + 30;
        //TODO 先にcontentsを入れないとエラーになる
        MASSARRAY[x][y].contents = numberObj;
        numberGroup.addChild(numberObj);
      }
    }
  }
  stageGroup.addChild(numberGroup);
  stageGroup.addChild(mineGroup);
  //追加前に隣接用のチェック配列を用意
  massGroup.checkedMassArray = new Array(Number(maxX));
  for(var i = massGroup.checkedMassArray.length; i--;){
    massGroup.checkedMassArray[i] = new Array(Number(maxY));
  }
  stageGroup.addChild(massGroup);
  scene.addChild(stageGroup);
  //数値を設定
  settingNumber(maxX,maxY);
}
