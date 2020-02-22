type mergeClassNamesParams = (string | string[])[];
const mergeClassNames: (mergeClassNamesParams) => string = (...classes) => {
  const allStrings = classes.reduce(
    (acc, curr) => [...acc, typeof curr === "string" ? curr : curr.flat()],
    []
  );
  return Array.from(new Set(allStrings)).join(" ");
};

export { mergeClassNames };
