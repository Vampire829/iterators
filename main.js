const iter = {
    start: 1,
    end: 10,
}
iter[Symbol.iterator]=function(){
     let current = this.start;
     let leson = this.end;
     return {
        next(){
            if(current <=leson){
                return {
                    done: false,
                    value: current++
                }
            }else{
                return {
                    done: true
                }
            }
        }
     }
}
for(let num of iter){
    console.log(num)
}