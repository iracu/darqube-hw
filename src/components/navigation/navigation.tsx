import React, { FunctionComponent } from "react";

import { NavigationProps } from "../../types/navigation";
import { CustomLink } from "../custom-link/custom-link";

export const Navigation: FunctionComponent<NavigationProps> = ({ routes }) => (
  <nav>
    { routes.map(({ to, name }) => (
      <CustomLink to={ to } key={ name }>{ name }</CustomLink>
    )) }
  </nav>
)