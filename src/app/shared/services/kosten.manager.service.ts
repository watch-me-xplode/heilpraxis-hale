import { Injectable } from '@angular/core';

import { Kosten } from '../models/kosten.model';

@Injectable()
export class KostenManager {

    private models: Kosten[] = null;

    public getModels(): Kosten[] {
        if (this.models == null) {
            this.models = this.createModels();
        }
        return this.models;
    }

    // create models
    private createModels(): Kosten[] {
        const result: Kosten[] = [];
        result.push(
            new Kosten()
            .setLabel('Erstanamnese und Behandlungsplan:')
            .setPrice(150)
            .setInformation('')
            );
        result.push(
            new Kosten()
            .setLabel('PSE - Behandlung je Testeinheit:')
            .setPrice(100)
            .setInformation('+ homöopathische Komplexmittel')
            );
        result.push(
            new Kosten()
            .setLabel('Innerwise-Behandlung je Stunde:')
            .setPrice(100)
            .setInformation('+ Materialkosten')
            );
        result.push(
            new Kosten()
            .setLabel('Gesprächstherapie GWG je Stunde:')
            .setPrice(90)
            .setInformation('')
            );
        result.push(
            new Kosten()
            .setLabel('Persönlichkeitstraining/ Coaching je Stunde:')
            .setPrice(100)
            .setInformation('+ Materialkosten')
            );
        result.push(
            new Kosten()
            .setLabel('Ohr- und Körperkerzenbehandlung:')
            .setPrice(30)
            .setInformation('')
            );
        result.push(
            new Kosten()
            .setLabel('Vibrationstraining (10er Karte):')
            .setPrice(150)
            .setInformation('')
            );
        return result;
    }
}
