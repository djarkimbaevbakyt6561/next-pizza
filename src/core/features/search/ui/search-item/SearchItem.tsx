import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { tv } from 'tailwind-variants';
import { highlightText } from '../model/consts';

const searchItem = tv({
   slots: {
      base: 'w-full rounded-md px-4 py-3 flex items-center gap-4 hover:bg-orange-50',
      imageClass: 'w-[1.875rem] h-[1.875rem]',
      priceClass: 'text-neutral-400',
   },
});

interface SearchItemProps {
   id: string;
   image: string;
   title: string;
   price: number;
   query: string;
}

export const SearchItem: FC<SearchItemProps> = ({
   id,
   image,
   title,
   price,
   query,
}) => {
   const { base, imageClass, priceClass } = searchItem();
   return (
      <Link className={base()} href={`/details/${id}`}>
         <Image
            className={imageClass()}
            width={30}
            height={30}
            src={image}
            alt={title}
         />
         <p>{highlightText(title, query)}</p>
         <p className={priceClass()}>{price} $</p>
      </Link>
   );
};
