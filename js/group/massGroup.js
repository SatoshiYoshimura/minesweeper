//全マスを管理するグループ
var MassGroup  = Class.create(Group,{
  initialize: function(scene){
    Group.call(this);
    this.childNodes = [];
    this.nonMineGroup = new Group;
    this.currentScene = scene;
    //地雷以外のマス数
    this.safeMassCount = 0;
    //開いているマスの数
    this.openMassCount = 0;
  },
  //地雷を抱えていないマスを集約
  collectNonMine: function collectNoneMine(){
    for(var i = this.childNodes.length; i--;){
      if(this.childNodes[i].contents.className != "Mine")
      {
        this.nonMineGroup.addChild(this.childNodes[i]);
        this.safeMassCount++;
      }
    }
    this.currentScene.addChild(this.nonMineGroup);
  },
  //全マスを消す
  removeAllMass: function hiddenAllMass(){
    for(var i = this.nonMineGroup.childNodes.length; i--;){
      this.nonMineGroup.removeChild(this.nonMineGroup.childNodes[i]);
    }
    for(var i = this.childNodes.length; i--;){
      this.removeChild(this.childNodes[i]);
    }
  },
  onaddedtoscene: function(){
    this.collectNonMine();
  },
  //マスが開いたときに発行
  onopenmass: function(){
    this.openMassCount++;
    if(this.openMassCount >= this.safeMassCount){
      var gameClearLabel = new Label("GameClear");
      this.currentScene.addChild(gameClearLabel);
    }
  }
});
