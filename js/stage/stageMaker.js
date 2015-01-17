/***
 *ステージ生成関数
 * 横マス目,縦マス目,シーン,地雷数を渡す
 ****/
function stageMaker(maxX,maxY,scene, mineNumber ){

  //ステージのグループ
  var stageGroup = new Group();
  //マスのグループ
  var massGroup = new Group();
  //地雷のグループ
  var mineGroup = new Group();
  var numberGroup = new Group();

  //地雷マスを設定
  var mineNumberArray = setMinePos(mineNumber,maxX,maxY);

  //マスを作成
  //縦×横ループでステージ生成
  for(var x = maxX; x--;){
    for(var y = maxY; y--;){
      //マスを追加
      var mass = new Mass(scene,massGroup);
      mass.y = (SpriteSize.mass.w * y );
      mass.x = (SpriteSize.mass.h * x );
      massGroup.addChild(mass);
      MASSARRAY[x][y] = mass;
    }
  }

  //地雷を設置
  for(var i = mineNumber; i--;){
    //地雷設定と被ったマス目に地雷置く
    var mine = new Mine();
    mine.y = (SpriteSize.mine.h + (SpriteSize.mine.h * ( mineNumberArray[i].y - 1 )));
    mine.x = (SpriteSize.mine.w + (SpriteSize.mine.w * ( mineNumberArray[i].x - 1 )))
    //地雷をマスに登録
    MASSARRAY[mineNumberArray[i].x][mineNumberArray[i].y].contents = mine;
    mineGroup.addChild(mine);
  }

  //数値を設置
  for(var x = maxX; x--;){
    for(var y = maxY; y--;){
      if(MASSARRAY[x][y].contents == null ){
        var numberObj = new NumberObj();
        numberObj.xPos = x;
        numberObj.yPos = y;
        numberObj.x = SpriteSize.numberObj.w * x;
        numberObj.y = SpriteSize.numberObj.h * y;
        //TODO 先にcontentsを入れないとエラーになる
        MASSARRAY[x][y].contents = numberObj;
        numberGroup.addChild(numberObj);
      }
    }
  }
  stageGroup.addChild(numberGroup);
  stageGroup.addChild(mineGroup);
  stageGroup.addChild(massGroup);
  scene.addChild(stageGroup);
  settingNumber();
}
