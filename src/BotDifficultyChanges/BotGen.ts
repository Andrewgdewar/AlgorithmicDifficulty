import { IBotBase } from "@spt-aki/models/eft/common/tables/IBotBase";
import { Role, globalValues } from "./GlobalValues";

export default class BotGen {

    public static assaultTypes: string[] = [
        "assaulteasy",
        "assaultnormal",
        "assaulthard",
        "cursedassaulteasy",
        "assaultimpossible",
        "cursedassaultnormal",
        "cursedassaulthard",
        "cursedassaultimpossible",
    ];

    public static bearTypes: string[] = [
        "sptbeareasy",
        "sptbearnormal",
        "sptbearhard",
        "sptbearimpossible"
    ];

    public static usecTypes: string[] = [
        "sptuseceasy",
        "sptusecnormal",
        "sptusechard",
        "sptusecimpossible"
    ];

    // Should produce a number from 0.75 to 1.25
    public static multipleWithRandomInt(int: number) {
        return int * (0.75 + (Math.random() * Math.random()))
    }

    public static getRandom(arr: Role[], progressedValue: number, maxValue: number): Role {
        const progressLevels = maxValue / arr.length
        let index = Math.round(BotGen.multipleWithRandomInt(progressedValue) / progressLevels)
        if (index > (arr.length - 1)) index = arr.length - 1
        return arr[index]
    }

    static getBot(key: string): IBotBase {
        // globalValues.Logger.warning(`requested bot type ${key} from cache`);
        if ((globalValues.botGenerationCacheService as any).storedBots.has(key)) {
            const cachedOfType: IBotBase[] = (globalValues.botGenerationCacheService as any).storedBots.get(key);
            const level = cachedOfType[cachedOfType.length - 1].Info.Level
            if (cachedOfType.length > 0) {
                switch (true) {
                    // Scav
                    case BotGen.assaultTypes.includes(key.toLowerCase()):
                        const chance = globalValues.difficultyConfig.randomScavBrainChance > Math.random()
                        if (chance) {
                            const botsForRandom = globalValues.difficultyConfig.bots.midLevelAIs
                            const randomChoice = botsForRandom[Math.floor(Math.random() * botsForRandom.length)];
                            cachedOfType[cachedOfType.length - 1].Info.Settings.Role = randomChoice
                            globalValues.Logger.warning(`\nRandom Scav Brain Chosen Creating Scav from ${key} with ${randomChoice}`);
                            break;
                        }
                        const selectedMap = globalValues.database.locations[globalValues.RaidMap]?.base
                        const raidEndTime = globalValues.RaidStartTime + (selectedMap.EscapeTimeLimit * 60000)
                        const timeProgressed = Date.now() - globalValues.RaidStartTime
                        const raidTotalDuration = raidEndTime - globalValues.RaidStartTime
                        const currentlyProgressedPercentage = ((timeProgressed) / (raidTotalDuration)) * 100
                        // globalValues.Logger.warning(`Time elapsed ${Math.round((timeProgressed) / 60000)} of ${selectedMap.EscapeTimeLimit} minutes or ${Math.round(currentlyProgressedPercentage)}%`);
                        const chosenAssault = BotGen.getRandom(globalValues.assaultRoleList, timeProgressed, raidTotalDuration)
                        if (chosenAssault) {
                            cachedOfType[cachedOfType.length - 1].Info.Settings.BotDifficulty = chosenAssault.BotDifficulty
                            cachedOfType[cachedOfType.length - 1].Info.Settings.Role = chosenAssault.Role
                            globalValues.Logger.warning(`\nCreating Scav from ${key}:${currentlyProgressedPercentage}% ${chosenAssault.Role} ${chosenAssault.BotDifficulty}`);
                        }
                        break;
                    case BotGen.bearTypes.includes(key.toLowerCase()):
                        const chosenBear = BotGen.getRandom(globalValues.bearRoleList, level, globalValues.difficultyConfig.levelMax)
                        if (cachedOfType[cachedOfType.length - 1].Info.Settings.BotDifficulty)
                            if (chosenBear) {
                                cachedOfType[cachedOfType.length - 1].Info.Settings.BotDifficulty = chosenBear.BotDifficulty
                                cachedOfType[cachedOfType.length - 1].Info.Settings.Role = chosenBear.Role
                                globalValues.Logger.warning(`\nCreating bear from ${key}: level ${level} ${chosenBear.Role} ${chosenBear.BotDifficulty}`);
                            }
                        break;
                    case BotGen.usecTypes.includes(key.toLowerCase()):
                        const chosenUsec = BotGen.getRandom(globalValues.usecRoleList, level, globalValues.difficultyConfig.levelMax)
                        if (chosenUsec) {
                            cachedOfType[cachedOfType.length - 1].Info.Settings.BotDifficulty = chosenUsec.BotDifficulty
                            cachedOfType[cachedOfType.length - 1].Info.Settings.Role = chosenUsec.Role
                            globalValues.Logger.warning(`\nCreating usec from ${key}:${level} ${chosenUsec.Role} ${chosenUsec.BotDifficulty}`);
                        }
                        break;

                    default:
                        globalValues.Logger.warning(`\nDefault spawn: ${cachedOfType[cachedOfType.length - 1].Info.Settings.Role}`);
                        break;
                }

                return cachedOfType.pop()
            }

            globalValues.Logger.error((globalValues.botGenerationCacheService as any).localisationService.getText("bot-cache_has_zero_bots_of_requested_type", key));
        }

        globalValues.Logger.error((globalValues.botGenerationCacheService as any).localisationService.getText("bot-no_bot_type_in_cache", key));

        return undefined;
    }
}