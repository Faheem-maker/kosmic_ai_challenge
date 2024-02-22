import React from "react";
import { makeStyles, withStyles } from "@material-ui/styles";
import Slider from "@material-ui/core/Slider";

const CustomSlider = withStyles({
    rail: {
        backgroundImage: "linear-gradient(.25turn, #BB64F0, #BB64F0)"
    },
    track: {
        backgroundImage: "linear-gradient(.25turn, #6947DD, #6947DD)"
    }
})(Slider);

export default function GradientSlider({ ...props }) {
    return <CustomSlider
        {...props}
    />;
}