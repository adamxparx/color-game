import { Grid } from "@mui/material";
import { useState } from "react";

export default function BasicGrid(props) {
    return (
        <>
            <ArrayGrid color={props.color}/>
            <RandomGrid colorArray={props.color}/>
        </>
    );
}

function ArrayGrid(props) {
    return (
        <Grid container sx={{ height: "50px", width: "500px" }}>
            {props.color.map((color, i) => (
                <Grid key={i} item size={1.33} sx={{ background: color }}>{i}</Grid>
            ))}
        </Grid>
    );
}

function RandomGrid({ colorArray }) {
    const initialColor = "gray";
    const [color, setColor] = useState(initialColor);
    const [index, setIndex] = useState(null);
    const current = colorArray[0];

    const handleOnClick = (i) => {
        setIndex(i);
    }

    return (
        <Grid container spacing={2} sx={{ marginTop: "20px", height: "500px", width: "500px", }}>
            {colorArray.map((colors, i) => (
                <Grid onClick={() => handleOnClick(i)} key={i} item size={4} sx={{  background: index === i ? colors : initialColor }} >{index}</Grid>
            ))}
        </Grid>
    );
}