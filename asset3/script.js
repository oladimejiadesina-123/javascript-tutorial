const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;

let choosenMaxLife = 100;
let currentMonsterHealth = choosenMaxLife;
let currentPlayerHealth = choosenMaxLife;

function attackMonster(mode) {
    let maxDamage;
    if(mode === 'ATTACK') {
        maxDamage = ATTACK_VALUE;
    }else if(mode === 'STRONg') {
        maxDamage = STRONG_ATTACK_VALUE
    }
}

function attackHandler() {
    const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);
    currentMonsterHealth -= damage;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage
    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You have won')
    } else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost')
    } else if(currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert('we have a draw')
    }
}

function strongAttackHandler() {
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage
    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You have won')
    } else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost')
    } else if(currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert('we have a draw')
    }
}
//start of code
function healPlayerHandler() {
    increasePlayerHealth(HEAL_VALUE)
}
function healPlayerHandler() {
    increasePlayerHealth(HEAL_VALUE);
    currentPlayerHealth += HEAL_VALUE
    endRound();
}
adjustHealthBars(choosenMaxLife)

attackBtn.addEventListener('click', attackHandler)
strongAttackBtn.addEventListener('click', strongAttackHandler)