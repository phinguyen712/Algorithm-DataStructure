//entrance fee to parking lot 2
//first full partial hour cost 3
//each successive full or partial costs 4
(function(){
	var e = "9:42";
	var l = "11:42";
	
	function ticket(e,l){
		var entranceFee = 2;
		var firstHourFee = 3;
		var successiveFee = 4;

		//query strings into minutes
		e = timeToMinutes(e);
		l = timeToMinutes(l);

		var timeInParking = l - e;
		//calculate and returncost of ticket
		if(timeInParking < 60){
			return entranceFee;
		}else if(timeInParking === 60){
			return entranceFee + firstHourFee;
		}else{
			var extraTime = Math.ceil(((timeInParking - 60)/60));
			return entranceFee + firstHourFee + extraTime*successiveFee;
		}
	}
	//convert clock time to minutes
	function timeToMinutes(time){
		time  = time.split(":");
		time = time.map(function(i){
			return parseInt(i);
		});
		return  time[0]*60 + time[1];
	}

})();
