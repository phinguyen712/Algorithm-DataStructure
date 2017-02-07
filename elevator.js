//write  function to calculate the number of stops needed by an elevator
//person --> A[k]  = weight  B[k] floor
//Number of ppl on the floor = index of k
//elevator person capacity is X
//elevator weight capacity is  Y
//elevator max floor is M
(function(){
	const x = 5;
	const y = 200;
	const a = [2,2,5,6,23,2,3,5,6,3];
	const b = [60,80,40,30,25,15,200,80,90,120];

	let el = new Elevator(x,y);
	//calculate how many stops the elevator will make
	function calculateStops(X,Y,A,B){
		//number of people waiting in line
		let queue = [];
		//ush all person in a new array
		A.forEach((floor,i)=>{
			const person = {floor:floor, weight:B[i]};
			queue.push(person);
		});
		//llop through every person and put them in elevator if under max capacity
		for(let x = 0 ; x < queue.length ; x++){
			if(el.numberPeopleInEl < el.peopleCapacity || el.weightOfEl < el.weightCapacity){
				const person = queue.splice(x,1);
				el.add(person[0]);
				x--;
			}else{
				//drop drop people off their floors if elevator is full
				el.dropPeopleOff();
			}
		}
		//drop off last batch of people
		el.dropPeopleOff();
		//return number of stops
		return el.stops;
	}

	//constructor for Elevator
	function Elevator(X,Y){
		//elevator capacity
		this.peopleCapacity = X;
		this.weightCapacity = Y;
		//current weight and number of people in Elevator
		this.numberPeopleInEl = 0;
		this.weightOfEl = 0;
		//array of objects containing weight and floors for each person
		this.peopleInEl = [];
		//counter for how many stops
		this.stops = 0;
	}

	//method of add people into Elevator
	Elevator.prototype.add = function(person){
		this.peopleInEl.push(person);
			this.weightOfEl += person.weight;
		this.numberPeopleInEl++;
	};

	//method for dropping people off their floors
	Elevator.prototype.dropPeopleOff = function(){
		//Check who is going to the same floor by creating a hash table
		if(this.peopleInEl != 0){
			let hashTable = {};

			this.peopleInEl.forEach(function(person){
				if(hashTable[person.floor]){
					hashTable[person.floor] += 1 ;
				}else{
					hashTable[person.floor] = 1;
				}
			});
			for(const floor in hashTable){
				if(hashTable.hasOwnProperty(floor)){
					this.stops++;
				}
			}
			//counter for number of stops
			this.stops++;
			//clear elevator data to represent finish unloading of everyone in
			//elevator
			this.numberOfPeopleInEl = 0;
			this.weightOfEl = 0;
			this.peopleInEl = [];
		}
	};

	console.log(calculateStops(x,y,a,b));

})();
