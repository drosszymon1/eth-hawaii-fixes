import "./style.css";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  onlyIcon?: boolean;
  variant?: "primary" | "secondary";
}

// TODO: add clsx to handle classnames
export const PrimaryButton = ({
  children,
  className,
  onlyIcon,
  variant,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`button body1${className ? ` ${className}` : ""}${
        onlyIcon ? " only-icon" : ""
      }${variant === "secondary" ? " secondary" : ""}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export const SecondaryButton = () => {
  return <button className="button secondary">Get tickets</button>;
};
