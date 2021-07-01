//Javascript
var cookiecount = 0;
        var aboveTimer = false;
        var fight1Outcome = "placeholder"
        var fight1Outcome = sessionStorage.getItem("winner1")
        var fight2Outcome = "placeholder"
        var fight2Outcome = sessionStorage.getItem("winner2")
            function Click() {
               cookiecount = cookiecount + 1
               document.getElementById('text').value = cookiecount; 
               Check();
              
            }
            function Check() {
                if (cookiecount == 50) {
                    if (fight1Outcome !== "true") {
                        if (timeleft>0) {
                            aboveTimer = true;
                        sessionStorage.setItem("aboveTimer", "true");
                        alert("The boss is here! Go to the other window to slay it!");
                        window.open("FightDay1.html");
                        cookiecount == 0;
                        timeleft == 100
                         }
                        }
                        else {
                            if (fight1Outcome !== "true") {
                            aboveTimer = false;
                            sessionStorage.setItem("aboveTimer", "false");
                            alert("The boss is here! You were too slow, and now you're not as strong! Go fight!");
                            window.open("FightDay1.html");
                            cookiecount = 0;
                            timeleft = 100
                            }
                        }
                    };
                if (cookiecount == 100) {
                if (fight1Outcome == "true") {
                    if (fight2Outcome !== "true") {
                    if (timeleft>0) {
                        aboveTimer = true;
                            sessionStorage.setItem("aboveTimer", "true");
                    alert("The boss is here! Go to the other window to slay it!");
                    window.open("12pmFightDay2.html")
                    cookiecount = 0;
                            timeleft = 100
                    }
                    else {
                      if (fight2Outcome !== "true") {
                          aboveTimer = false;
                        sessionStorage.setItem("aboveTimer", "false");
                alert("The boss is here! You weren't fast enough to be stronger, but go fight anyway!");
                window.open("12pmFightDay2.html");
                cookiecount = 0;
                        timeleft = 100
                      }
                      }
                    }
                    }
                };
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

    function submit() {}
            




//log when user clicks on png, then award them with scrap

// once goal is reached, send user to boss with stats
