var id = 100
if(true){
 var id = 200
}

console.log("id : ",id)

var flowers = ["marigold","lotus","lilly"]

flowers.forEach(flower => console.log(flower))

flowers.forEach(flower => {
    console.log(flower)
    console.log("flowers in the garden")
})

flowers.forEach(function(flower){
    console.log(flower)
})