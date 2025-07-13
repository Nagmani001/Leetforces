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

export const code = atom<string>("");

export const customInput = atom("");
export const basicTestCase = atom([]);
export const mainTestCase = atom([]);
export const randomTestCaseOutput = atom("");
export const randomTestCaseInput = atom("");
