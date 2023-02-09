function m1(){
    console.log("m1 funtion")
}

m1()

const m2 = () => console.log("m1 funtion starting")
m2()

const m3 = (a) => console.log("m3 with parameter",a)
m3({id : 100,name : "seema"})

const m4 = ({id,name,salary}) => console.log("m4 with arguments",id,salary)
m4({id:200,name:"aarya",salary:80000})
