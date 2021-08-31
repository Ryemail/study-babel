interface Param {
  name: string;
  age?: number;
}

const onTest = (parma: Param) => {
  console.log({ ...parma });
};

onTest({ name: "阮书垚", age: 34 });
