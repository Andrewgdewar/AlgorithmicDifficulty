"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalValues_1 = require("./GlobalValues");
class BotGen {
    // Should produce a number from 0.75 to 1.25
    static multipleWithRandomInt(int) {
        return int * (0.75 + (Math.random() * Math.random()));
    }
    static getRandom(arr, progressedValue, maxValue) {
        const progressLevels = maxValue / arr.length;
        let index = Math.round(BotGen.multipleWithRandomInt(progressedValue) / progressLevels);
        if (index > (arr.length - 1))
            index = arr.length - 1;
        return arr[index];
    }
    static getBot(key) {
        // globalValues.Logger.warning(`requested bot type ${key} from cache`);
        if (GlobalValues_1.globalValues.botGenerationCacheService.storedBots.has(key)) {
            const cachedOfType = GlobalValues_1.globalValues.botGenerationCacheService.storedBots.get(key);
            const level = cachedOfType[cachedOfType.length - 1].Info.Level;
            if (cachedOfType.length > 0) {
                switch (true) {
                    // Scav
                    case BotGen.assaultTypes.includes(key.toLowerCase()):
                        const selectedMap = GlobalValues_1.globalValues.database.locations[GlobalValues_1.globalValues.RaidMap]?.base;
                        const raidEndTime = GlobalValues_1.globalValues.RaidStartTime + (selectedMap.EscapeTimeLimit * 60000);
                        const timeProgressed = Date.now() - GlobalValues_1.globalValues.RaidStartTime;
                        const raidTotalDuration = raidEndTime - GlobalValues_1.globalValues.RaidStartTime;
                        const currentlyProgressedPercentage = ((timeProgressed) / (raidTotalDuration)) * 100;
                        // globalValues.Logger.warning(`Time elapsed ${Math.round((timeProgressed) / 60000)} of ${selectedMap.EscapeTimeLimit} minutes or ${Math.round(currentlyProgressedPercentage)}%`);
                        const chosenAssault = BotGen.getRandom(GlobalValues_1.globalValues.assaultRoleList, timeProgressed, raidTotalDuration);
                        if (chosenAssault) {
                            cachedOfType[cachedOfType.length - 1].Info.Settings.BotDifficulty = chosenAssault.BotDifficulty;
                            cachedOfType[cachedOfType.length - 1].Info.Settings.Role = chosenAssault.Role;
                            GlobalValues_1.globalValues.Logger.warning(`\nCreating Scav from ${key}:${currentlyProgressedPercentage}% ${chosenAssault.Role} ${chosenAssault.BotDifficulty}`);
                        }
                        break;
                    case BotGen.bearTypes.includes(key.toLowerCase()):
                        const chosenBear = BotGen.getRandom(GlobalValues_1.globalValues.bearRoleList, level, GlobalValues_1.globalValues.difficultyConfig.levelMax);
                        if (cachedOfType[cachedOfType.length - 1].Info.Settings.BotDifficulty)
                            if (chosenBear) {
                                cachedOfType[cachedOfType.length - 1].Info.Settings.BotDifficulty = chosenBear.BotDifficulty;
                                cachedOfType[cachedOfType.length - 1].Info.Settings.Role = chosenBear.Role;
                                GlobalValues_1.globalValues.Logger.warning(`\nCreating bear from ${key}: level ${level} ${chosenBear.Role} ${chosenBear.BotDifficulty}`);
                            }
                        break;
                    case BotGen.usecTypes.includes(key.toLowerCase()):
                        const chosenUsec = BotGen.getRandom(GlobalValues_1.globalValues.usecRoleList, level, GlobalValues_1.globalValues.difficultyConfig.levelMax);
                        if (chosenUsec) {
                            cachedOfType[cachedOfType.length - 1].Info.Settings.BotDifficulty = chosenUsec.BotDifficulty;
                            cachedOfType[cachedOfType.length - 1].Info.Settings.Role = chosenUsec.Role;
                            GlobalValues_1.globalValues.Logger.warning(`\nCreating usec from ${key}:${level} ${chosenUsec.Role} ${chosenUsec.BotDifficulty}`);
                        }
                        break;
                    default:
                        GlobalValues_1.globalValues.Logger.warning(`\nDefault spawn: ${cachedOfType[cachedOfType.length - 1].Info.Settings.Role}`);
                        break;
                }
                return cachedOfType.pop();
            }
            GlobalValues_1.globalValues.Logger.error(GlobalValues_1.globalValues.botGenerationCacheService.localisationService.getText("bot-cache_has_zero_bots_of_requested_type", key));
        }
        GlobalValues_1.globalValues.Logger.error(GlobalValues_1.globalValues.botGenerationCacheService.localisationService.getText("bot-no_bot_type_in_cache", key));
        return undefined;
    }
}
BotGen.assaultTypes = [
    "assaulteasy",
    "assaultnormal",
    "assaulthard",
    "cursedassaulteasy",
    "assaultimpossible",
    "cursedassaultnormal",
    "cursedassaulthard",
    "cursedassaultimpossible",
];
BotGen.bearTypes = [
    "sptbeareasy",
    "sptbearnormal",
    "sptbearhard",
    "sptbearimpossible"
];
BotGen.usecTypes = [
    "sptuseceasy",
    "sptusecnormal",
    "sptusechard",
    "sptusecimpossible"
];
exports.default = BotGen;
