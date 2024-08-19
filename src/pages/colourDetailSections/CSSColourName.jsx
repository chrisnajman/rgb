import { useOutletContext } from "react-router-dom"
export default function CSSColourName() {
  const { colour } = useOutletContext()
  return (
    <p className="colour-detail">
      <code>{colour.cssColorName}</code>
    </p>
  )
}
