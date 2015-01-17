function setMinePos(mineNumber,maxX,maxY){
    // 初期シードを生成
    var unixTimestamp = Math.round( new Date().getTime() / 1000 );
    var mineNumberArray = new Array(mineNumber);

    this.makeMineNumberObj = function makeMineNumberObj(){
      var mineNumberObj = {x:0,y:0};
      var mt_obj = MersenneTwisterInitialize(i * unixTimestamp);
      mineNumberObj.x = Math.abs(MersenneTwisterGetInt32(mt_obj)) % maxX;
      mineNumberObj.y = Math.abs(MersenneTwisterGetInt32(mt_obj)) % maxY;
      return mineNumberObj;
    }

    for(var i = mineNumber; i--;){
      //疑似乱数を設定
      mineNumberArray[i] = makeMineNumberObj();
    }

    this.checkSameMine =  function checkSameMine (){
      //既存のと被ってないか調べる
      for(var i = mineNumber; i--;){
        var mineNumber = { x:mineNumberArray[i].x, y:mineNumbeArray[i].y };
        for(var checkI = mineNumber - 1; checkI--;){
          var checkMine = { x:mineNumberArray[checkI].x, y:mineNumbeArray[checkI].y };
          //被った場合
          if(mineNumber.x == checkMine.x && mineNumber.y == checkMine.y ){
            mineNumbeArray[i] = makeMineNumberObj();
            checkSameMine();
          }
        }
      }
    }

    return mineNumberArray;
}
