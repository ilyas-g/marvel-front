import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, React } from 'react';
import Comic from "./Comic";

const Character = () => {
    const { characterId } = useParams();

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        //Avec un tableau vide en deuxième argument
        // La fonction useEffect ne sera déclenchée qu'une fois fois, au chargement du composant
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/character/${characterId}`);
                setData(response.data);
                console.log(response.data);
                setIsLoading(false);

            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, [characterId]);

    console.log(characterId);

    return (
        <div className="page product">
            {/* <p>Offer id : {characterId}</p> */}
            {isLoading === true ? (
                // Object key object value
                <h1>En cours de chargement</h1>
            ) : (
                <>
                    <h1>{data.name}</h1>
                    <div className="d-flex">
                        <div>
                            <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} alt={data.name} />
                        </div>
                        <div>
                            <p>{data.description}</p>
                            <Comic />
                        </div>
                    </div>
                    {/* <p><strong>{data.name}</strong> - {data.description}</p>
                    <h2>{data.comics[0].MARQUE}</h2>
                    {data.comics.map((comic, index) => {
                        return <p key={index}>{comic}</p>;
                    })} */}
                </>
            )}
        </div>);
};

export default Character;
