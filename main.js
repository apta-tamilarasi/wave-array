let a=[1,2,3,4,5,6,7,8]
let b=[]
let i=0
let j=1
let tem
 while (i<a.length && j<a.length){
	b.push(a[j])
	b.push(a[i])
	i+=2
	j+=2
 }
 a=[...b]
 document.write("ANSWER IS : ", a)