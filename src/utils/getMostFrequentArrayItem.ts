import _ from 'lodash'

export function getMostFrequentArrayItem(arr: Array<string>) {
  const result = _.head(_(arr).countBy().entries().maxBy(_.last))

  return String(result)
}
