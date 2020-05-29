
function validAnagram(str1,str2){
    if (str1.length != str2.length) return false
    let freqCount1={}
    let freqCount2={}

    for(let val of str1){
        freqCount1[val]= (freqCount1[val] || 0)+1
    }
    for(let val of str2){
        freqCount2[val]= (freqCount2[val] || 0)+1
    }
    for(let key in freqCount1){
        if(!(key in freqCount2)){
            return false
        }
        if(freqCount2[key] !== freqCount1[key]){
            return false
        }
    }
    return true
   
    return 
}

console.log(validAnagram('anagram','nagaram'))
console.log(validAnagram('anagram','fnagaram'))