enchant();
window.onload = function () {
  GAME = new Game(640, 900);
  GAME.fps = 30;
  GAME.preload(ImagePath.flag, ImagePath.zero,ImagePath.mine,ImagePath.explode,ImagePath.mass,ImagePath.one,ImagePath.two,ImagePath.three,ImagePath.four,ImagePath.five,ImagePath.six,ImagePath.seven,ImagePath.eight,ImagePath.nine ); // pre（前）-load（読み込み）：ゲームに使う素材をあらかじめ読み込んでおきます。
  GAME.onload = function () {

    GAME.rootScene.backgroundColor = 'white';
    //==========================================================
    // setting
    //==========================================================
    // ゲームの設定はここで

    //==========================================================
    // title
    //==========================================================
    var startScene = new Scene();

    var inputX = new Entity();
    inputX.width = 100;
    inputX.height = 20;
    inputX.y = 100;
    inputX._element = document.createElement('input');
    inputX._element.setAttribute("name","maxX");
    inputX._element.setAttribute("type","number");
    inputX._element.setAttribute("min","1");
    inputX._element.setAttribute("max","10");
    inputX.onenterframe = function() {
      inputX.value = inputX._element.value;
    };
    startScene.addChild(inputX);

    var inputY = new Entity();
    inputY.width = 100;
    inputY.height = 20;
    inputY.x = 100;
    inputY.y = 100;
    inputY._element = document.createElement('input');
    inputY._element.setAttribute("name","maxY");
    inputY._element.setAttribute("type","number");
    inputY._element.setAttribute("min","1");
    inputY._element.setAttribute("max","10");
    inputY.onenterframe = function() {
      inputY.value = inputY._element.value;
    };
    startScene.addChild(inputY);

    var inputMine = new Entity();
    inputMine.width = 100;
    inputMine.height = 20;
    inputMine.x = 200;
    inputMine.y = 100;
    inputMine._element = document.createElement('input');
    inputMine._element.setAttribute("name","maxMine");
    inputMine._element.setAttribute("type","number");
    inputMine._element.setAttribute("min","1");
    inputMine._element.setAttribute("max","10");
    inputMine.onenterframe = function() {
      inputMine.value = inputMine._element.value;
    };
    startScene.addChild(inputMine);

    startButton = new StartButton("GameStart",inputX, inputY, inputMine );
    startScene.addChild(startButton);

    GAME.pushScene(startScene);
  }
  GAME.debug();
}

