import { FunctionComponent } from "react";

import { Badge } from "../badge/badge";

interface ArticleHeaderProps {
  related?: string;
  featured?: boolean;
}

export const ArticleHeader: FunctionComponent<ArticleHeaderProps> = ({
                                                                       related,
                                                                       featured
                                                                     }) => (
  <header>
    { related && <Badge type="related" title={ related } /> }
    { featured && <Badge type="featured" title="Latest Research" /> }
  </header>
)
