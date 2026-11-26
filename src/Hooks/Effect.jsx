import React , { useEffect } from 'react'

export const Effect = () => {
    const [count, setCount] = React.useState(0);

  return (
    <>
      <div> Effect </div>
      <p>Count : {count}</p>
    </>
  )
}
export default Effect

