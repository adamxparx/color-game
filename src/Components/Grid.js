import { Grid } from "@mui/material";
import { useState } from "react";


export default function BasicGrid(props) {
    const initialColor = "gray";
    const [color, setColor] = useState(initialColor);
    const [index, setIndex] = useState(null);
    const [items, setItems] = useState(props.color);
    const [count, setCount] = useState(0);
    const [correctArray, setCorrectArray] = useState([]);

    const shuffleColors = () => {
        const shuffled = [...items];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setItems(shuffled);
        setIndex(-1);
        setColor("");
        setCount(0);
        setCorrectArray([]);
    };


    const handleOnClick = (i) => {
        if (items.indexOf(props.color[i]) === count) {
            setCorrectArray([...correctArray, i]);
            setIndex(i);
            setCount(count + 1);
            console.log(i + " " + props.color[i] + " " + count);
        }
        else {
            setIndex(-1);
            setColor("");
            setCount(0);
            setCorrectArray([]);
        }

        if (count === 8) {
            alert("You won!");
            shuffleColors();
        }
        setColor(props.color[i]);
    }

    return (
        <>
            <Grid container sx={{ height: "50px", width: "500px" }}>
                {items.map((colors, i) => (
                    <Grid key={i} item size={1.33} sx={{ background: colors, border: i === count ? "5px solid black" : "none" }}>{i}</Grid>
                ))}
            </Grid>

            <Grid container spacing={2} sx={{ marginTop: "20px", height: "500px", width: "500px", }}>
                {props.color.map((colors, i) => (
                    <Grid onClick={() => handleOnClick(i)} key={i} item size={4} sx={{  background: index === i || correctArray.includes(i) ? colors : initialColor }} >{index}</Grid>
                ))}
            </Grid>
            <button onClick={shuffleColors} style={{ marginTop: "20px" }}>Shuffle Colors</button>
        </>
    );
}