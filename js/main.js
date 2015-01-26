enchant();
window.onload = function () {
  GAME = new Game(640, 900);
  GAME.fps = 30;
  GAME.preload(ImagePath.flag, ImagePath.zero,ImagePath.mine,ImagePath.explode,ImagePath.mass,ImagePath.one,ImagePath.two,ImagePath.three,ImagePath.four,ImagePath.five,ImagePath.six,ImagePath.seven,ImagePath.eight,ImagePath.nine,ImagePath.playButton,SoundPath.explode, SoundPath.clear, SoundPath.gameOver );
  GAME.onload = function () {

    GAME.rootScene.backgroundColor = 'white';

    //==========================================================
    // title
    //==========================================================
    var startScene = new Scene();

    //説明文
    var titleLabel = new Label();
    titleLabel.text = "マインスイーパー"
    titleLabel.font = "40px cursive";
    titleLabel.y = 50;
    titleLabel.x = 300;
    startScene.addChild(titleLabel);
    //
    var xLabel = new Label();
    xLabel.text = "横の大きさ";
    xLabel.x = 230;
    xLabel.y = 130;
    startScene.addChild(xLabel);

    var yLabel = new Label();
    yLabel.text = "縦の大きさ";
    yLabel.y = 130;
    yLabel.x = 400;
    startScene.addChild(yLabel);

    var mineLabel = Label();
    mineLabel.text = "地雷の数";
    mineLabel.y = 130;
    mineLabel.x = 570;
    startScene.addChild(mineLabel);

    var inputX = new Entity();
    inputX.width = 100;
    inputX.height = 20;
    inputX.y = 150;
    inputX.x = 230;
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
    inputY.x = 400;
    inputY.y = 150;
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
    inputMine.x = 570;
    inputMine.y = 150;
    inputMine._element = document.createElement('input');
    inputMine._element.setAttribute("name","maxMine");
    inputMine._element.setAttribute("type","number");
    inputMine._element.setAttribute("min","1");
    inputMine._element.setAttribute("max","10");
    inputMine.onenterframe = function() {
      inputMine.value = inputMine._element.value;
    };
    startScene.addChild(inputMine);

    startButton = new StartButton(inputX, inputY, inputMine );
    startButton.x = 420;
    startButton.y = 380;
    startScene.addChild(startButton);

    GAME.pushScene(startScene);
  }
  GAME.start();
}

