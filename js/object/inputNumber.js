var InputNumber  = Class.create(Entity,{
  initialize: function(){
    Entity.call(this);

    this.image = GAME.assets[ImagePath.mine];
    this.className = "Mine";
    this._element = document.createElement('input');
    this._element.setAttribute("name","number");
    this._element.setAttribute("type","number");
  },
  ontouchstart: function(e){
    this.startEvent = e;
  },
  ontouchend: function(){

  }
});


