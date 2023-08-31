
# **DewardianDev's AlgorithmicDifficulty**

=== INSTALL STEPS ===

1. Drag and drop this folder into the user/mods folder.
2. Update your mods/order.json so that this is last on the list.
3. Optionally change your configuration (see below configuration options).

4. ???????

5. Profit!!!!

Example order.json with recommended mods:
{
"order": [
"ServerValueModifier",
"zPOOP",
"Lua-CustomSpawnPoints",
"DewardianDev-XXXX-1.x.x",
"DewardianDev-AlgorithmicDifficulty-1.x.x"
]
}



==== Configuration Options ====

{   //Turns the mod on and off
    "enable": true,

    //Changes the difficulty of all bots in the game (can be integer, ie 0.8 or 2.3)
    "overallDifficultyModifier": 1,

    //Chance a scav will spawn with an alternate (mid level) brain type.
    "randomScavBrainChance": 0.1,

    //Chance a pmc will spawn with an alternate (mid/high level) brain type.
    "randomPmcBrainChance": 0.1,

    //Chance a marksman will spawn switch to a harder brain type.
    "randomMarksmanBrainChance": 0.1,

    "debug": true
}
