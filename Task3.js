function Fact(num) {
  let rval = 1;
  for (let i = 2; i <= num; ++i) rval *= i;
  return rval;
}

for(let i = 0;i<=6;++i)
{
    console.log(`${i}! = ${Fact(i)}`)
}
