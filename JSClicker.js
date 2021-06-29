//Javascript
var cookiecount = 0;
        var fights = 0;
            function Click() {
               cookiecount = cookiecount + 1
               document.getElementById('text').value = cookiecount; 
               Check();
            }
            function Check() {
                if (cookiecount == 50) {
                    if (fights == 0) {
                        alert("The boss is here! Go to the other window to slay it!")
                        window.open("FightDay1.html")
                        fights++
                    }
                }
                if (cookiecount == 250) {
                if (fights == 1) {
                    alert("The boss is here! Go to the other window to slay it!")
                    window.open = "robofight.html"
                    fights++

                    }
                }
                if (cookiecount == 500) {
                    if (fights == 2) {
                        alert("The boss is here! Go to the other window to slay it!")
                        window.open = "robofight.html"
                        fights++
                        cookiecount = 0
                    }
                }
                if (cookiecount == 1000) {
                    if (fights == 3) {
                        alert("The boss is here! Go to the other window to slay it!")
                        window.open = "robofight.html"
                        fights++
                        cookiecount = 0
                    }
                }
                if (fights == 4) {
                    alert("You did it! You win!")
                }
            }
            




//log when user clicks on png, then award them with scrap

// once goal is reached, send user to boss with stats

