import { atom } from "jotai";

export const addProblems = atom({
  title: "",
  descriptionTop: "",
  descriptionBottom: "",
  cpuTimelimit: 0,
  memoryTimelimit: 0,
  password: "",
  difficulty: "",
});

export const testCases = atom([{
  input: "",
  output: "",
}]);

export const basicTestCases = atom([{
  input: "",
  output: "",
}]);
