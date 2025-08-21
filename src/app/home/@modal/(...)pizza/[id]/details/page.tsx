import { PizzaCollectWidget } from 'widgets/pizza-collect-widget';

export default async function Page({
   params,
}: {
   params: Promise<{ id: string }>;
}) {
   const pizzaId = (await params).id;
   return <PizzaCollectWidget pizzaId={Number(pizzaId)} />;
}
