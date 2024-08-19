import { useOutletContext } from "react-router-dom"
export default function RGB() {
  const { colour } = useOutletContext()
  return (
    <p className="colour-detail">
      <code>{colour.rgb}</code>
    </p>
  )
}
