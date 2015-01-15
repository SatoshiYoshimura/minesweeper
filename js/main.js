enchant();
window.onload = function () {
  GAME = new Game(640, 900);
  GAME.fps = 30;
  GAME.preload(ImagePath.zero,ImagePath.mine,ImagePath.explode,ImagePath.mass,ImagePath.one,ImagePath.two,ImagePath.three,ImagePath.four,ImagePath.five,ImagePath.six,ImagePath.seven,ImagePath.eight,ImagePath.nine ); // pre（前）-load（読み込み）：ゲームに使う素材をあらかじめ読み込んでおきます。
  GAME.onload = function () {

    GAME.rootScene.backgroundColor = 'white';
    //==========================================================
    // setting
    //==========================================================
    // ゲームの設定はここで

    //==========================================================
    // title
    //==========================================================
    var mainScene = new Scene();

    mainScene.backgroundColor  = '#7ecef4';

    //5は入力察せる
    stageMaker(5,5,mainScene,10);

   // var kuma = new Sprite(32, 32);  // ...(1)
   // kuma.image = GAME.assets['./img/numbers/002.png']; // ...(2)
   // kuma.x = 10;
   // kuma.y = 20;
   // kuma._style.zIndex = 1;
   // debugger
   // mainScene.addChild(kuma);

    GAME.pushScene(mainScene);
  }
  GAME.debug();
}

