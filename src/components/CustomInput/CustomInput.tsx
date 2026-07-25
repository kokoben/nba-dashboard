import { type ComponentPropsWithRef } from "react";
import styles from '@/components/CustomInput/CustomInput.module.scss';

type CustomInputProps = ComponentPropsWithRef<'input'>

function CustomInput({ className, ...props }: CustomInputProps) {
  // derived values
  const classNames: string = [
    styles['input-wrapper'],
    className,
  ].filter(Boolean).join(' ');

  return (
    <input
      {...props}
      className={classNames}
    />
  )
}

export default CustomInput;