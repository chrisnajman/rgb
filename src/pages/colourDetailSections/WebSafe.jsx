import { useOutletContext } from "react-router-dom"
export default function WebSafe() {
  const { colour } = useOutletContext()
  return <p className="colour-detail">{colour.webSafe ? "Yes" : "No"}</p>
}
