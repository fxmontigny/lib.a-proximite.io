import { Injectable } from "@angular/core";
import { ServerService } from "../http-server/server.service";

@Injectable({
  providedIn: "root",
})
export class OrdertransactionsService {
  constructor(private serverService: ServerService) {}

  getOrderStatus(orderId: number) {
    return this.serverService
      .post("ordertransactions/get-order-status", { orderId })
      .then((data) => data.data || null);
  }

  cancelTransaction(transactionId: number) {
    return this.serverService.post("ordertransactions/remove-transaction", {
      transactionId,
    });
  }
}
