/**
 * Payment API — placeholder, sẽ mở rộng khi tích hợp Stripe/VNPay
 */
import http from "@/lib/http";

export interface PaymentIntent {
  clientSecret: string;
  amount: number;
  currency: string;
}

export async function createPaymentIntent(
  bookingId: string
): Promise<PaymentIntent> {
  const { data } = await http.post<PaymentIntent>("/payments/intent", {
    bookingId,
  });
  return data;
}
