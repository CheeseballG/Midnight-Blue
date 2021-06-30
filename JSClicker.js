//Javascript
var cookiecount = 0;
        var fights = 0;
        var timer = 0
        var robot = {health:10, defense:0, damage:3, healing:5}
        var aboveTimer = false;
            function Click() {
               cookiecount = cookiecount + 1
               document.getElementById('text').value = cookiecount; 
               Check();
            }
            function Check() {
                if (cookiecount == 50) {
                    if (fights == 0) {
                        if (timer>0) {
                            aboveTimer = true;
                        sessionStorage.setItem("aboveTimer", "true");
                        alert("The boss is here! Go to the other window to slay it!");
                        window.open("FightDay1.html");
                        fights++;
                        cookiecount == 0;
                         }
                        else {
                            aboveTimer = false;
                            sessionStorage.setItem("aboveTimer", "false");
                            alert("The boss is here! You were too slow, and now you're not as strong! Go fight!");
                            window.open("FightDay1.html");
                            fights++;
                            cookiecount == 0
                        }
                    }
                }
                if (cookiecount == 100) {
                if (fights == 1) {
                    alert("The boss is here! Go to the other window to slay it!")
                    window.open("robofight.html")
                    fights++

                    }
                }
                if (cookiecount == 150) {
                    if (fights == 2) {
                        alert("The boss is here! Go to the other window to slay it!")
                        window.open("robofight.html")
                        fights++
                        cookiecount = 0
                    }
                }
                if (cookiecount == 250) {
                    if (fights == 3) {
                        alert("The boss is here! Go to the other window to slay it!")
                        window.open("robofight.html")
                        fights++
                        cookiecount = 0
                    }
                }
                if (fights == 4) {
                    alert("You did it! You win!")
                }
            }

            //timer code
            var timeleft = 60;
    var cookieTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(cookieTimer);
    },1000);
            




//log when user clicks on png, then award them with scrap

// once goal is reached, send user to boss with stats