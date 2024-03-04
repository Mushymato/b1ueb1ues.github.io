
# DPS simulator for Dragalia Lost
This is a fork of the [Dragalia Lost DPS simulator](https://github.com/b1ueb1ues/dl) originally created by b1ueb1ues

## Useful links
- [Python simulator](https://github.com/mushymato/dl)
- [Web UI](https://wildshinobu.pythonanywhere.com/ui/dl_simc.html)
- [Skill frame data](https://github.com/mushymato/dl/tree/master/framedata/skills)
- [护符对照表 (For Mandarin users)](https://github.com/mushymato/mushymato.github.io/blob/master/dl-sim-deploy/dl-sim/amulet.csv)

## Setup
- Max level (lv80/lv100) and max mana circle/spiral (50mc/70mc) characters
- +100 strength augments on character and both wyrmprints
- Level 35 dojos
- level 35 altars
- All limited event facilities at max level
- Level 20 dracolith for Dragon characters
- Level 30 Fafnir
- MUB level 100 dragons
- MUB level 100 5-star HDT tier 2 weapons
- See the chart for dragon and wrymprint choices

## Dragon/WP Choice Logic
- Allow dagger/bow/wand and characters with innate combo based abilities to use combo based wrymprints and dragons
- Allow characters with innate full HP/do not get hit abilities to use full HP/do not get hit wrymprints and dragons

## Common Combos
- Sword: C2+FS or C3+FS
- Blade: C5+FSF (failed force strike)
- Dagger: C4+FS or C5+Reverse FS (to get all 3 FS hits)
- Axe: C5 or C5+FS
- Lance: C5+FSF (failed force strike)
- Bow: C5 or C4+FS or C1+FS or roll FS (really depends on adventurer)
- Wand: C5+FSF (failed force strike)
- Staff: C5

## Abilities Not Simulated
- Bane skills (Phraeganoth/Physian/Demon/Dragon/etc.)
- Affliction Punisher on characters that cannot inflict that affliction
- Potent Res abilities that trigger from getting hit with affliction
- Dragon damage from shapeshifting (except for certain characters on Special page)
- Slayer's Strength/Striker's Strength (except for certain characters on Special page)

## Special mechanics
- Considers team DPS to be a fixed number through out fight (there are normally DPS spikes on break and such)
- Considers every 5 team energy stacks to provide 2 skills from the other 2 DPS that boosts 7500*0.5 damage each into team DPS
- Certain characters with RNG are calculated by averaging 1000 runs of simulation
- Gets dragon claw once during the middle of the fight
- Considers break punisher to have 15% efficiency (e.g. 30% break punisher is 0.3 * 0.15 = 4.5% overall DPS bonus)
- Consider OD punisher to have 35% efficiency (e.g. 30% OD punisher is 0.3 * 0.35 = 10.5% overall DPS bonus)
- Hit15 mechanics considered always active, even when the adventurer would break combo

## Author
b1ueb1ues  
tiara (proofreading)  
luciferz2012 (first version of website)  
solofandy (front-end engineering)  
kenchendesign (UI design)  
Matt (rotation improve)  
qwewqa  
haukist  
mushymato (maintainer)

## Acknowledgement
Totakeke, Shark3143, SanyamBansal, emrysduvent, ZedK, B3GG, 6tennis, CarelessParsley, MsNyara  
See https://github.com/dl-stuff/dl/graphs/contributors for full list of contributors
