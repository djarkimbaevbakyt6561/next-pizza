import { PizzaDetailsPage } from 'pages/pizza-details/ui/PizzaDetails';

export default async function PizzaPage({
   params,
}: {
   params: Promise<{ id: string }>;
}) {
   const id = (await params).id;
   return <PizzaDetailsPage />;
}
