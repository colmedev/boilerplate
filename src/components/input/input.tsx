type InputsProps = {
  title: string;
  type: string;
}

const Input = ({ title, type }: InputsProps) => {
  return (
    <input type={type} placeholder={title}  />
  )
}

export default Input;