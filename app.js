
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

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
