import { AccessAlarms, Replay } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import { SirokoContext } from "../../context/SirokoContext";

export const CountdownTimer = () => {
  const { selectionPass } = useContext(SirokoContext);
  const intervalRef = useRef(null);
  const [timer, setTimer] = useState("00:00");

  const getTimeRemaining = (endtime) => {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);

    return {
      total,
      minutes,
      seconds,
    };
  };

  const startTimer = (deadline) => {
    let { total, minutes, seconds } = getTimeRemaining(deadline);

    if (total >= 0) {
      setTimer(
        (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : 0 + seconds)
      );
    } else {
      clearInterval(intervalRef.current);
      setTimer("00:00");
    }
  };

  const clearTimer = (endtime) => {
    setTimer("20:00");

    if (intervalRef.current) clearInterval(intervalRef.current);

    const id = setInterval(() => {
      startTimer(endtime);
    }, 1000);
    intervalRef.current = id;
  };

  const getDeadlineTime = () => {
    let deadline = new Date();
    deadline.setMinutes(deadline.getMinutes() + 20);

    return deadline;
  };

  const reload = () => {
    location.reload();
  };

  useEffect(() => {
    clearTimer(getDeadlineTime());

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [selectionPass]);

  return (
    <>
      <div className={"countdown " + (timer === "00:00" ? "expired" : "")}>
        <AccessAlarms color="primary" />

        <p className={"timer " + (timer === "00:00" ? "hide" : "")}>{timer}</p>
        <p className={"expired_advice " + (timer === "00:00" ? "show" : "")}>
          Código caducado.
          <Button
            className="next"
            variant="contained"
            color="secondary"
            endIcon={<Replay color="primary" />}
            onClick={reload}
          >
            Vovler a empezar?
          </Button>
        </p>
      </div>
    </>
  );
};
