import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, React } from 'react';

const Comic = () => {
    const { characterId } = useParams();

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        //Avec un tableau vide en deuxième argument
        // La fonction useEffect ne sera déclenchée qu'une fois fois, au chargement du composant
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/comics/${characterId}`);
                setData(response.data);
                // console.log(response.data);
                setIsLoading(false);

            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, [characterId]);

    console.log("charac: " + characterId);
    return (<div className="page product">
        <p>Offer id : {characterId}</p>
        {isLoading === true ? (
            // Object key object value
            <h1>En cours de chargement</h1>
        ) : (
            <>
                <h2>Heros: {data.name}</h2>
                <p>{data.comics[0].title}</p>
                {data.comics.map((comic, index) => {
                    return <p key={index}>{comic.title} - {comic._id}</p>;
                })}
            </>
        )}
    </div>);
};

export default Comic;
