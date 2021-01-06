import React from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import { useStyles } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectInputCity, typeCity, fetchWeather } from "../../../slices/WeatherSlice";

const SearchInput: React.FC = () => {
  const dispatch = useDispatch();
  const city = useSelector(selectInputCity);
  const classes = useStyles();

  const handleInputChange = (event:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    dispatch(typeCity(event.currentTarget.value));
  };

  const handleCitySearch = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    dispatch(fetchWeather());
  }

  return (
    <Paper component="form" className={classes.root} onSubmit={handleCitySearch}>
      <InputBase
        onChange={handleInputChange}
        value={city}
        className={classes.input}
        placeholder="Enter Your City..."
        inputProps={{ "aria-label": "enter your city" }}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        color="primary"
        className={classes.iconButton}
        aria-label="directions"
      >
        <DirectionsIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchInput;
