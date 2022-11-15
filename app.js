
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
    button.addEventListener('click', (function() {
        human.name = document.getElementById("name").value;
        human.heightFeet = document.getElementById("feet").value;
        human.heightInches = document.getElementById("inches").value;
        human.weight = document.getElementById("weight").value;
        human.diet = document.getElementById("diet").value;
    })());
    console.log(human);

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    function compare1(){
            
    }
    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compare2(){
        
    }
    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compare3(){
        
    }

    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
