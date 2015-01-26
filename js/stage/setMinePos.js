function SetMinePos(mineNumber,maxX,maxY){
    this.mineNumber = mineNumber;
    this.mineNumberArray = new Array(mineNumber);

    this.makeMineNumberObj = function makeMineNumberObj(i){
    // 初期シードを生成
      var unixTimestamp = Math.round( new Date().getTime() );
      var mineNumberObj = {x:0,y:0};
      var mt_obj = MersenneTwisterInitialize(i * unixTimestamp);
//      mineNumberObj.x = Math.abs(MersenneTwisterGetInt32(mt_obj)) % maxX;
//      mineNumberObj.y = Math.abs(MersenneTwisterGetInt32(mt_obj)) % maxY;
      mineNumberObj.x = Math.floor( (Math.random() * (maxX - 1) + 1));
      mineNumberObj.y = Math.floor( (Math.random() * (maxY - 1) + 1));
      return mineNumberObj;
    };

    this.getMineNumberArray = function getMineNumberArray(){
      for(var i = mineNumber; i--;){
        //疑似乱数を設定
        this.mineNumberArray[i] = this.makeMineNumberObj(i);
      }
      setTimeout(this.checkSameMine(Number(this.mineNumber) - 1),5);
      return this.mineNumberArray;
    };

    this.checkSameMine = function checkSameMine (checkMineNumber){
      var self = this;
      //既存のと被ってないか調べる
      for(var i = 0; i <= checkMineNumber; i++){
        var mineNumberObj = this.mineNumberArray[i];
        for(var j = 0; j <= (i - 1); j++){
          var checkMine = this.mineNumberArray[j];
          //被った場合入れ替えてもう一度行う
          if(mineNumberObj.x == checkMine.x && mineNumberObj.y == checkMine.y ){
            this.mineNumberArray[i] = this.makeMineNumberObj(i);
            setTimeout(self.checkSameMine(i),5);
          }
        }
      }
    };

}


