    

    var number1=456;
    var number2=1234;
    var result=number1+number2;

    var age = 14;
    var name = "joe";
    

    console.log("teacher jonny is awsome")

    console.log("result: ",result)
    
    function showAlert(){
        alert('hello world')
        alert(name)
    }
 function showPosition(position){
    const Positions= {
        Striker:{
            img: "",
            name:"Cristiano Ronaldo",
            description:'Striker (ST): The primary goal-scorer of the team, positioned closest to the opponents goal. Strikers focus on finishing scoring opportunities.',
        },
        midfielder:{
            img: "",
            name: "Luka Modric",
            description: "Central Midfielder (CM): Versatile players who can both defend and attack, central midfielders control the tempo of the game and distribute the ball to other players."
        },
        defender:{
            img: "",
            name: "Van Dijk",
            description:"Center-Back (CB): Positioned in the central part of the defense, center-backs are tasked with blocking shots, intercepting passes, and marking opposing attackers."
        },
        goalkeeper:{
            img: "",
            name:"Ter Stegan",
            description:"Goalkeeper (GK): The only player allowed to use their hands within the penalty area. The goalkeepers primary role is to prevent the opposing team from scoring by saving shots and commanding the defense."
        },
        Defensive_midfielder:{
           img: "",
           name: "Patrick Viera",
           description:"'Defensive Midfielder (CDM): Positioned in front of the defense, the defensive midfielder's role is to shield the defense, break up opposition plays, and often start attacks from deep positions."
        } ,
        Attacking_midfielder :{
            img: "img/zidane.jpg",
            name: "Zinedine Zidane",
            description:"'Attacking Midfielder(CAM):  Positioned closer to the forwards, the attacking midfielder focuses on creating goal-scoring opportunities through passes, dribbles, and shots."
        } ,
        Wide_Midfielder :{
            img: "",
            name: "Phil Foden",
            description: "Left midfielder (LM) and Right Midfielder (RM): Positioned on the sides of the midfield, wide midfielders provide width to the team's play, delivering crosses and supporting both the attack and defense."
        } ,
        Center_Forward:{
            img: "",
            name: "Pele",
            description: "Center-Forward (CF): Similar to a striker but may have additional roles such as holding up the ball and linking up play with midfielders."
        } ,
        Winger :{
            img: "img/neymar.jpg",
            name: "Neymar Junior",
            description:"(Left Winger (LW) and Right Winger (RW):  Positioned on the sides of the forward line, wingers use their speed and dribbling skills to deliver crosses and stretch the opponent's defense."
        }
    }

    document.getElementById('Position-img').src=Positions[position].img;
    document.getElementById('Position-name').innerText=Positions[position].name;
    document.getElementById('Position-description').innerText=Positions[position].description;
 }
