import { use } from 'react';
import { PizzaDetailsPage } from 'pages/pizza-details/ui/PizzaDetails';

export default function PizzaPage({
   params,
}: {
   params: Promise<{ id: string }>;
}) {
   const { id } = use(params);
   return <PizzaDetailsPage id={id} />;
}
