    

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
    const Positions={
        Striker:{
            img:'',
            name:'Cristiano Ronaldo',
            description:'Striker (ST): The primary goal-scorer of the team, positioned closest to the opponent's goal. Strikers focus on finishing scoring opportunities.',
        },
        midfielder:{
            img:'',
            name:'Luka Modric',
            description:'Central Midfielder (CM): Versatile players who can both defend and attack, central midfielders control the tempo of the game and distribute the ball to other players.',
        },
        defender:{
            img:'',
            name:'Van Dijk',
            description:'Center-Back (CB): Positioned in the central part of the defense, center-backs are tasked with blocking shots, intercepting passes, and marking opposing attackers.',
        },
        goalkeeper:{
            img:'',
            name:'Ter Stegan',
            description:'Goalkeeper (GK): The only player allowed to use their hands within the penalty area. The goalkeeper's primary role is to prevent the opposing team from scoring by saving shots and commanding the defense.',
       } 
    };

    document.getElementById('Position-img').src=Positions[position].img;
    document.getElementById('Position-name').innerText=Positions[position].name;
    document.getElementById('Position-discription').innerText=Positions[position].discription;
 }
