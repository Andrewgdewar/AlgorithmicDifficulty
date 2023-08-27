import { IPreAkiLoadMod } from './../types/models/external/IPreAkiLoadMod.d';
/* eslint-disable @typescript-eslint/naming-convention */
import { DependencyContainer } from "tsyringe";
import { IPostAkiLoadMod } from "@spt-aki/models/external/IPostAkiLoadMod";
import ProgressionChanges from "./ProgressionChanges";
import BotLevelChanges from "./BotLevelChanges";
import { enableProgressionChanges, enableLevelChanges, enableDifficultyChanges } from "../config/config.json"
import { BotRoutersAndGen, BotDBChanges } from './BotDifficultyChanges/BotDifficultyChanges';

class AlgorithmicLevelProgression implements IPreAkiLoadMod, IPostAkiLoadMod {
    postAkiLoad(container: DependencyContainer): void {
        enableDifficultyChanges && BotDBChanges(container)
        enableProgressionChanges && ProgressionChanges(container)
    }
    preAkiLoad(container: DependencyContainer): void {
        enableLevelChanges && BotLevelChanges(container)
        enableDifficultyChanges && BotRoutersAndGen(container)
    }
}

module.exports = { mod: new AlgorithmicLevelProgression() }