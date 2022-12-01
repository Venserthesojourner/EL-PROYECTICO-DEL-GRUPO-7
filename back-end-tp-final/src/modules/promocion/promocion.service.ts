import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Promocion } from "./entitites/promocion.entity";

@Injectable()
export class PromocionesService {
    constructor(
        private readonly promoRepo: Repository<Promocion>
    ) { }

    createNewPromo(createPromo) {
        return this.promoRepo.save(createPromo)
    }

    findAllPromos() { }
}