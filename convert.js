let celsius=document.getElementById("celsius");

 let farenhiet=document.getElementById("farenheit");
        function celltofar(){
            let output=(parseFloat(celsius.value)*9/5)+32;
            farenhiet.value=parseFloat(output.toFixed(2));
        }
        function fartocell(){
            let output=(parseFloat(farenhiet.value)-32)*5/9;
            celsius.value=parseFloat(output.toFixed(2));
            console.log(output)

                

        }

        farenheit