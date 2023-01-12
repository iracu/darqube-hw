export interface NavigationItem {
  to: string;
  name: string;
}

export interface NavigationProps {
  routes: NavigationItem[]
}
