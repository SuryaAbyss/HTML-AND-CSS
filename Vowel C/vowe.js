function checkVowels(){
    var text = document.getElementById("inputText").value;
    var vowelCount = 0;
    
    text = text.toLowerCase();

    for(var i = 0; i < text.length; i++){
        var char = text.charAt(i);
        if(isVowel(char)){
            vowelCount++;
        }
    }

    var result = document.getElementById("result");
    result.textContent = "Total Vowels: " + vowelCount;
}

function isVowel(char){
    var vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(char);
}
