var settingNumber = function(){
	
	for(var x = 5; x--;){
		for(var y = 5; y--;){
			if(	MASSARRAY[x][y].contents.className == "NumberObj"){
				MASSARRAY[x][y].contents.countMine();
			}
		}
	}	
} 