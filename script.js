const btn=document.getElementById("botao")
const texto=document.getElementById("texto")
const descricao=document.getElementById("descricao")
const final=document.getElementById("final")

function random(){
    let i = Math.floor(Math.random()*22)
    taro.setAttribute("src",`./Cartas/${i}.png`)
    switch (i){
    case 0:
        texto.firstChild.nodeValue="The Fool is returned to the beginning of their journey by a lucky shot. Effect: All of the victim's Cyberware is rendered inoperable for one hour. Cyberlimbs that are rendered inoperable act as their meat counterparts do when they have been dismembered, but they still hang loosely. Should this leave a target without any ability to sense an opponent, any Check they make suffers an additional -4 modifier, as if obscured by smoke or darkness. If the victim has no Cyberware they instead suffer the Foreign Object Critical Injury and experience 3d6 Humanity Loss."
        descricao.firstChild.nodeValue="'The Fool is everyone - including you and me. Each step he takes on his journey feels like stepping into a brave new world. Ultimately, the journey will change him. But as the card shows, he's a trustworthy lad whose tireless hope drives him toward his goal.'"
        final.firstChild.nodeValue="Made by Nathan RDS 🤡"
        break;
    case 1:
        texto.firstChild.nodeValue="A battery sparks fire through The Magician’s power. Effect: The GM selects one of the victim's pieces of cyberware. That piece of cyberware is destroyed (although not beyond repair). Additionally, the victim is now Deadly On Fire (CP:R page 180). If the victim has no Cyberware, they are now Deadly on Fire, and one of their worn or held weapons malfunctions, requiring an Action to reverse the malfunction before it can be used again"
        descricao.firstChild.nodeValue="'The Magician is the card of self-confidence and adapting to situations through intellect and sheer will. The Magician is a schemer who always has one last trick up his sleeve, who despite everything manages to stay afloat and remain in control of his own destiny."
        final.firstChild.nodeValue="Made by Nathan RDS 🧙‍♂️"
        break;
    case 2:
        texto.firstChild.nodeValue="The High Priestess guards the secret of poisoning from shrapnel. Effect: The victim suffers the Foreign Object Critical Injury, except instead of re-suffering Bonus Damage whenever they move further than 4 m/yds on foot in a Turn, they must instead beat a DV 15 Resist Torture/Drugs Skill Check or suffer 3d6 damage directly to their Hit Points."
        descricao.firstChild.nodeValue="'The High Priestess is a card of mystery. It shows how all our secrets hang by a delicate thread and the struggle between common sense and intuition. The High Priestess symbolizes the cold, calm waters as well as the mysteries hidden in their depths.'"
        final.firstChild.nodeValue="Made by Nathan RDS 🧙‍♀️"
        break;
    case 3:
        texto.firstChild.nodeValue="The Empress spreads blessings evenly amongst her childrens’ attacks. Effect: The music swells. The next three successful Attack Checks made against a single opponent in this combat are guaranteed to inflict Critical Injuries, no matter what the damage dice say. This applies to Light Melee Weapons but not Biotoxins, Poisons, Stun Batons, and other weapons normally incapable of causing a Critical Injury."
        descricao.firstChild.nodeValue="'The empress is a card of femininity and motherhood. She is authoritative, knows what she wants, and exhibits refinement and sensuousness. The Empress symbolizes creativity and growth, and instructs us not to dismiss our unconscious impulses, but to trust our intuition.'"
        final.firstChild.nodeValue="Made by Nathan RDS 👸"
        break;
    case 4:
        texto.firstChild.nodeValue="The Emperor grants a Player the authority to shape the narrative. The GM selects a Player to choose one Critical Injury from the Head table (CP:R page 188), and one from the Body table (CP:R page 187). The victim suffers both of those Critical Injuries."
        descricao.firstChild.nodeValue="'The Emperor represents patriarchal control and is pleased with the authority and power he possesses to shape the future. The Emperor makes the rules and enforces them for the common good. But prestige has its dark sides – the Emperor is dominating and ruthless and will climb over a mountain of bodies to achieve his aim.'"
        final.firstChild.nodeValue="Made by Nathan RDS 🤴"
        break;
    case 5:
        texto.firstChild.nodeValue="The Hierophant brings gifts, but requires a sacrifice to tradition. Effect: The Attack deals twice the amount of damage it would have done, after armor and any multipliers are taken into account. However, if it was made by a weapon, that weapon is destroyed beyond repair."
        descricao.firstChild.nodeValue="'The Hierophant symbolizes a respect for tradition. It represents one who tries to maintain the established order, even though their very character is shaped by it. The Hierophant places his faith in institutions – for the alternative is pure chaos. Only by placing his faith in order can he draw strength.'"
        final.firstChild.nodeValue="Made by Nathan RDS 👨‍⚖️"
        break;
    case 6:
        texto.firstChild.nodeValue="The Lovers bring the combatants even closer together. Effect: This Attack now hits the head, even if it was originally aimed elsewhere. Additionally, if it was a Melee Attack that drew The Lovers, the victim is now considered to be defender in a grapple with the attacker."
        descricao.firstChild.nodeValue="'The Lovers is the card of dichotomies. It points to the contradictions that clash within each of us and of the challenge of striking a balance between extremes. The Lovers is also the card of dilemmas, like The Fool who stands at the crossroads, unable to make his choice.'"
        final.firstChild.nodeValue="Made by Nathan RDS 💞"
        break;
    case 7:
        texto.firstChild.nodeValue="The Chariot offers the control required to strike true. Effect: The Attack finds a fortuitous flaw in the target's armor, which forms a gaping hole. The victim's armor in the damaged location is ablated by an additional 5 points, even if it was not penetrated by the Attack."
        descricao.firstChild.nodeValue="'The Chariot is always charging ahead despite being pulled by its steeds in opposite directions. The rider who steers it constantly reins in the light and dark sides of the soul with the help of Reason. To ride in The Chariot is to experience highs and lows – ups and downs.'"
        final.firstChild.nodeValue="Made by Nathan RDS 🏍"
        break;
    case 8:
        texto.firstChild.nodeValue="Strength empowers an attack with overwhelming force. Effect: The Attack deals an additional 25 damage. This additional damage is added to the rolled damage before armor SP is subtracted and/or any multipliers are calculated."
        descricao.firstChild.nodeValue="'Strength is the card of resilience. It is associated with determination, bravery and internal struggle. One must have dedication in order to overcome obstacles and reach one's goal. Strength is about physical prowess and spiritual fortitude – the power that must be unleashed to achieve the impossible.'"
        final.firstChild.nodeValue="Made by Nathan RDS 🦁"
        break;
    case 9:
        texto.firstChild.nodeValue="The Hermit forcibly invites you on a journey inward. Effect: The victim suffers the Lost Eye Critical Injury twice, although the penalty for the injury is only applied once. Should this leave a target without any ability to sense an opponent, any Skill Check they make suffers an additional -4 modifier, as if obscured by smoke or darkness"
        descricao.firstChild.nodeValue="'The Hermit is a card of self-imposed isolation. It represents an escape from the hustle and bustle of the city, a turning away from constant newness toward Ye Olde ways. For the hermit, solitude is the road to the sublime – a road that is taken not with great bounds and strides, but with small, concentrated steps.'"
        final.firstChild.nodeValue="Made by Nathan RDS 🎅"
        break;
    case 10:
        texto.firstChild.nodeValue="Wheel of Fortune twists with forces outside of human control. Effect: The Attack goes wild. If it was a Ranged Attack, the GM randomly determines a new target to replace the intended target. If it was a Melee Attack, the person who caused Wheel of Fortune to be drawn immediately falls prone, and the Attack is considered a miss instead of a hit. Either way, any weapon used to make the Attack malfunctions, requiring an Action to reverse the malfunction before it can be used again."
        descricao.firstChild.nodeValue="'The Wheel of Fortune means that change is coming. One's destiny could turn out for the better or the worse, yet it also bears the promise of new possibilities. The Wheel reminds us that nobody remains at the top forever, but also that not every situation is hopeless.'"
        final.firstChild.nodeValue="Made by Nathan RDS 🎡"
        break;
    case 11:
        texto.firstChild.nodeValue="Justice arrives to deliver piercing clarity and truth directly to the gut. Effect: The Attack knocks the wind out of the victim. For the next minute they suffer a -5 penalty to Evasion Skill Checks when attempting to avoid a Melee Attack and they cannot dodge Ranged Attacks at all."
        descricao.firstChild.nodeValue="'Justice is the card of conflict resolution. It proclaims the need for order, to see through lies and deceit, and a return to the natural state of affairs. Justice implies a just sentence, but also due process.'"
        final.firstChild.nodeValue="Made by Nathan RDS ⚔"
        break;
    case 12:
        texto.firstChild.nodeValue="The Hanged Man means sacrifice. Effect: The victim is knocked prone and suffers the Spinal Injury and Whiplash Critical Injuries."
        descricao.firstChild.nodeValue="'The Hanged Man is the card of sacrifice. It says that a price must be paid in order to achieve enlightenment. The Hanged Man's forsakenness opens the path for rebirth into a new life, though this path is wrought with pain suspended in time and ultimately ends in death.'"
        final.firstChild.nodeValue="Made by Nathan RDS 🎣";
        break;
    case 13:
        texto.firstChild.nodeValue="Death is ever present, sudden, inevitable, and eternally transformative. Effect: The victim must immediately roll a single Death Save. If they fail, they are reduced to 0 HP and are knocked unconscious for one minute. Upon regaining consciousness, the victim regains 3d6 Humanity Points (up to their maximum Humanity) from the experience."
        descricao.firstChild.nodeValue="'Death is the card of becoming. It signifies an imminent and difficult transition – the conclusion of one phase of life and the beginning of another. Inevitably, something gets lost during the transformation, but something else will rise and take its place.'"
        final.firstChild.nodeValue="Made by Nathan RDS 💀"
        break;
    case 14:
        texto.firstChild.nodeValue="Temperance requires a choice for which you'll find your own meaning. Effect: The victim must choose one of their limbs to suffer a Dismembered Critical Injury, and then must choose a different one of their limbs to suffer a Broken Critical Injury"
        descricao.firstChild.nodeValue="'Temperance is the card of balance. It may symbolize self-restraint or the gradual shift toward a more mature state of equilibrium. Temperance is associated with being in control of oneself as well as the desire to achieve inner peace.'"
        final.firstChild.nodeValue="Made by Nathan RDS 💉"
        break;
    case 15:
        texto.firstChild.nodeValue="The Devil exists to represent and punish your fear and excess. Effect: This Attack now hits the head, even if it was originally aimed elsewhere. Additionally, the victim suffers the Brain Injury and Lost Ear Critical Injuries."
        descricao.firstChild.nodeValue="'The Devil is addiction, craving and passion. He brings fame and fortune, but at the price of losing oneself to a world of material distractions. The Devil lures unsuspecting souls into traps, but always grants them a choice. One can try their luck and take him up on his offer, but one should always know when to call quits.'"
        final.firstChild.nodeValue="Made by Nathan RDS 😈"
        break;
    case 16:
        texto.firstChild.nodeValue="The Tower is a disaster that reveals hidden resilience when it falls. Effect: The victim suffers the Cracked Skull, Crushed Windpipe, and Whiplash Critical Injuries. These Injuries deal no Bonus Damage. For one hour, the victim cannot feel pain and can ignore the effects of the Seriously Wounded Wound State."
        descricao.firstChild.nodeValue="'The Tower is an omen of radical change, chaos and destruction. The lightning striking The Tower signifies a return to the old order that lies buried under the ruins, and a new order that will rise from it. It is a symbol of tragedy, apocalypse, and self-destruction.'"
        final.firstChild.nodeValue="Made by Nathan RDS 🏰"
        break;
    case 17:
        texto.firstChild.nodeValue="The Star represents an attack you can have faith in. Effect: If the Star was drawn due to a Ranged Attack, it hits the first target, passes through, and ricochets into a second enemy within 20 m/yards, chosen by the GM. If there is no additional enemy, the ricochet instead hits the original target a second time. This ricochet Attack always hits and does so in the body. Roll new damage dice for the ricochet Attack. If The Star was drawn due to a Melee Attack, the victim suffers the Broken Ribs and Collapsed Lung Critical Injuries."
        descricao.firstChild.nodeValue="'The Star is the card of hope. In the darkest of nights there is a light that shines the path to home. The Star is inspiration, motivation and gives us strength to move forward.'"
        final.firstChild.nodeValue="Made by Nathan RDS 🌟"
        break;
    case 18:
        texto.firstChild.nodeValue="The Moon shines over a vicious attack born of primal instinct. Effect: The victim suffers the Foreign Object Critical Injury twice, once in the body and once in the head. If The Moon was drawn by a Melee Attack made using a melee weapon, that weapon is now stuck in the victim's body, and the attacker is disarmed."
        descricao.firstChild.nodeValue="'The Moon reminds us that reality is not always what it seems at first glance. In a world of appearances and illusions, the best course is often charted by one's own intuition. The Moon is also the card of dreams, desires, and of course, sleep – Death's nightly ritual.'"
        final.firstChild.nodeValue="Made by Nathan RDS 🌙"
        break;
    case 19:
        texto.firstChild.nodeValue="The Sun is a celebration of carnage that overcomes all obstacles. Effect: If the victim is carrying any grenades or other explosives, the GM chooses one of them to explode immediately . If they weren't carrying any grenades, the GM chooses a nonweapon piece of equipment on the victim to destroy beyond repair."
        descricao.firstChild.nodeValue="'The Sun symbolizes success. It is a card of freedom, renewal and a bright future that lies ahead. The Sun also represents truth, for its light will always pull back the curtain of shadow that hides the world's secrets. It is also represents greatness and splendor.'"
        final.firstChild.nodeValue="Made by Nathan RDS ☀"
        break;
    case 20:
        texto.firstChild.nodeValue="Judgement is a painful awakening you might not walk away from. Effect: The victim suffers the Crushed Fingers Critical Injury on one of their hands, and the Dismembered Hand Critical Injury on another hand."
        descricao.firstChild.nodeValue="'Judgement is the card of renewal. The angel blowing into the horn heralds resurrection and liberation. This card foretells an important change that will result in healing or fulfillment. It is also a symbol of self-worth.'"
        final.firstChild.nodeValue="Made by Nathan RDS ⚖"
        break;
    case 21:
        texto.firstChild.nodeValue="The World puts everything in perspective in a moment of understanding. Effect: The character who caused The World to be drawn may take an additional Turn after this one. During this additional Turn they receive a +5 to any Skill Check, ignore the negative effects of all Wound States, and do not have to make a Death Save if Mortally Wounded."
        descricao.firstChild.nodeValue="'The World lies at the end of The Fool's long and winding journey. Wiser and more world-weary than he started out, the Fool faces a moment of reckoning. Some of us accept where our journey has led us to, while others embark on a new challenge. One thing in this World is certain – you can't have it all.'"
        final.firstChild.nodeValue="Made by Nathan RDS 🌎"
        break;
    }
}

btn.addEventListener("click",random)