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

  // 初期シードを生成
  var unixTimestamp = Math.round( new Date().getTime() / 1000 );
  //地雷マスを設定
  //TODO 地雷マスがかぶる可能性がある
  var mineNumberArray = new Array(mineNumber);
  for(var i = mineNumber; i--;){
    //疑似乱数を設定
    var mineNumberObj = {x:0,y:0};
    var mt_obj = MersenneTwisterInitialize(i * unixTimestamp);
    mineNumberObj.x = Math.abs(MersenneTwisterGetInt32(mt_obj)) % maxX;
    mineNumberObj.y = Math.abs(MersenneTwisterGetInt32(mt_obj)) % maxY;
    mineNumberArray[i] = mineNumberObj;
  }

  //マスを作成
  //縦×横ループでステージ生成
  for(var x = maxX; x--;){
    for(var y = maxY; y--;){
      //マスを追加
      var mass = new Mass(scene);
      mass.y = (SpriteSize.mass.w * y );
      mass.x = (SpriteSize.mass.h * x );
      massGroup.addChild(mass);
      MASSARRAY[x][y] = mass;
    }
  }
  //scene.addChild(massGroup);

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
        //scene.addChild(numberObj);
      }
    }
  }
  stageGroup.addChild(numberGroup);
  stageGroup.addChild(mineGroup);
  stageGroup.addChild(massGroup);
  scene.addChild(stageGroup);
  settingNumber();
}
