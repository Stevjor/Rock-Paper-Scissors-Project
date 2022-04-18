function computerPlay() {
    //Create a list of the names.
    const list = ["Rock", "Paper", "Scissors"];

    //I have to get a random variable from my list of names.
    //For this, I have to create a range from zero to the 
    //length of the list minus 1. Then, I have to pick a random
    //number between this range, and use it as an index for the 
    //list, and in this way, I can choose a random variable.
    let i = Math.floor(Math.random() * (list.length));
    let name = list[i];
    
    return name;
}

