import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import Card from '../components/card/Card.tsx';

function Characters() {
    const [data, setData] = useState<{[key: string]: any}>({});
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1)

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get(`https://marvelorion2022.herokuapp.com/characters?page=${page}`);
                setData(response.data);
                setIsLoading(false);
                console.log(response.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, [page]);

    return (
        <div className="App">
            {isLoading === true ? (
                <h1>En cours de chargement</h1>
            ) : (
                <div className="container content-grid">
                    <button onClick={() => {
                        setPage(page + 1);
                    }}>Next</button>

                    {page !== 1 && 
                    <button onClick={() => {
                        setPage(page - 1);
                    }}>Precédent</button>
                }

                    {data.results.map((character, index) => {
                        const imgSrc = character.thumbnail.path + '.' + character.thumbnail.extension;
                        return (
                            <>
                                <div className="col grid" key={index}>
                                    <Card
                                        imgSrc={imgSrc}
                                        name={character.name}
                                        description={character.description}
                                        toChara={`/character/${character._id}`}
                                        toComics={`/comics/${character._id}`}
                                    />
                                </div>
                            </>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default Characters;
