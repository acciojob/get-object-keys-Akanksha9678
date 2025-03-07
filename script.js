//your JS code here. If required.
let student={
	name:"akanksha",
	age:23,
	city:"allahabad"
}
let arr=[];
function getKeys(student){
	let a=Object.Keys(student)
	arr=[...a]
	return arr
}