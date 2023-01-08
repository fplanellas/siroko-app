import { FileCopy, NavigateNextRounded } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { CountdownTimer } from "./CountdownTimer";
import { InfoQuestionary3 } from "./InfoQuestionary3";
import { SirokoContext } from "../../context/SirokoContext";
import { useContext } from "react";

export const QuestionaryPass3 = () => {
  const { selectionPass } = useContext(SirokoContext);

  return (
    <>
      <InfoQuestionary3 />

      <div className="questionnaire">
        <p className="title">Lo prometido es deuda</p>
        <div className="discount-code">
          <p>{selectionPass}</p>

          <IconButton color="text" aria-label="Copiar">
            Copiar
            <FileCopy color="text" />
          </IconButton>
        </div>

        <p>
          Introduce este código en tu próxima compra para conseguir tu premio.
          ¡Disponible durante 20 minutos!
        </p>

        <CountdownTimer />

        <Button
          className="next"
          variant="contained"
          color="secondary"
          endIcon={<NavigateNextRounded />}
        >
          Ir a siroko.com
        </Button>
      </div>
    </>
  );
};
