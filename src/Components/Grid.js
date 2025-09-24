import { Grid } from "@mui/material";
import { useState } from "react";


export default function BasicGrid(props) {
    const initialColor = "gray";
    const [index, setIndex] = useState(null);
    const [items, setItems] = useState(props.color);
    const [items2, setItems2] = useState(props.color);
    const [count, setCount] = useState(0);
    const [correctArray, setCorrectArray] = useState([]);

    const updateColors = () => {
        setIndex(-1);
        setCount(0);
        setCorrectArray([]);
    }

    const shuffleColors = () => {
        const shuffled = [...items];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setItems(shuffled);
        updateColors();
    };

    const shuffleClickColors = () => {
        const shuffled = [...items2];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setItems2(shuffled);
    }


    const handleOnClick = (i) => {
        if (items.indexOf(items2[i]) === count) {
            setCorrectArray([...correctArray, i]);
            setIndex(i);
            setCount(count + 1);
            console.log(i + " " + items2[i] + " " + count);
        }
        else {
            updateColors();
        }

        if (items.indexOf(items2[i]) === 8 && count === 8) {
            alert("You won!");
            shuffleClickColors();
            shuffleColors();
        }
    }

    return (
        <>
            <h1>Color Memory Game</h1>
            <Grid container sx={{ height: "50px", width: "500px" }}>
                {items.map((colors, i) => (
                    <Grid key={i} item size={1.33} sx={{ background: colors, border: i === count ? "5px solid black" : "none" }} />
                ))}
            </Grid>

            <Grid container spacing={2} sx={{ marginTop: "20px", height: "500px", width: "500px", }}>
                {items2.map((colors, i) => (
                    <Grid onClick={() => handleOnClick(i)} key={i} item size={4} sx={{  background: index === i || correctArray.includes(i) ? colors : initialColor }} />
                ))}
            </Grid>
            <button onClick={shuffleColors} style={{ marginTop: "20px" }}>Shuffle Colors</button>
        </>
    );
}