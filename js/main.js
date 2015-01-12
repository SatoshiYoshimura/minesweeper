window.onload = function () {
  GAME = new Game(640, 900);
  GAME.fps = 30;
  GAME.preload(ImagePath.mine,ImagePath.explode); // pre（前）-load（読み込み）：ゲームに使う素材をあらかじめ読み込んでおきます。
  GAME.onload = function () {

    GAME.rootScene.backgroundColor = 'white';
    //==========================================================
    // setting
    //==========================================================
    // ゲームの設定はここで
    //createSurfaces();

    //==========================================================
    // title
    //==========================================================
    var mainScene = new Scene();

    //==
    //お試しで画像表示
    var bomb = new Mine();
    //Sprite(32, 32);
//    bomb.image = GAME.assets['./img/bomb.png'];
    bomb.x = 100;
    bomb.y = 120;
    mainScene.addChild(bomb);
    mainScene.backgroundColor  = '#7ecef4';

    var explode = new Explode();
    explode.x = 200;
    explode.y = 300;
    mainScene.addChild(explode);

    GAME.pushScene(mainScene);
  }
  GAME.start();
}

