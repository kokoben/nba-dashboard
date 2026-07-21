import { type ComponentPropsWithRef } from 'react';
import styles from '@/components/CustomButton/CustomButton.module.scss';

type CustomButtonProps = ComponentPropsWithRef<'button'>;

function CustomButton ({ ref, children, type = 'button', className, ...props }: CustomButtonProps) {
  const classNames: string = [
    styles['button-wrapper'],
    className,
  ].join(' ');

  return (
    <button
      ref={ref}
      type={type}
      {...props}
      className={classNames}
    >
      {children}
    </button>
  )
}

export default CustomButton;