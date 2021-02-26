const useDebounce = (func, delay) => {
  let timer
  const cancel = () => clearTimeout(timer)

  function next() {
    const ctx = this
    const args = arguments
    cancel()
    timer = setTimeout(() => func.apply(ctx, args), delay)
  }

  return {
    next,
    cancel,
  }
}

export default useDebounce
