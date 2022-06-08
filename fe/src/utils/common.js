export const formData = (form) => {
  if (!form) return {}

  return [...new FormData(form).entries()].reduce((sum, acc) => {
    sum[acc[0]] = acc[1]
    return sum
  }, {})
}
