
_1.Find all the zip codes in Iowa state._
```
db.zips.aggregate([
    {$match: {state: "IA"}},
    {$project: {_id: 1}}
]);
```
_2.Find all the zip codes with a population more than 1000._
```
db.zips.aggregate([
    {$match: {pop: {$gt: 500}},
    {$project: {_id: 1}}
]);
```
_3.Find all cities that have more than one zip code, sort the results based by state and city name._
```
db.zips.aggregate([
    {
    	$group: {
    		_id: {state: "$state", city: "$city"}, 
    		zips: {$addToSet: "$_id"}
    	}
    },
    {
    	$project: {
	    	_id: 0,
			state: "$_id.state",
			city: "$_id.city",
			zips: 1
		}
	}
]);
```
_4.Display the least populated city in each state_
```
db.zips.aggregate([
    {$group: {_id: {state: "$state", city: "$city"}, population: {$sum: "$pop"}}},
    {$sort: {"_id.state": 1, "population": -1}},
    {$group: {_id: "$_id.state", city: {$last: "$_id.city"}, population: {$last: "$population"}}},
    {$sort: {"_id": 1}}
]);
```