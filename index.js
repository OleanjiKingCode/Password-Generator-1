
    
                let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
        "/"];

        let char = characters.join('');


        let third = document.getElementById("thirdp");
        let forth = document.getElementById("forthp");

        function password(){

                const passwordChar = generate()
                const passwordChar2 = generate()

                third.innerHTML = passwordChar;
                forth.innerHTML = passwordChar2;
        }

        function generate (){

                let num = [];
                for(let i = 0; i < char.length; i++){
                        let randomOne = char[Math.floor( Math.random() * char.length )];
                        if (num.length != 15){
                                num.push(randomOne);
                        }
                }
                return num.join('')      

        }

        function copy(id) {
        var copyText =  document.getElementById(id);;
        navigator.clipboard.writeText(copyText.innerHTML);
        alert("Copied the Password " );
      }
  
