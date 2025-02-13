/* eslint-disable react/self-closing-comp */
import Image from 'next/image';
import PizzaOptions from 'features/pizza-options/ui/PizzaOptions';
import { Button } from 'shared/ui';
import pizzaImage from '../../../shared/assets/images/pizza-image.png';

export const About = () => {
    return (
        <div className="_container">
            <div className="max-w-[255px] w-full m-[42px]">
                <ul className="flex justify-between ">
                    <li>
                        <span className="text-[14px] font-normal">Главная</span>
                    </li>{' '}
                    <span className="after:content-['/'] after:text-[#E0E0E0]"></span>
                    <li>
                        <span className="text-[14px] font-normal">Пиццы</span>
                    </li>
                    <span className="after:content-['/'] after:text-[#E0E0E0]"></span>
                    <li>
                        <span className="text-textColor text-[14px] font-normal ">
                            {' '}
                            Пепперони фреш
                        </span>
                    </li>
                </ul>
            </div>

            <div className="flex justify-between">
                <div className="bg-[#FFF7EE] max-w-[570px] w-full rounded-[20px] flex justify-center items-center p-[35px]">
                    <Image
                        src={pizzaImage}
                        alt="pizza image"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="flex flex-col gap-[25px]">
                    <div className="flex flex-col gap-[14px]">
                        <h1 className="font-extrabold text-[34px] text-textColor">
                            Пепперони
                        </h1>
                        <p className="text-textColor text-[14px] font-normal ">
                            25 см, традиционное тесто 25, 380 г
                        </p>
                    </div>
                    <PizzaOptions />
                    <div className="flex flex-col gap-5 "></div>
                    <div>
                        <h2>Ингредиенты</h2>
                    </div>
                    <div className="flex justify-start mt-[38px]">
                        <Button
                            className="py-4 px-5 rounded-[18px] bg-bgColorButton text-[#fff]"
                            theme="secondary"
                        >
                            Добавить в корзину за 799₽
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
