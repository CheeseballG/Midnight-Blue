//Javascript
var cookiecount = 0;
        var fights = 0;
        var timer = 2
        var robot = {health:10, defense:0, damage:3, healing:5}
            function Click() {
               cookiecount = cookiecount + 1
               document.getElementById('text').value = cookiecount; 
               Check();
            }
            function Check() {
                if (cookiecount == 50) {
                    if (fights == 0) {
                        if (timer>0) {
                            robot.health == robot.health + 5;
                        robot.defense == robot.defense + 1;
                        robot.damage == robot.damage + 2;
                        robot.healing == robot.healing + 5;
                        sessionStorage.setItem("robot", "health");
                        sessionStorage.setItem("robot", "damage");
                        sessionStorage.setItem("robot", "healing");
                        alert("The boss is here! Go to the other window to slay it!");
                        window.open("FightDay1.html");
                        fights++;
                        cookiecount == 0;
                         }
                        else {
                            alert("The boss is here! You were too slow, and now you're not as strong! Go fight!");
                            window.open("FightDay1.html");
                            fights++;
                            cookiecount == 0
                            sessionStorage.setItem("robot", "health");
                        sessionStorage.setItem("robot", "damage");
                        sessionStorage.setItem("robot", "healing");
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
            




//log when user clicks on png, then award them with scrap

// once goal is reached, send user to boss with stats

