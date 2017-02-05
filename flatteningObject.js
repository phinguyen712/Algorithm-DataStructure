// {
//   'Key1': '1',
//   'Key2': {
//     'a' : '2',
//     'b' : '3',
//     'c' : {
//       'd' : '3',
//       'e' : '1'
//       }
//     }
// }
//
// {
//   'Key1': '1',
//   'Key2.a': '2',
//   'Key2.b' : '3',
//   'Key2.c.d' : '3',
//   'Key2.c.e' : '1'
// }


(function(){
	const data = 	{
		"Key1": "1",
		"Key2": {
			"a": "2",
			"b" : "3",
			"c" : {
				"d" : "3",
				"e" : "1"
			}
		}
	};

	console.log(flattenObjects(data));


	function flattenObjects(data){

		let results = {};

		recursion(data);

		return results;

		function recursion(data,prevKey){
			for(const key in data){
				if( typeof data[key] === "object" ){
					let newKey = (prevKey)? prevKey +"." + key : key ;
					recursion(data[key],newKey);
				}else{
					//base case
					let leaf = (prevKey)? prevKey + "." + key: key ;
					results[leaf] = data[key];

				}
			}
			//base case
		}
	}


})();
