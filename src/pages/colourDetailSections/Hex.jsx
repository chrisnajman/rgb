import { useOutletContext } from "react-router-dom"
export default function Hex() {
  const { colour } = useOutletContext()
  return (
    <p className="colour-detail">
      <code>{colour.hex}</code>
    </p>
  )
}
