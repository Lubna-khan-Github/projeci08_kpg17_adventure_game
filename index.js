import inquirer from "inquirer";
// --------------------- VARIABLES ---------------------//
let enemies = ["skeleton", "zombie", "warrior", "assassin"];
let enemyHealth = 75;
let damageHero = 25;
// ---------------- PLAYER VARIBALE --------------------//
let heroHealth = 100;
let damageEnemy = 50;
let healthPotion = 3;
let potionAmount = 30;
let dropHealthPotion = 50;
// ------------------- WHILE LOOP -------------------------//
let gameRun = true;
console.log("Welcome to dead zone:");
Game: while (gameRun) {
    let enemiesHealth = Math.floor(Math.random() * enemyHealth + 1);
    let enemyIndex = Math.floor(Math.random() * enemies.length);
    let enemy = enemies[enemyIndex];
    console.log(`# ${enemy} has appeard #\n`);
    while (enemiesHealth > 0) {
        console.log(`your health ${heroHealth}`);
        console.log(`${enemy} health  ${enemiesHealth}`);
        let options = await inquirer.prompt({
            name: "ans",
            message: "what would you like to do ?",
            type: "list",
            choices: ["Attack", "Take health potion", "Run"],
        });
        if (options.ans === "Attack") {
            let damageEnemy = 50;
            let attackEnemy = Math.floor(Math.random() * damageEnemy + 1);
            let attackHero = Math.floor(Math.random() * damageHero + 1);
            enemiesHealth -= attackEnemy;
            heroHealth -= attackHero;
            console.log(`you strike the ${enemy} for ${attackEnemy}`);
            console.log(`${enemy} strike you for ${attackHero} damage.`);
            if (heroHealth < 1) {
                console.log("you have taken too much damage. ");
                break;
            }
        }
        else if (options.ans === "Take health potion") {
            if (healthPotion > 0) {
                heroHealth += potionAmount;
                healthPotion--;
                console.log(`you use healht potion for ${potionAmount}`);
                console.log(`you now have ${heroHealth} health`);
                console.log(`you have ${healthPotion} health potions left`);
            }
            else {
                console.log("defeat enemy for a chance to get health potion");
            }
        }
        else if (options.ans === "Run") {
            console.log(`you run away from ${enemy}`);
            continue Game;
        }
    }
    if (heroHealth < 1) {
        console.log("you are out of battle. you are too weak.");
        break;
    }
    console.log(`${enemy} was defeated `);
    console.log(`you have ${heroHealth} health`);
    let randomNum = Math.floor(Math.random() * 100 + 1);
    if (randomNum < dropHealthPotion) {
        healthPotion++;
        console.log("enemy give you health potion");
        console.log(`your health is ${heroHealth}`);
        console.log(`your health potion is ${healthPotion}`);
    }
    let useroption = await inquirer.prompt({
        name: "ans",
        message: "what would you like to do now",
        type: "list",
        choices: ["continue", "Exit"],
    });
    if (useroption.ans === "continue") {
        console.log("Are you continue your adventure");
    }
    else {
        console.log("you exit from deadzone");
        break;
    }
    console.log("Thank you for playing. \n");
}
