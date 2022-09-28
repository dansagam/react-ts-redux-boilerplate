import { Theme, Components } from "@mui/material";
import Autocomplete from "./Autocomplete";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";
import Menu from "./Menu";
import Paper from "./Paper";
import Typography from "./Typography";

export default function ComponentOverides(theme: Theme): Components {
  return {
    ...Input(theme),
    ...Card(theme),
    ...Menu(),
    ...Typography(theme),
    ...Paper(theme),
    ...Button(theme),
    ...Autocomplete(theme),
  };
}
