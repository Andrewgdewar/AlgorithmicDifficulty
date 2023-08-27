import { cloneDeep } from './../utils';
import { BotGenerationCacheService } from '@spt-aki/services/BotGenerationCacheService';
import { StaticRouterModService } from "@spt-aki/services/mod/staticRouter/StaticRouterModService";
import { DependencyContainer } from 'tsyringe';
import config from "../../config/config.json"
import BotGen from './BotGen';
import { globalValues } from './GlobalValues';
import { DatabaseServer } from '@spt-aki/servers/DatabaseServer';
import { makeDifficultyChanges } from './difficultyUtils';
import difficultyConfig from "../../config/difficulty.json"

export const BotDBChanges = (
    container: DependencyContainer
): undefined => {
    const database = container.resolve<DatabaseServer>("DatabaseServer").getTables();
    globalValues.database = database
    globalValues.difficultyConfig = difficultyConfig
    globalValues.baseAI = cloneDeep(database.bots.types.pmcbot.difficulty.hard);

    makeDifficultyChanges()
    difficultyConfig.debug && console.log("Algorthimic Difficulty:  DB changes completed")
}


export const BotRoutersAndGen = (
    container: DependencyContainer
): undefined => {
    const staticRouterModService = container.resolve<StaticRouterModService>("StaticRouterModService");
    globalValues.Logger = container.resolve("WinstonLogger")
    globalValues.botGenerationCacheService = container.resolve<BotGenerationCacheService>("BotGenerationCacheService")
    // container.resolve<TimeAndWeatherSettings>("WeatherController")
    globalValues.config = config

    container.afterResolution("BotGenerationCacheService", (_t, result: BotGenerationCacheService) => {
        // globalValues.Logger.info(`POOP: BotGenerationCacheService calling LegendaryPlayer.getBot`);
        result.getBot = BotGen.getBot;
    }, { frequency: "Always" });

    difficultyConfig.debug && console.log("Algorthimic Difficulty:  BotGenerationCacheService Registered")

    //Raid start
    staticRouterModService.registerStaticRouter(`StaticAkiGameStartAlgorithmicDifficulty`, [{
        url: "/client/raid/configuration",
        action: (url, info, sessionId, output) => {
            globalValues.RaidStartTime = Date.now()
            globalValues.RaidMap = info.location
            difficultyConfig.debug && globalValues.Logger.info(`globalValues.RaidStartTime updated to: ${globalValues.RaidStartTime} ${globalValues.RaidMap}`)
            return output
        }
    }], "aki");

    difficultyConfig.debug && console.log("Algorthimic Difficulty:  StaticAkiGameStartUpdater Registered")
}

// keyId: '',
// side: 'Pmc',
// location: 'factory4_day',
// timeVariant: 'CURR',
// raidMode: 'Local',
// metabolismDisabled: false,
// playersSpawnPlace: 'SamePlace',
// timeAndWeatherSettings: {
//   isRandomTime: false,
//   isRandomWeather: false,
//   cloudinessType: 'Clear',
//   rainType: 'NoRain',
//   windType: 'Light',
//   fogType: 'NoFog',
//   timeFlowType: 'x1',
//   hourOfDay: -1
// },
// botSettings: { isScavWars: false, botAmount: 'AsOnline' },
// wavesSettings: {
//   botAmount: 'AsOnline',
//   botDifficulty: 'AsOnline',
//   isBosses: true,
//   isTaggedAndCursed: false
// }