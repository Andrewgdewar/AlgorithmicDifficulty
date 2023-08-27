import { IPreAkiLoadMod } from './../types/models/external/IPreAkiLoadMod.d';
/* eslint-disable @typescript-eslint/naming-convention */
import { DependencyContainer } from "tsyringe";
import { IPostAkiLoadMod } from "@spt-aki/models/external/IPostAkiLoadMod";
import { enableDifficultyChanges } from "../config/config.json"
import { BotRoutersAndGen, BotDBChanges } from './BotDifficultyChanges/BotDifficultyChanges';

class AlgorithmicDifficulty implements IPreAkiLoadMod, IPostAkiLoadMod {
    postAkiLoad(container: DependencyContainer): void {
        enableDifficultyChanges && BotDBChanges(container)
    }
    preAkiLoad(container: DependencyContainer): void {
        enableDifficultyChanges && BotRoutersAndGen(container)
    }
}

module.exports = { mod: new AlgorithmicDifficulty() }