'use client';

import { Paper, Typography, ListItem, Chip, FormControl, InputLabel, Select, MenuItem, Menu, Slider, Grid, Box } from "@mui/material";
import { useState } from "react";
import GradientSlider from "./slider.component";

type ContentTypes = {
    "Fun": Array<string>,
    "Education": Array<string>,
    "Sports": Array<string>,
    "News": Array<string>,
    "Invesment": Array<string>,
    "Facts": Array<string>,
}

type SelectedType = keyof ContentTypes;

export default function ApplicationForm() {
    const [types, _]: [ContentTypes, any] = useState({
        "Fun": [
            "Board games revival", "Comedy trends", "Amusement parks",
            "Escape rooms", "Street performances", "Online challenges", "Festival impact",
            "Crafting movement", "Social gaming", "Virtual Reality"
        ],
        "Education": [
            "Gamified learning", "Education systems", "Bilingual benefits", "Standardized testing",
            "Arts in schools", "Tech bootcamps", "Homeschooling dynamics", "Mentorship importance",
            "Educational equity", "Mobile learning"
        ],
        "Sports": [
            "Sports medicine", "Team sociology", "Olympic economics",
            "Gender parity", "Fandom psychology", "Extreme sports", "Sports business",
            "Youth athletics", "Data analytics", "Doping ethics"],
        "News": [
            "Citizen journalism", "Whistleblower influence", "Fake news", "Print media survival",
            "Social media news", "Cybersecurity news", "Democratic media", "News deserts",
            "News economics", "Broadcast evolution"
        ],
        "Invesment": [
            "Robo-advising", "Geopolitical impacts", "Index funds", "Real estate trends",
            "Startup investing", "Social trading", "Tax strategies", "Emerging markets",
            "Financial literacy", "Pension futures"
        ],
        "Facts": [
            "Animal oddities", "Everyday science", "Historical obscurities", "Science myths",
            "Human body facts", "Oceanic discoveries", "Space exploration", "Ancient tech",
            "World laws", "Bizarre new"
        ],
    });

    let [selected, setSelected]: [SelectedType, any] = useState('Fun');

    let [title, setTitle] = useState('');

    return (
        <Box>
            <Typography sx={{
                marginBottom: '8px',
            }}>
                What type of content are you creating?
            </Typography>
            <Box>
                {Object.keys(types).map((key) => (
                    <Chip
                        key={key}
                        color="primary"
                        label={key}
                        variant={selected == key ? "filled" : "outlined"}
                        onClick={handleClick}
                        sx={{
                            border: '1px solid #E2E1E2 !important',
                            background: selected == key ? '#523FD7 !important' : 'transparent',
                            margin: '6px',
                            padding: '16px 8px',
                            color: '#FFF',
                        }}
                    />
                ))}
            </Box>

            <FormControl fullWidth sx={{
                        margin: '18px 0',
                    }}
            >
                <InputLabel id="content-title-select">Select</InputLabel>
                <Select
                    labelId="content-title-select"
                    label="Age"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    color="secondary"
                    sx={{
                        background: 'white',
                    }}
                    inputProps={{
                        MenuProps: {
                            MenuListProps: {
                                sx: {
                                    // background: '#1E1D25 !important',
                                }
                            }
                        }
                    }}
                >
                    <MenuItem value="">Select</MenuItem>
                    {types[selected].map((el) => {
                        console.log(el);
                        return (
                            <MenuItem key={el} value={el}>{el}</MenuItem>
                        )
                    }
                    )}
                </Select>
            </FormControl>

            <Typography sx={{
                marginBottom: '12px'
            }}>
                Set the number of words for output text.
            </Typography>
            <Grid container alignItems="center" sx={{
                background: '#09090D',
                padding: '18px',
                borderRadius: '6px',
                display: 'inline-flex'
            }}>
                <Grid item md={1}>
                    <Typography>100</Typography>
                </Grid>
                <Grid item md={5} xs={9}>
                    <GradientSlider min={100} max={1000} defaultValue={500} aria-label="Default" valueLabelDisplay="auto" />
                </Grid>
                <Grid item md={1} sx={{ padding: '4px'}}>
                    <Typography>1000</Typography>
                </Grid>
            </Grid>
        </Box>
    );

    function handleClick(e: any) {
        console.log(e.target.innerText);
        setSelected(e.target.innerText);
    }
}