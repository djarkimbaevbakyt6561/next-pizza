import { use } from 'react';
import { PizzaDetailsModalLayout } from 'widgets/pizza-details-modal';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
   const { id } = use(params);
   return <PizzaDetailsModalLayout pizzaId={id} />;
}
