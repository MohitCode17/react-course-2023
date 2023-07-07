import ChildB from "./ChildB"

const ChildA = ({title}) => {
  return (
    <ChildB title={title} />
  )
}

export default ChildA