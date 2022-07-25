function minNum(samDaily, kellyDaily, difference) {
  // Write your code here
  // let samSolved = samDaily + difference;
  // if (kellyDaily > samSolved) {
  //   console.log(kellyDaily - samSolved)

  //   return kellyDaily - samSolved
  // }

  // return minNum(samSolved, kellyDaily * 2, difference)

  let samSolved = samDaily + difference;
  if (samDaily === kellyDaily) {
    return -1;
  }
  let days = 0;
  while (true) {
    days += 1;
    if (kellyDaily > samSolved) {
      console.log(days);
      return days;
    } else {
      samSolved += samDaily;
      kellyDaily += kellyDaily;
    }
  }
}

minNum(100, 100, 0);
