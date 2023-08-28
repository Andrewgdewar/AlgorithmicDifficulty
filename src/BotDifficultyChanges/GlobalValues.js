"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalValues = void 0;
const config_json_1 = __importDefault(require("../../config/config.json"));
const difficulty_json_1 = __importDefault(require("../../config/difficulty.json"));
class globalValues {
}
exports.globalValues = globalValues;
globalValues.config = config_json_1.default;
globalValues.difficultyConfig = difficulty_json_1.default;
globalValues.scavAlternates = [...difficulty_json_1.default.bots.midLevelAIs, ...difficulty_json_1.default.bots.highLevelAIs];
globalValues.pmcAlternates = [...difficulty_json_1.default.bots.highLevelAIs, ...difficulty_json_1.default.bots.bossLevelAIs];
globalValues.marksmanAlternates = ["followergluharsnipe", "followerbirdeye", "bosskojaniy"];
globalValues.assaultRoleList = [
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
];
globalValues.bearRoleList = [
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
        Role: "sptbear",
        BotDifficulty: "easy"
    },
    {
        Role: "pmcBot",
        BotDifficulty: "impossible"
    },
    {
        Role: "sptbear",
        BotDifficulty: "normal"
    },
    {
        Role: "sptbear",
        BotDifficulty: "hard"
    },
    {
        Role: "sptbear",
        BotDifficulty: "impossible"
    }
];
globalValues.usecRoleList = [
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
        Role: "sptusec",
        BotDifficulty: "easy"
    },
    {
        Role: "pmcBot",
        BotDifficulty: "impossible"
    },
    {
        Role: "sptusec",
        BotDifficulty: "normal"
    },
    {
        Role: "sptusec",
        BotDifficulty: "hard"
    },
    {
        Role: "sptusec",
        BotDifficulty: "impossible"
    }
];
globalValues.roleCase = {
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
    "usec": "sptusec",
    "bear": "sptbear",
    "bosstest": "bossTest",
    "followertest": "followerTest",
    "gifter": "gifter",
    "bossknight": "bossKnight",
    "followerbigpipe": "followerBigPipe",
    "followerbirdeye": "followerBirdEye",
    "test": "test",
    "bosszryachiy": "bossZryachiy",
    "followerzryachiy": "followerZryachiy"
};
