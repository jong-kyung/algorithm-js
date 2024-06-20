function solution(name, yearning, photo) {
  let names = name.reduce((acc, cur, idx) => {
    acc[cur] = yearning[idx];
    return { ...acc };
  }, {});

  return photo.map((pht) => {
    return pht.reduce((acc, cur) => {
      return name.includes(cur) ? acc + names[cur] : acc;
    }, 0);
  });
}
