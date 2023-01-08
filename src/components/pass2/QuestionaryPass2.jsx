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
import { InfoQuestionary2 } from "./InfoQuestionary2";

const TaskToReject = [
  "Segaría a navaja",
  "Rechazaría un cachopo",
  "Renunciaría a mis tierras",
  "Regalaría una ternera",
];

export const QuestionaryPass2 = () => {
  const { moveToPass3, onSelectPass2 } = useContext(SirokoContext);
  const [TaskToRejectList, setTaskToRejectList] = useState(TaskToReject);
  const [value, setValue] = useState(TaskToRejectList[0]);

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
    const res = data.task;

    //elimino las 'a', 'A, y espacios
    const filter = res.replace(/([aA ])/g, "");
    const n = 4;

    //selecciono los 4 últimos caractéres del resultado
    const finalFiltered = filter.substring(filter.length - n);
    onSelectPass2(finalFiltered);
    moveToPass3(finalFiltered);
  };

  return (
    <>
      <InfoQuestionary2 />

      <div className="questionnaire">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl component="fieldset" className="questionnaireForm">
            <FormLabel component="legend">
              Por unas fagas Siroko, yo...
            </FormLabel>

            <RadioGroup
              aria-label="year"
              name="year"
              value={value}
              onChange={handleChange}
            >
              {TaskToRejectList.map((task, index) => (
                <FormControlLabel
                  {...register("task")}
                  key={index}
                  value={task}
                  control={<Radio />}
                  label={task}
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
            >
              Siguiente
            </Button>
          </FormControl>
        </form>
      </div>
    </>
  );
};
