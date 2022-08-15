const btn=document.getElementById("botao")
const texto=document.getElementById("texto")
const final=document.getElementById("final")

function random(){
    let i = Math.floor(Math.random()*22)
    taro.setAttribute("src",`./Cartas/${i}.png`)
    switch (i){
    case 0:
        texto.firstChild.nodeValue="The Fool is returned to the beginning of their journey by a lucky shot. Effect: All of the victim's Cyberware is rendered inoperable for one hour. Cyberlimbs that are rendered inoperable act as their meat counterparts do when they have been dismembered, but they still hang loosely. Should this leave a target without any ability to sense an opponent, any Check they make suffers an additional -4 modifier, as if obscured by smoke or darkness. If the victim has no Cyberware they instead suffer the Foreign Object Critical Injury and experience 3d6 Humanity Loss."
        final.firstChild.nodeValue="Feito por Nathan RDS 🤡"
        break;
    case 1:
        texto.firstChild.nodeValue="A battery sparks fire through The Magician’s power. Effect: The GM selects one of the victim's pieces of cyberware. That piece of cyberware is destroyed (although not beyond repair). Additionally, the victim is now Deadly On Fire (CP:R page 180). If the victim has no Cyberware, they are now Deadly on Fire, and one of their worn or held weapons malfunctions, requiring an Action to reverse the malfunction before it can be used again"
        final.firstChild.nodeValue="Feito por Nathan RDS 🧙‍♂️"
        break;
    case 2:
        texto.firstChild.nodeValue="The High Priestess guards the secret of poisoning from shrapnel. Effect: The victim suffers the Foreign Object Critical Injury, except instead of re-suffering Bonus Damage whenever they move further than 4 m/yds on foot in a Turn, they must instead beat a DV 15 Resist Torture/Drugs Skill Check or suffer 3d6 damage directly to their Hit Points."
        final.firstChild.nodeValue="Feito por Nathan RDS 🧙‍♀️"
        break;
    case 3:
        texto.firstChild.nodeValue="The Empress spreads blessings evenly amongst her childrens’ attacks. Effect: The music swells. The next three successful Attack Checks made against a single opponent in this combat are guaranteed to inflict Critical Injuries, no matter what the damage dice say. This applies to Light Melee Weapons but not Biotoxins, Poisons, Stun Batons, and other weapons normally incapable of causing a Critical Injury."
        final.firstChild.nodeValue="Feito por Nathan RDS 👸"
        break;
    case 4:
        texto.firstChild.nodeValue="The Emperor grants a Player the authority to shape the narrative. The GM selects a Player to choose one Critical Injury from the Head table (CP:R page 188), and one from the Body table (CP:R page 187). The victim suffers both of those Critical Injuries."
        final.firstChild.nodeValue="Feito por Nathan RDS 🤴"
        break;
    case 5:
        texto.firstChild.nodeValue="The Hierophant brings gifts, but requires a sacrifice to tradition. Effect: The Attack deals twice the amount of damage it would have done, after armor and any multipliers are taken into account. However, if it was made by a weapon, that weapon is destroyed beyond repair."
        final.firstChild.nodeValue="Feito por Nathan RDS 👨‍⚖️"
        break;
    case 6:
        texto.firstChild.nodeValue="The Lovers bring the combatants even closer together. Effect: This Attack now hits the head, even if it was originally aimed elsewhere. Additionally, if it was a Melee Attack that drew The Lovers, the victim is now considered to be defender in a grapple with the attacker."
        final.firstChild.nodeValue="Feito por Nathan RDS 💞"
        break;
    case 7:
        texto.firstChild.nodeValue="The Chariot offers the control required to strike true. Effect: The Attack finds a fortuitous flaw in the target's armor, which forms a gaping hole. The victim's armor in the damaged location is ablated by an additional 5 points, even if it was not penetrated by the Attack."
        final.firstChild.nodeValue="Feito por Nathan RDS 🏍"
        break;
    case 8:
        texto.firstChild.nodeValue="Strength empowers an attack with overwhelming force. Effect: The Attack deals an additional 25 damage. This additional damage is added to the rolled damage before armor SP is subtracted and/or any multipliers are calculated."
        final.firstChild.nodeValue="Feito por Nathan RDS 🦁"
        break;
    case 9:
        texto.firstChild.nodeValue="The Hermit forcibly invites you on a journey inward. Effect: The victim suffers the Lost Eye Critical Injury twice, although the penalty for the injury is only applied once. Should this leave a target without any ability to sense an opponent, any Skill Check they make suffers an additional -4 modifier, as if obscured by smoke or darkness"
        final.firstChild.nodeValue="Feito por Nathan RDS 🎅"
        break;
    case 10:
        texto.firstChild.nodeValue="Wheel of Fortune twists with forces outside of human control. Effect: The Attack goes wild. If it was a Ranged Attack, the GM randomly determines a new target to replace the intended target. If it was a Melee Attack, the person who caused Wheel of Fortune to be drawn immediately falls prone, and the Attack is considered a miss instead of a hit. Either way, any weapon used to make the Attack malfunctions, requiring an Action to reverse the malfunction before it can be used again."
        final.firstChild.nodeValue="Feito por Nathan RDS 🎡"
        break;
    case 11:
        texto.firstChild.nodeValue="Justice arrives to deliver piercing clarity and truth directly to the gut. Effect: The Attack knocks the wind out of the victim. For the next minute they suffer a -5 penalty to Evasion Skill Checks when attempting to avoid a Melee Attack and they cannot dodge Ranged Attacks at all."
        final.firstChild.nodeValue="Feito por Nathan RDS ⚔"
        break;
    case 12:
        texto.firstChild.nodeValue="The Hanged Man means sacrifice. Effect: The victim is knocked prone and suffers the Spinal Injury and Whiplash Critical Injuries."
        final.firstChild.nodeValue="Feito por Nathan RDS 🎣"
        break;
    case 13:
        texto.firstChild.nodeValue="Death is ever present, sudden, inevitable, and eternally transformative. Effect: The victim must immediately roll a single Death Save. If they fail, they are reduced to 0 HP and are knocked unconscious for one minute. Upon regaining consciousness, the victim regains 3d6 Humanity Points (up to their maximum Humanity) from the experience."
        final.firstChild.nodeValue="Feito por Nathan RDS 💀"
        break;
    case 14:
        texto.firstChild.nodeValue="Temperance requires a choice for which you'll find your own meaning. Effect: The victim must choose one of their limbs to suffer a Dismembered Critical Injury, and then must choose a different one of their limbs to suffer a Broken Critical Injury"
        final.firstChild.nodeValue="Feito por Nathan RDS 💉"
        break;
    case 15:
        texto.firstChild.nodeValue="The Devil exists to represent and punish your fear and excess. Effect: This Attack now hits the head, even if it was originally aimed elsewhere. Additionally, the victim suffers the Brain Injury and Lost Ear Critical Injuries."
        final.firstChild.nodeValue="Feito por Nathan RDS 😈"
        break;
    case 16:
        texto.firstChild.nodeValue="The Tower is a disaster that reveals hidden resilience when it falls. Effect: The victim suffers the Cracked Skull, Crushed Windpipe, and Whiplash Critical Injuries. These Injuries deal no Bonus Damage. For one hour, the victim cannot feel pain and can ignore the effects of the Seriously Wounded Wound State."
        final.firstChild.nodeValue="Feito por Nathan RDS 🏰"
        break;
    case 17:
        texto.firstChild.nodeValue="The Star represents an attack you can have faith in. Effect: If the Star was drawn due to a Ranged Attack, it hits the first target, passes through, and ricochets into a second enemy within 20 m/yards, chosen by the GM. If there is no additional enemy, the ricochet instead hits the original target a second time. This ricochet Attack always hits and does so in the body. Roll new damage dice for the ricochet Attack. If The Star was drawn due to a Melee Attack, the victim suffers the Broken Ribs and Collapsed Lung Critical Injuries."
        final.firstChild.nodeValue="Feito por Nathan RDS 🌟"
        break;
    case 18:
        texto.firstChild.nodeValue="The Moon shines over a vicious attack born of primal instinct. Effect: The victim suffers the Foreign Object Critical Injury twice, once in the body and once in the head. If The Moon was drawn by a Melee Attack made using a melee weapon, that weapon is now stuck in the victim's body, and the attacker is disarmed."
        final.firstChild.nodeValue="Feito por Nathan RDS 🌙"
        break;
    case 19:
        texto.firstChild.nodeValue="The Sun is a celebration of carnage that overcomes all obstacles. Effect: If the victim is carrying any grenades or other explosives, the GM chooses one of them to explode immediately . If they weren't carrying any grenades, the GM chooses a nonweapon piece of equipment on the victim to destroy beyond repair."
        final.firstChild.nodeValue="Feito por Nathan RDS ☀"
        break;
    case 20:
        texto.firstChild.nodeValue="Judgement is a painful awakening you might not walk away from. Effect: The victim suffers the Crushed Fingers Critical Injury on one of their hands, and the Dismembered Hand Critical Injury on another hand."
        final.firstChild.nodeValue="Feito por Nathan RDS ⚖"
        break;
    case 21:
        texto.firstChild.nodeValue="The World puts everything in perspective in a moment of understanding. Effect: The character who caused The World to be drawn may take an additional Turn after this one. During this additional Turn they receive a +5 to any Skill Check, ignore the negative effects of all Wound States, and do not have to make a Death Save if Mortally Wounded."
        final.firstChild.nodeValue="Feito por Nathan RDS 🌎"
        break;
    }
}

btn.addEventListener("click",random)