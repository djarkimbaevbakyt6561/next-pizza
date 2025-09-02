import { PizzaDetailsModalLayout } from 'widgets/pizza-details-modal';

export default async function Page({
   params,
}: {
   params: Promise<{ id: string }>;
}) {
   const pizzaId = (await params).id;
   return <PizzaDetailsModalLayout pizzaId={pizzaId} />;
}
