const disjuntores = [false, false, true, false, false, true, false, false];
disjuntores.forEach((disjuntor, index) => {
  if (disjuntor) {
    console.log(index);
  }
});
