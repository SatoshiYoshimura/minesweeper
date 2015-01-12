/***
 *ステージ生成関数
 * 横マス目,縦マス目,シーン,地雷数を渡す
 ****/
function stageMaker(maxX,maxY,scene, mineNumber ){

  //マスのグループと地雷のグループ
  var massGroup = new Group();
  var mineGroup = new Group();

  // 初期シードを生成
  var unixTimestamp = Math.round( new Date().getTime() / 1000 );
  //地雷マスを設定
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
      //地雷を追加
      for(var i = mineNumber; i--;){
        //地雷設定とかぶったマス目に地雷置く
        if(mineNumberArray[i].x == x && mineNumberArray[i].y == y ){
          var mine = new Mine();
          mine.y = (SpriteSize.mine.w * y) + 10;
          mine.x = (SpriteSize.mine.h * x) + 10;
          mine._style.zIndex = 1;
          mineGroup.addChild(mine);
          scene.addChild(mineGroup);
        }
      }

 //     //マスを追加
 //     var mass = new Mass(mine);
 //     //マスの横幅横に
 //     mass.y = (SpriteSize.mass.w * y);
 //     mass.x = (SpriteSize.mass.h * x);
 //     mass._style.zIndex = 2;
 //     massGroup.addChild(mass);
 //     scene.addChild(massGroup);
    }
  }

}
