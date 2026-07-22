import { type ComponentPropsWithRef } from 'react';
import styles from '@/components/CustomButton/CustomButton.module.scss';

type CustomButtonProps = ComponentPropsWithRef<'button'>;

function CustomButton({ type = 'button', className, ...props }: CustomButtonProps) {
  const classNames: string = [
    styles['button-wrapper'],
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      {...props}
      className={classNames}
    />
  )
}

export default CustomButton;