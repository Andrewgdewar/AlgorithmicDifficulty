"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_json_1 = require("../config/config.json");
const BotDifficultyChanges_1 = require("./BotDifficultyChanges/BotDifficultyChanges");
class AlgorithmicDifficulty {
    postAkiLoad(container) {
        config_json_1.enable && (0, BotDifficultyChanges_1.BotDBChanges)(container);
    }
    preAkiLoad(container) {
        config_json_1.enable && (0, BotDifficultyChanges_1.BotRoutersAndGen)(container);
    }
}
module.exports = { mod: new AlgorithmicDifficulty() };
