
    // Create Dino Constructor
    function Dino(dino) {
        this.species = dino.species,
        this.weight = dino.weight,
        this.height = dino.height,
        this.diet = dino.diet,
        this.fact = dino.fact;
    }

    // Create Dino Objects
    const dinoData = () => {
        return fetch("/dino.json")
        .then((res) => res.json())
        .then((data) => {
            return data.Dinos.map((dino) => {
                dino => new Dino(dino)
            });
        })
        .catch((error) => {
            console.log(error);
        });
    };

    // Create Human Object
    const human = {
        name: "",
        heightFeet: 0,
        heightInches: 0,
        weight: 0,
        diet: ""
    }
    // Use IIFE to get human data from form
    const button = document.getElementById("btn");
    button.addEventListener('click', function() {
        human.name = document.getElementById("name").value;
        human.heightFeet = document.getElementById("feet").value;
        human.heightInches = document.getElementById("inches").value;
        human.weight = document.getElementById("weight").value;
        human.diet = document.getElementById("diet").value;
        console.log(human);
    });

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    function compareWeight(dino, facts){
        const fact = "";
        if(dino.weight > human.weight){
            fact = "The " + dino.name + " is " + (dino.weight-human.weight) + " pounds heavier than you.";
        }
        else
        {
            fact = "You are " + (human.weight-dino.weight) + " pounds heavier than the " + dino.name + ".";
        }
        facts.push(fact);
    }
    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareHeight(dino, facts){
        const humanHeight = human.heightFeet*12 + human.heightInches;
        const fact = "";
        if(dino.height > humanHeight){
            fact = "The " + dino.name + " is " + (dino.height-humanHeight) + " inches taller than you.";
        }
        else
        {
            fact = "You are " + (humanHeight-dino.height) + " inches taller than the " + dino.name + ".";
        }
        facts.push(fact);
    }
    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareDiet(dino, facts){
        const fact = "";
        if(dino.diet.equals("carnivore")){
            fact = "The " + dino.name + " is a carnivore so watch out!";
        }
        else if(dino.diet.equals("omnivore"))
        {
            fact = "The " + dino.name + " is an omnivore so it can still eat you!";
        }
        else
        {
            fact = "The " + dino.name + " is a herbivore so don't worry!";
        }
        facts.push(fact);
    }

    // Generate Tiles for each Dino in Array
    function createTiles(){
        //creates anklyosaurus tile
        const dinoA = dinoData[2];
        const tileA = document.createElement("grid-item");
        const nameA = document.createElement("h3");
        const imageA = document.createElement("img");
        const factA = document.createElement("p");
        nameA.innerHTML = dinoA.name;
        imageA.src = 'images/anklyosaurus.png';
        const facts = [];
        facts.push(dinoA.fact);
        compareDiet(dinoA, facts);
        compareHeight(dinoA, facts);
        compareWeight(dinoA, facts);
        factA.innerHTML = facts[getRandom(4)];
        facts = [];
        document.getElementById("grid").appendChild(tileA);

        //creates brachiosaurus tile
        const dinoB = dinoData[3];
        const tileB = document.createElement("grid-item");
        const nameB = document.createElement("h3");
        const imageB = document.createElement("img");
        const factB = document.createElement("p");
        nameB.innerHTML = dinoB.name;
        imageB.src = 'images/brachiosaurus.png';
        facts.push(dinoB.fact);
        compareDiet(dinoB, facts);
        compareHeight(dinoB, facts);
        compareWeight(dinoB, facts);
        factB.innerHTML = facts[getRandom(4)];
        facts = [];
        document.getElementById("grid").appendChild(tileB);

        //creates elasmosaurus tile
        const dinoE = dinoData[5];
        const tileE = document.createElement("grid-item");
        const nameE = document.createElement("h3");
        const imageE = document.createElement("img");
        const factE = document.createElement("p");
        nameE.innerHTML = dinoE.name;
        imageE.src = 'images/elasmosaurus.png';
        facts.push(dinoE.fact);
        compareDiet(dinoE, facts);
        compareHeight(dinoE, facts);
        compareWeight(dinoE, facts);
        factE.innerHTML = facts[getRandom(4)];
        facts = [];
        document.getElementById("grid").appendChild(tileE);

        //creates pteranodon tile
        const dinoP = dinoData[6];
        const tileP = document.createElement("grid-item");
        const nameP = document.createElement("h3");
        const imageP = document.createElement("img");
        const factP = document.createElement("p");
        nameP.innerHTML = dinoP.name;
        imageP.src = 'images/pteranodon.png';
        facts.push(dinoP.fact);
        compareDiet(dinoP, facts);
        compareHeight(dinoP, facts);
        compareWeight(dinoP, facts);
        factP.innerHTML = facts[getRandom(4)];
        facts = [];
        document.getElementById("grid").appendChild(tileP);

        //creates human tile
        const tileH = document.createElement("grid-item");
        const nameH = document.createElement("h3");
        const imageH = document.createElement("img");
        nameH.innerHTML = human.name;
        imageH.src = 'images/human.png';
        document.getElementById("grid").appendChild(tileH);

        //creates stegosaurus tile
        const dinoS = dinoData[4];
        const tileS = document.createElement("grid-item");
        const nameS = document.createElement("h3");
        const imageS = document.createElement("img");
        const factS = document.createElement("p");
        nameS.innerHTML = dinoS.name;
        imageS.src = 'images/stegosaurus.png';
        facts.push(dinoS.fact);
        compareDiet(dinoS, facts);
        compareHeight(dinoS, facts);
        compareWeight(dinoS, facts);
        factS.innerHTML = facts[getRandom(4)];
        facts = [];
        document.getElementById("grid").appendChild(tileS);

        //creates triceratops tile
        const dinoTr = dinoData[0];
        const tileTr = document.createElement("grid-item");
        const nameTr = document.createElement("h3");
        const imageTr = document.createElement("img");
        const factTr = document.createElement("p");
        nameTr.innerHTML = dinoTr.name;
        imageTr.src = 'images/triceratops.png';
        facts.push(dinoTr.fact);
        compareDiet(dinoTr, facts);
        compareHeight(dinoTr, facts);
        compareWeight(dinoTr, facts);
        factTr.innerHTML = facts[getRandom(4)];
        facts = [];
        document.getElementById("grid").appendChild(tileTr);

        //creates tyrannosaurus tile
        const dinoTy = dinoData[1];
        const tileTy = document.createElement("grid-item");
        const nameTy = document.createElement("h3");
        const imageTy = document.createElement("img");
        const factTy = document.createElement("p");
        nameTy.innerHTML = dinoTy.name;
        imageTy.src = 'images/tyrannosaurus.png';
        facts.push(dinoTy.fact);
        compareDiet(dinoTy, facts);
        compareHeight(dinoTy, facts);
        compareWeight(dinoTy, facts);
        factTy.innerHTML = facts[getRandom(4)];
        facts = [];
        document.getElementById("grid").appendChild(tileTy);

        //creates pidgeon tile
        const dinoPi = dinoData[7];
        const tilePi = document.createElement("grid-item");
        const namePi = document.createElement("h3");
        const imagePi = document.createElement("img");
        const factPi = document.createElement("p");
        namePi.innerHTML = dinoPi.name;
        imagePi.src = 'images/pidgeon.png';
        factPi.innerHTML = dinoPi.fact;
        document.getElementById("grid").appendChild(tilePi);
    }
    // Add tiles to DOM
    button.addEventListener('click', createTiles());
    // Remove form from screen
    function removeForm() {
        const form = document.getElementById("dino-compare");
        form.style.display = 'none';
    }

// On button click, prepare and display infographic
button.addEventListener('click', removeForm());