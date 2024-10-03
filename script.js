    

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
            img: "img/Ronaldo.jpg",
            name:"Cristiano Ronaldo",
            description:'The primary goal-scorer of the team, positioned closest to the opponents goal. Strikers focus on finishing scoring opportunities.',
        },
        midfielder:{
            img: "img/Luka.webp",
            name: "Luka Modric",
            description: "Versatile players who can both defend and attack, central midfielders control the tempo of the game and distribute the ball to other players."
        },
        Defender:{
            img: "img/virgil.jpg",
            name: "Van Dijk",
            description:"Positioned in the central part of the defense, center-backs are tasked with blocking shots, intercepting passes, and marking opposing attackers."
        },
        Goalkeeper:{
            img: "img/Ter.jpg",
            name:"Ter Stegan",
            description:"The only player allowed to use their hands within the penalty area. The goalkeepers primary role is to prevent the opposing team from scoring by saving shots and commanding the defense."
        },
        Defensive_midfielder:{
           img: "img/Patrick.jpg",
           name: "Patrick Viera",
           description:"Positioned in front of the defense, the defensive midfielder's role is to shield the defense, break up opposition plays, and often start attacks from deep positions."
        } ,
        Attacking_midfielder :{
            img: "img/zidane.jpg",
            name: "Zinedine Zidane",
            description:"Positioned closer to the forwards, the attacking midfielder focuses on creating goal-scoring opportunities through passes, dribbles, and shots."
        } ,
        Wide_Midfielder :{
            img: "img/Foden.jpg",
            name: "Phil Foden",
            description: "Positioned on the sides of the midfield, wide midfielders provide width to the team's play, delivering crosses and supporting both the attack and defense."
        } ,
        Center_Forward:{
            img: "img/Pele.jpeg",
            name: "Pele",
            description: "Similar to a striker but may have additional roles such as holding up the ball and linking up play with midfielders."
        } ,
        Left_Winger:{
            img: "img/neymar.jpg",
            name: "Neymar Junior",
            description:" Positioned on the sides of the forward line, wingers use their speed and dribbling skills to deliver crosses and stretch the opponent's defense."
        } ,
        Left_Back:{
            img: "img/marcelo.jpg",
            name: "Marcelo",
            description: "Positioned on the sides of the defense, full-backs are responsible for preventing opposition wingers from advancing and often support the attack by overlapping and providing crosses."
        } ,
        Wing_Back:{
            img: "img/frimpong.jpg",
            name: "Jeremie_Frimponq",
            description:"Similar to full-backs but with a more offensive role, wing-backs are often used in formations with three center-backs and have responsibilities both in defense and attack."
        } ,
        Right_Winger:{
            img: "img/messi.jpg",
            name: "Lionel_Messi",
            description:"Playing as a right winger (RW) in soccer requires a balance of pace, dribbling ability, and tactical intelligence. Your primary role is to stretch the opposition's defense by staying wide and making runs down the right flank, creating space for your teammates in the center. You'll need to excel in 1v1 situations, using your speed and skill to beat defenders and deliver accurate crosses into the box. Additionally, you should know when to cut inside, either to take a shot or to link up with the forwards, and when to stay wide and provide width. Defensive responsibilities include tracking back to help your right-back and applying pressure to the opposing left-back to disrupt their play. Overall, the right winger must be versatile, combining offensive flair with defensive discipline.."
        },
        Left_Midfielder:{
            img: "img/Mane.jpg",
            name: "Sadio_Mane",
            description:"Playing as a left midfielder (LM) in soccer requires a combination of attacking and defensive responsibilities. As an LM, your primary role is to provide width on the left flank, supporting both offensive and defensive plays. Offensively, you’ll need to make overlapping runs, deliver accurate crosses into the box, and link up with the forwards and central midfielders. Good ball control, dribbling skills, and speed are essential for beating defenders and creating scoring opportunities. Defensively, it’s crucial to track back and assist your left-back by marking opponents, intercepting passes, and tackling when necessary. Positional awareness, stamina, and good communication with teammates are key to excelling in this role."
        },
        Right_back:{
                img: "img/alves.jpg",
                name: "Dani_Alves",
                description:"Playing as a right back (RB) in soccer requires strong defensive skills and the ability to contribute to attacks when needed. As an RB, your main responsibility is to defend your team's right flank, marking opposing wingers, preventing crosses, and making tackles or interceptions. You must stay compact with your defensive line but also be quick to close down attackers. Offensively, you are expected to support the midfield by making overlapping runs, delivering accurate crosses into the box, and helping to transition the ball from defense to attack. Speed, stamina, good positioning, and strong communication with your center-backs and right midfielder are essential to succeed in this role.."
        },
        Right_Midfielder:{
                img: "img/garrincha.jpg",
                name: "Garrincha",
                description:"Playing as a right back (RB) in soccer requires strong defensive skills and the ability to contribute to attacks when needed. As an RB, your main responsibility is to defend your team's right flank, marking opposing wingers, preventing crosses, and making tackles or interceptions. You must stay compact with your defensive line but also be quick to close down attackers. Offensively, you are expected to support the midfield by making overlapping runs, delivering accurate crosses into the box, and helping to transition the ball from defense to attack. Speed, stamina, good positioning, and strong communication with your center-backs and right midfielder are essential to succeed in this role.."
        },
        Left_Wing_Back:{
                img: "img/cafu.jpg",
                name: "Cafu",
                description:"Playing as a right back (RB) in soccer requires strong defensive skills and the ability to contribute to attacks when needed. As an RB, your main responsibility is to defend your team's right flank, marking opposing wingers, preventing crosses, and making tackles or interceptions. You must stay compact with your defensive line but also be quick to close down attackers. Offensively, you are expected to support the midfield by making overlapping runs, delivering accurate crosses into the box, and helping to transition the ball from defense to attack. Speed, stamina, good positioning, and strong communication with your center-backs and right midfielder are essential to succeed in this role.."
        },
                Centre_Back:{
                    img: "img/ramos.jpg",
                    name: "Sergio_Ramos",
                    description:"Positioned in the central part of the defense, center-backs are tasked with blocking shots, intercepting passes, and marking opposing attackers."
}
    }
 

    document.getElementById('Position-img').src=Positions[position].img;
    document.getElementById('Position-name').innerText=Positions[position].name;
    document.getElementById('Position-description').innerText=Positions[position].description;
}
