let rooms;
let player;
startGame();

function startGame() {
    //  скидываем комнаты на дефолт
    rooms = getRooms();
    player = getPlayer();
    // ИНТРО
    let text = "Welcome to the Room Adventure!";
    text += " You are " + player.name;
    text += " and you are in a house";
    text += " where many things are broken.";
    text += " Go from room to room";
    text += " to find the items you need";
    text += " to fix what's broken.";
    text += " Earn points for fixing things.";
    text += " There are " + player.itemsToFix;
    text += " things that need to be fixed.";
    text += " You start in the ";
    text += player.currentRoom.name + ".";
    text += " Good luck!";
    alert(text);
//НАЧАЛО ВОЛЧОК ПОШЕЛ
    moveToRoom();
}

function moveToRoom() {
    let direction = getDirection();
    if (direction) {
        player.currentRoom = rooms[direction];
        moveToRoom();
    }
}

// кнопки с action listener
function getDirection() {
    let text = "Which way do you want to go? ";
    let direction;
    while (!direction) {
        text += "There are exits: ";
        let north = player.currentRoom["north"];
        if (rooms[north]) {
            text += " north ";
        }
        let south = player.currentRoom["south"];
        if (rooms[south]) {
            text += " south ";
        }
        let east = player.currentRoom["east"];
        if (rooms[east]) {
            text += " east ";
        }
        let west = player.currentRoom["west"];
        if (rooms[west]) {
            text += " west ";
        }
        direction = prompt(text);

        if (direction === "name") {
            continue;
        }
        const exitTo = player.currentRoom[direction];

        if (rooms[exitTo]) {
            return exitTo;
        } else if (direction === "quit") {
            break;
        }
        text = "You can't go this way.";
        direction = null;
    }
}

function roomName() {
    let text = "";
    text += "You are in the ";
    text += player.currentRoom.name + ". ";
    alert(text);
}

function getPlayer() {
    const player = {
        name: "Bobka",
        score: 0,
        currentRoom: rooms["Hallway"],
        inventory: [],
        itemsToFix: 6,
        stressLvl: 0,
    };
    return player;
}

function getRooms() {

    let livingRoom = {
        name: "Living room",
        points: 10,
        brokenThing: "Remote controller",
        fixWith: "Batteries",
        itemFound: "Screwdriver",
        north: "Hallway",
        south: "Garden",
        east: "Bedroom",
        west: null,
    }
    let bedroom = {
        name: "Bedroom",
        points: 50,
        brokenThing: "Vase",
        fixWith: "Flowers",
        // itemFound: "Screwdriver",
        north: null,
        south: null,
        east: null,
        west: "Living room",
    }
    let livingRoom2 = {
        name: "Living room",
        north: "Dining room",
        south: "Garden",
        east: null,
        west: null,
    }
    let diningRoom = {
        name: "Dining room",
        points: 30,
        brokenThing: "Socket",
        fixWith: "Screwdriver",
        itemFound: "Glue",
        north: null,
        south: "Living room",
        east: "Hallway",
        west: null,
    }

    let WCroom = {
        name: "WC",
        points: 10,
        brokenThing: "Lamp",
        fixWith: "Light bulb",
        itemFound: "Plunger",
        north: null,
        south: "Hallway",
        east: null,
        west: null,
    }
    let bathroom = {
        name: "Bathroom",
        points: 20,
        brokenThing: "Sink",
        fixWith: "Plunger",
        itemFound: "Hairdryer",
        north: null,
        south: null,
        east: null,
        west: "Hallway2",
    }
    let pantry = {
        name: "Pantry room",
        points: 50,
        brokenThing: "Shelf",
        fixWith: "Screwdriver",
        itemFound: "Light bulb",
        north: null,
        south: null,
        east: null,
        west: "Hallway",
    }
    let hallway = {
        name: "Hallway",
        points: 15,
        brokenThing: "Photo-frame",
        fixWith: "Glue",
        itemFound: "Batteries",
        north: null,
        south: "Hallway2",
        east: "Pantry room",
        west: "WC",
    }
    let hallway2 = {
        name: "Hallway2",
        itemFound: "Flowers",
        north: "Hallway",
        south: "Living room",
        east: "Bathroom",
        west: null,
    }

    const rooms = {};
    rooms[livingRoom.name] = livingRoom;
    rooms[bedroom.name] = bedroom;
    rooms[diningRoom.name] = diningRoom;
    rooms[WCroom.name] = WCroom;
    rooms[bathroom.name] = bathroom;
    rooms[pantry.name] = pantry;
    rooms[hallway.name] = hallway;
    rooms[hallway2.name] = hallway2;
    return rooms;
}