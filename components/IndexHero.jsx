import React from 'react';
import HeroButton from "./HeroButton";

const IndexHero = ({ categories }) => {

    return (
        <div className="lg:py-12 container mx-auto flex flex-col lg:flex-row">
            <div className="flex flex-col justify-center lg:w-1/2">
                <div className="flex flex-col ">
                    <h2 className="text-xl text-center lg:text-4xl text-gray-900 leading-normal p-2 lg:py-6 font-serif">Apoia os comerciantes do Butantã afetados pela epidemia do COVID-19 </h2>
                    <h3 className="text-md text-center lg:text-2xl text-gray-700 leading-snug p-2 lg:py-4">Busque empresas, projetos ou profissionais que de alguma forma foram afetados pela a COVID-19.</h3>
                </div>
            </div>
            <div className="p-3 flex lg:w-1/2 flex-col justify-center">
                <div className="flex flex-col">
                    <div className="flex flex-row items-stretch flex-wrap justify-end">
                        {
                            categories.map(category => (
                                <HeroButton name={category.nombre} id={category.id} icon={category.icono} number={category.numero} key={category.id} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};



export default IndexHero;
