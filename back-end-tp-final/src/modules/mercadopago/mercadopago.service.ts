import { Injectable } from "@nestjs/common";
import { } from "node_modules/mercadopago"

@Injectable()
export class MercadoPagoService {

    async createPreference(preference) {
        let savedPreference = await mercadopago.create(preference)
        return savedPreference
    }
}