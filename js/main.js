enchant();
window.onload = function () {
  GAME = new Game(640, 900);
  GAME.fps = 30;
  GAME.preload(ImagePath.mine,ImagePath.explode,ImagePath.mass); // pre（前）-load（読み込み）：ゲームに使う素材をあらかじめ読み込んでおきます。
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

    mainScene.backgroundColor  = '#7ecef4';

    //5は入力察せる
    stageMaker(5,5,mainScene,10);

    GAME.pushScene(mainScene);
  }
  GAME.start();
}

