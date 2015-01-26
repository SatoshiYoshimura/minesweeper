var settingNumber = function(maxX, maxY){
  for(var x = maxX; x--;){
    for(var y = maxY; y--;){
      if( MASSARRAY[x][y].contents.className == "NumberObj"){
        MASSARRAY[x][y].contents.countMine();
      }
    }
  }
}
