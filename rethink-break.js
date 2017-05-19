	// filter with 'break' functionality. How to get first N matching elements
const cats = [{
  name: 'Mojo',
  months: 1
}, {
  name: 'Mao-Mao',
  months: 34
}, {
  name: 'Waffles',
  months: 4
}, {
  name: 'Pickles',
  months: 1
}, {
  name: 'Repo',
  months: 5
}]

const isKitten = (cat) => cat.months < 6
const getName = (cat) => cat.name

const takeFirst = (list, predicate, num, i = 0, newList = []) => {
  const isEnough = num <= 0 || i >= list.length

  if (isEnough) {
    return newList
  } else if (predicate(list[i])) {
    return takeFirst(list, predicate, num - 1, i + 1, [...newList, [getName(list[i])]])
  } else {
    return takeFirst(list, predicate, num, i + 1, newList)
  }
}

const kittens = takeFirst(cats, isKitten, 4);