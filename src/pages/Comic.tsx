import React from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react';

const Comic = () => {
    const { characterId } = useParams();

    const [data, setData] = useState < { [key: string]: any } > ({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://marvelorion2022.herokuapp.com/comics/${characterId}`);
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, [characterId]);

    console.log("charac: " + characterId);
    return (<div className="page product">

        {isLoading === true ? (
            <h1>En cours de chargement</h1>
        ) : (
            <>
                <h2 className="text-center">Les comics de {data.name}</h2>
                <div className="container content-grid">
                    {data.comics.map((comic, index) => {
                        const imgSrc = comic.thumbnail.path + '.' + comic.thumbnail.extension;

                        return (
                            <div className="col">
                                <img className="comic" src={imgSrc} alt={comic.title} />
                                <p key={index}>{comic.title}</p>
                            </div>
                        );
                    })}
                </div>
            </>
        )}
    </div>);
};

export default Comic;
