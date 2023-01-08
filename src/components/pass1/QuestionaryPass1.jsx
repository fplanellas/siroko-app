import { NavigateNextRounded } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { SirokoContext } from "../../context/SirokoContext";
import { InfoQuestionary1 } from "./InfoQuestionary1";

const years = ["2016", "2017", "2018", "2019", "2020", "2021"];

export const QuestionaryPass1 = () => {
  const { moveToPass2, onSelectPass1 } = useContext(SirokoContext);
  const [yearsList, setYearsList] = useState(years);
  const [value, setValue] = useState(yearsList[0]);

  const handleChange = ({ target }) => {
    setValue(target.value);
    const year = target.parentNode.parentNode.parentNode.childNodes;
    year.forEach((el) => {
      el.classList.remove("active");
    });
    target.parentNode.parentNode.classList.add("active");
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const res = data.year;
    //sumo los dos úlitmos caractéres
    const sumLastTwoNumbers = (res % 10) + ((res % 100) - (res % 10)) / 10;
    onSelectPass1(sumLastTwoNumbers);
  };

  return (
    <>
      <InfoQuestionary1 />

      <div className="questionnaire">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl component="fieldset" className="questionnaireForm">
            <FormLabel component="legend">Uso siroko desde...</FormLabel>

            <RadioGroup
              aria-label="year"
              name="year"
              value={value}
              onChange={handleChange}
            >
              {yearsList.map((year, index) => (
                <FormControlLabel
                  {...register("year")}
                  key={index}
                  value={year}
                  control={<Radio />}
                  label={year}
                  className={index === 0 ? "active" : ""}
                />
              ))}
            </RadioGroup>

            <Button
              type="submit"
              className="next"
              variant="contained"
              color="secondary"
              endIcon={<NavigateNextRounded />}
              onClick={() => moveToPass2()}
            >
              Siguiente
            </Button>
          </FormControl>
        </form>
      </div>
    </>
  );
};
