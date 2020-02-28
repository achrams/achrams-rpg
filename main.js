var chardata = {

    name: '',
    job: '',
    lvl: 0,
    healthpoint: 0,
    attack: 0,
    defense: 0,
    dodge: 0,
    exp: 0
}

var momondata = {

    name: 'ghoul',
    hp: 500,
    attack: 56,
    money: 100

}



var temp = momondata.hp;
var explvlup = 1000;
var health = 0;


document.getElementById("knight").addEventListener('click', function() {
    chardata.name = 'Legion Commander';
    chardata.job = 'Knight';
    chardata.lvl = 1;
    chardata.healthpoint = 1000;
    chardata.attack = 120;
    chardata.defense = 300;
    chardata.dodge = 80;
    chardata.money = 500;
    health = 1000;
    document.getElementById("dataTable").style.display = 'block';
    document.getElementById("gameintro").style.display = 'none';
    document.getElementById("classes").style.display = 'none';
    document.getElementById("char_name").textContent = chardata.name;
    document.getElementById("char_job").textContent = 'Job : ' + chardata.job;
    document.getElementById("char_lvl").textContent = 'Level : ' + chardata.lvl;
    document.getElementById("char_hp").textContent = `HP : ${health}  /  ${chardata.healthpoint}`;
    document.getElementById("char_atk").textContent = 'Attack : ' + chardata.attack;
    document.getElementById("char_deff").textContent = 'Defense : ' + chardata.defense;
    document.getElementById("char_dodge").textContent = 'Dodge : ' + chardata.dodge;
    document.getElementById("char_money").textContent = 'Money : ' + chardata.money;


});

document.getElementById("ranger").addEventListener('click', function ranger_init() {

    chardata.name = 'Drow Ranger';
    chardata.job = 'Ranger';
    chardata.lvl = 1;
    chardata.healthpoint = 600;
    chardata.attack = 260;
    chardata.defense = 100;
    chardata.dodge = 160;
    chardata.money = 500;
    health = 600;
    document.getElementById("dataTable").style.display = 'block';
    document.getElementById("gameintro").style.display = 'none';
    document.getElementById("classes").style.display = 'none';
    document.getElementById("char_name").textContent = chardata.name;
    document.getElementById("char_job").textContent = 'Job : ' + chardata.job;
    document.getElementById("char_lvl").textContent = 'Level : ' + chardata.lvl;
    document.getElementById("char_hp").textContent = `HP : ${health}  /  ${chardata.healthpoint}`;
    document.getElementById("char_atk").textContent = 'Attack : ' + chardata.attack;
    document.getElementById("char_deff").textContent = 'Defense : ' + chardata.defense;
    document.getElementById("char_dodge").textContent = 'Dodge : ' + chardata.dodge;
    document.getElementById("char_money").textContent = 'Money : ' + chardata.money;


});

document.getElementById("mage").addEventListener('click', function mage_init() {

    chardata.name = 'Lina Inverse';
    chardata.job = 'Mage';
    chardata.lvl = 1;
    chardata.healthpoint = 400;
    chardata.attack = 360;
    chardata.defense = 80;
    chardata.dodge = 120;
    chardata.money = 500;
    health = 400;
    document.getElementById("dataTable").style.display = 'block';
    document.getElementById("gameintro").style.display = 'none';
    document.getElementById("classes").style.display = 'none';
    document.getElementById("char_name").textContent = chardata.name;
    document.getElementById("char_job").textContent = 'Job : ' + chardata.job;
    document.getElementById("char_lvl").textContent = 'Level : ' + chardata.lvl;
    document.getElementById("char_hp").textContent = `HP : ${health}  /  ${chardata.healthpoint}`;
    document.getElementById("char_atk").textContent = 'Attack : ' + chardata.attack;
    document.getElementById("char_deff").textContent = 'Defense : ' + chardata.defense;
    document.getElementById("char_dodge").textContent = 'Dodge : ' + chardata.dodge;
    document.getElementById("char_money").textContent = 'Money : ' + chardata.money;

});


document.getElementById("dungeon").addEventListener('click', function() {
    temp = 500;
    document.getElementById("momon").style.display = 'block';

    document.getElementById("momon_name").textContent = momondata.name;
    document.getElementById("momon_hp").textContent = `HP : ${temp}  /  ${momondata.hp}`;
    document.getElementById("battle_interaction").textContent = `-`;

});
document.getElementById("hit_button").addEventListener('click', function() {
    if (temp <= chardata.attack) {
        alert("you killed the monster")
        document.getElementById("momon").style.display = 'none';
        document.getElementById("dungeon").style.display = 'block';
        chardata.money += 150;
        chardata.exp += 800;
        document.getElementById("char_hp").textContent = `HP : ${health}  /  ${chardata.healthpoint}`;
        document.getElementById("char_money").textContent = 'Money : ' + chardata.money;
    }
    if (chardata.exp >= explvlup) {

        alert("lvl up")
        chardata.exp = 0;
        chardata.lvl += 1;
        chardata.attack += 5;
        chardata.defense += 5;
        chardata.dodge += 5;
        chardata.healthpoint += 50;
        explvlup += 1000;
        health += 50;
        document.getElementById("char_lvl").textContent = 'Level : ' + chardata.lvl;
        document.getElementById("char_hp").textContent = `HP : ${health}  /  ${chardata.healthpoint}`;
        document.getElementById("char_atk").textContent = 'Attack : ' + chardata.attack;
        document.getElementById("char_deff").textContent = 'Defense : ' + chardata.defense;
        document.getElementById("char_dodge").textContent = 'Dodge : ' + chardata.dodge;
        document.getElementById("char_money").textContent = 'Money : ' + chardata.money;

    }
    document.getElementById("battle_interaction").textContent = `you dealt ${chardata.attack} to the enemy and received ${momondata.attack} damage`;
    document.getElementById("momon_hp").textContent = `
    HP: ${ temp -= chardata.attack }
    /  ${momondata.hp}`;
    health -= momondata.attack;
    document.getElementById("char_hp").textContent = `HP : ${health}  /  ${chardata.healthpoint}`;
    if (health <= 0) {
        alert("GAME OVER. YOU'RE DEAD!");
        location.reload();
    }


});

document.getElementById("cancel_button").addEventListener('click', function() {

    document.getElementById("momon").style.display = 'none';
    document.getElementById("dungeon").style.display = 'block';


});

document.getElementById("shop").addEventListener('click', function() {

    document.getElementById("action_panel").style.display = 'none';
    document.getElementById("shop").style.display = 'none';
    document.getElementById("itemlist").style.display = 'block'
    document.getElementById("cancel_buy").style.display = 'block'

});

document.getElementById("potion").addEventListener('click', function() {
    if (health == chardata.healthpoint) {
        alert("HP is Full")
    } else if (chardata.money >= 100) {
        health += 250;
        chardata.money -= 100;
        if (health > chardata.healthpoint) {
            health = chardata.healthpoint;
        }
        document.getElementById("char_hp").textContent = `HP : ${health}  /  ${chardata.healthpoint}`;
        document.getElementById("char_money").textContent = 'Money : ' + chardata.money;
    } else if (chardata.money < 100) {
        alert("Not Enough Money");
    }
});

document.getElementById("cancel_buy").addEventListener('click', function() {
    document.getElementById("action_panel").style.display = 'block';
    document.getElementById("shop").style.display = 'block';
    document.getElementById("itemlist").style.display = 'none'
    document.getElementById("cancel_buy").style.display = 'none'


});