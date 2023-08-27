"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProgressionChanges_1 = __importDefault(require("./ProgressionChanges"));
const BotLevelChanges_1 = __importDefault(require("./BotLevelChanges"));
const config_json_1 = require("../config/config.json");
const BotDifficultyChanges_1 = require("./BotDifficultyChanges/BotDifficultyChanges");
class AlgorithmicLevelProgression {
    postAkiLoad(container) {
        config_json_1.enableDifficultyChanges && (0, BotDifficultyChanges_1.BotDBChanges)(container);
        config_json_1.enableProgressionChanges && (0, ProgressionChanges_1.default)(container);
    }
    preAkiLoad(container) {
        config_json_1.enableLevelChanges && (0, BotLevelChanges_1.default)(container);
        config_json_1.enableDifficultyChanges && (0, BotDifficultyChanges_1.BotRoutersAndGen)(container);
    }
}
module.exports = { mod: new AlgorithmicLevelProgression() };
