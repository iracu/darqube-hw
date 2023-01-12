import { FunctionComponent, PropsWithChildren } from "react";

interface IconButtonProps {
  onClick(): void;
}

export const IconButton: FunctionComponent<PropsWithChildren<IconButtonProps>> = ({
                                                                   onClick,
                                                                   children
                                                                 }) => (
  <button
    onClick={ onClick }
  >
    { children }
  </button>
)
