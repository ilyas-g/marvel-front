import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";

export default function Comics() {
    const [data, setData] = useState < { [key: string]: any } > ({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://marvelorion2022.herokuapp.com/comics");
                setData(response.data);
                setIsLoading(false);
                console.log(response.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="App">
            {isLoading === true ? (
                <h1>En cours de chargement</h1>
            ) : (
                <div className="container content-grid">
                    {data.results.map((comic, index) => {
                        const imgSrc = comic.thumbnail.path + '.' + comic.thumbnail.extension;
                        return (
                            <div className="col" key={index}>
                                <img className="comic" src={imgSrc} alt={comic.title} />
                                <p>{comic.title}</p>

                                <p>{comic.description}</p>
                            </div>
                        );
                    })}
                </div>

            )}
        </div>
    );
}
