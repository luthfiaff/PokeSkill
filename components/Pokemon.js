// import disini memungkinkan untuk memproyeksikan direktori sehingga dapat memudahkan untuk mengimpor modul.

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// cons(konstanta) disini dapa dikonfirgurasikan melalui next.config.js, 
// dan next.config.js adalah modul Node.js biasa, bukan file JSON.
const Pokemon = ({pokemon, index}) => {
    const pokeIndex = ('000' + (index + 1)).slice(-3)

    return (
        // File disini adalah Pengambilan dari database melalui pokeapi.co untuk digunakan kedalam website ini.
        <Link href={`/pokemon/${pokemon.name}`}>
            <a>
                <div className="bg-slate-900 rounded p-5 flex flex-col justify-center items-center relative">
                    <span className="absolute text-5xl text-slate-500 top-0 right-3 font-bold">#{pokeIndex}</span>
                    <Image
                        alt={pokemon.name}
                        width={150}
                        height={150}
                        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
                    />
                    <span className="uppercase font-semibold tracking-wider text-amber-400">
            {pokemon.name}
            </span>
                </div>
            </a>
        </Link>
    );
};

export default Pokemon;
