import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { IBotBase } from "@spt-aki/models/eft/common/tables/IBotBase";
import { BotGenerationCacheService } from "@spt-aki/services/BotGenerationCacheService"
import { IDatabaseTables } from "@spt-aki/models/spt/server/IDatabaseTables";

export type Role = {
    Role: string;
    BotDifficulty: "easy" | "normal" | "hard" | "impossible"
}
export class globalValues {
    public static Logger: ILogger;
    public static database: IDatabaseTables;
    public static baseAI: IBotBase;
    public static config: any;
    public static difficultyConfig: any;
    public static botGenerationCacheService: BotGenerationCacheService;
    public static RaidStartTime: number
    public static RaidMap: "bigmap" | "develop" | "factory4_day" | "factory4_night" | "hideout" | "interchange" | "laboratory" | "lighthouse" | "privatearea" | "rezervbase" | "shoreline" | "suburbs" | "tarkovstreets" | "terminal" | "town" | "woods"


    public static assaultRoleList: Role[] = [
        {
            Role: "assault",
            BotDifficulty: "easy"
        },
        {
            Role: "assault",
            BotDifficulty: "normal"
        },
        {
            Role: "assault",
            BotDifficulty: "hard"
        },
        {
            Role: "cursedAssault",
            BotDifficulty: "easy"
        },
        {
            Role: "assault",
            BotDifficulty: "impossible"
        },
        {
            Role: "cursedAssault",
            BotDifficulty: "normal"
        },
        {
            Role: "cursedAssault",
            BotDifficulty: "hard"
        },
        {
            Role: "cursedAssault",
            BotDifficulty: "impossible"
        }
    ]

    public static bearRoleList: Role[] = [
        {
            Role: "pmcBot",
            BotDifficulty: "easy"
        },
        {
            Role: "pmcBot",
            BotDifficulty: "normal"
        },
        {
            Role: "pmcBot",
            BotDifficulty: "hard"
        },
        {
            Role: "bear",
            BotDifficulty: "easy"
        },
        {
            Role: "pmcBot",
            BotDifficulty: "impossible"
        },
        {
            Role: "bear",
            BotDifficulty: "normal"
        },
        {
            Role: "bear",
            BotDifficulty: "hard"
        },
        {
            Role: "bear",
            BotDifficulty: "impossible"
        }
    ]

    public static usecRoleList: Role[] = [
        {
            Role: "pmcBot",
            BotDifficulty: "easy"
        },
        {
            Role: "pmcBot",
            BotDifficulty: "normal"
        },
        {
            Role: "pmcBot",
            BotDifficulty: "hard"
        },
        {
            Role: "usec",
            BotDifficulty: "easy"
        },
        {
            Role: "pmcBot",
            BotDifficulty: "impossible"
        },
        {
            Role: "usec",
            BotDifficulty: "normal"
        },
        {
            Role: "usec",
            BotDifficulty: "hard"
        },
        {
            Role: "usec",
            BotDifficulty: "impossible"
        }
    ]

    public static roleCase: object = {
        "arenafighterevent": "arenaFighterEvent",
        "assault": "assault",
        "exusec": "exUsec",
        "marksman": "marksman",
        "pmcbot": "pmcBot",
        "sectantpriest": "sectantPriest",
        "sectantwarrior": "sectantWarrior",
        "assaultgroup": "assaultGroup",
        "bossbully": "bossBully",
        "bosstagilla": "bossTagilla",
        "bossgluhar": "bossGluhar",
        "bosskilla": "bossKilla",
        "bosskojaniy": "bossKojaniy",
        "bosssanitar": "bossSanitar",
        "followerbully": "followerBully",
        "followergluharassault": "followerGluharAssault",
        "followergluharscout": "followerGluharScout",
        "followergluharsecurity": "followerGluharSecurity",
        "followergluharsnipe": "followerGluharSnipe",
        "followerkojaniy": "followerKojaniy",
        "followersanitar": "followerSanitar",
        "followertagilla": "followerTagilla",
        "cursedassault": "cursedAssault",
        "usec": "usec",
        "bear": "bear",
        "bosstest": "bossTest",
        "followertest": "followerTest",
        "gifter": "gifter",
        "bossknight": "bossKnight",
        "followerbigpipe": "followerBigPipe",
        "followerbirdeye": "followerBirdEye",
        "test": "test",
        "bosszryachiy": "bossZryachiy",
        "followerzryachiy": "followerZryachiy"
    }

}