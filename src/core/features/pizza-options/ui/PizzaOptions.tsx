'use client';

/* eslint-disable boundaries/element-types */
import clsx from 'clsx';
import { useQueryState } from 'nuqs';
import { useEffect, useState } from 'react';
import { tv } from 'tailwind-variants';
import { breakpoints } from 'features/tabs-filter/model/tabs-filter.consts';
import { TabsFilterSkeleton } from 'features/tabs-filter/ui/skeleton/TabsFilterSkeleton';
import { Tabs } from 'shared/ui';
import { pizzaOptionsSize } from '../model/pizza-options.consts';
import { PizzaSize } from '../model/pizza-options.types';

const tabsFilter = tv(
	{
		slots: {
			tabs: 'bg-neutral-50',
			tabsItem:
				'w-full py-2 font-bold transition-all duration-300 text-neutral-800',
			glider: 'shadow-[0px_10px_20px_0px_#0000000D] h-[calc(100%-16px)]'
		},
		variants: {
			size: {
				initial: {
					tabs: 'p-1 rounded-lg',
					tabsItem: 'px-4',
					glider: 'rounded-lg'
				},
				medium: {
					tabs: 'p-2 rounded-xl',
					tabsItem: 'px-6',
					glider: 'rounded-xl'
				}
			}
		}
	},
	{
		responsiveVariants: ['md']
	}
);

export default function PizzaOptions() {
	const { tabs, tabsItem, glider } = tabsFilter({
		size: {
			initial: 'initial',
			md: 'medium'
		}
	});
	const [visibleTabs, setVisibleTabs] = useState<PizzaSize[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const [selectedItemIndex, setSelectedItemIndex] = useState(0);
	const [selectedTab, setSelectedTab] = useQueryState('type', {
		defaultValue: 'all'
	});
	const minSelectedItemIndex = Math.min(selectedItemIndex, visibleTabs.length);

	const handleSelectItem = (index: number, tab: PizzaSize) => {
		setSelectedItemIndex(index);
		setSelectedTab(tab.value);
	};

	useEffect(() => {
		const updateVisibleCount = () => {
			const mathingBreakpoint = breakpoints.find(
				bp => window.innerWidth > bp.width
			);
			setVisibleTabs(pizzaOptionsSize.slice(0, mathingBreakpoint?.count));
			setIsLoading(false);
		};
		updateVisibleCount();
		window.addEventListener('resize', updateVisibleCount);
		return () => window.removeEventListener('resize', updateVisibleCount);
	}, []);

	useEffect(() => {
		const index = pizzaOptionsSize.findIndex(tab => tab.value === selectedTab);
		setSelectedItemIndex(index);
	}, [selectedTab]);

	if (isLoading) {
		return <TabsFilterSkeleton />;
	}
	return (
		<>
			<Tabs
				className={clsx(tabs())}
				selectedItemIndex={minSelectedItemIndex}
				gliderClassName={glider()}
			>
				{visibleTabs.map((el, i) => {
					return (
						<li key={el.id} className="z-10" role="tab">
							<button
								type="button"
								className={clsx(
									tabsItem(),
									selectedItemIndex === i && 'text-orange-500'
								)}
								onClick={() => handleSelectItem(i, el)}
							>
								{el.title}
							</button>
						</li>
					);
				})}
			</Tabs>
		</>
	);
}
