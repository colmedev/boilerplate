type ButtonProps = {
  title: string;
  href?: string;
  ClassName?: string;
  variant: string;
  
};

const Button = ({ title, href, ClassName }: ButtonProps) => {
  return (
    <>
    <button
      className={ClassName}
    >
      <a href={href}>{title}</a>
    </button>
    </>
  );
};

export default Button;
