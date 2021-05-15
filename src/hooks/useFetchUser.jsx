import { useState, useEffect } from "react";
import { URL } from "../utils/api";

const useFetchUser = (userID) => {
  const [robot, setRobot] = useState({});

  useEffect(async () => {
    const response = await fetch(`${URL}/${userID}`);
    const data = await response.json();
    setRobot({ ...data });
  }, [robot]);

  return robot;
};

export { useFetchUser };
