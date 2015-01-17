var StartButton  = Class.create(Label,{
  initialize: function(text, maxX, maxY, maxMine){
    Label.call(this);
    this.text = text;
    this.className = "startButton";
    //これらはinputオブジェクト
    this.maxX = maxX;
    this.maxY = maxY;
    this.maxMine = maxMine;
  },
  ontouchstart: function(e){
    this.startEvent = e;
  },
  ontouchend: function(){

    MASSARRAY = new Array(this.maxX.value);
    for(var x = this.maxX.value; x--;){
      MASSARRAY[x] = new Array(this.maxY.value);
    }

    var mainScene = new Scene();
    mainScene.backgroundColor  = '#7ecef4';
    stageMaker( this.maxX.value, this.maxY.value, mainScene, this.maxMine.value);
    GAME.pushScene(mainScene);
  }
});
