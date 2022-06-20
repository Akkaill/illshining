let scores = [2,4,7,9]
let targets = 11

const ill = (score,target)=>{
   for(let i=0; i<score.length;i++){
    for(let x=i+1;x<score.length;x++){
        if(score[i]+score[x] === target){
            console.log([i,x])
        }
        
    }

    
   }
    
     


}
ill(scores,targets)
