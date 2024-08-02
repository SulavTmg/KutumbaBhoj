export type HeaderProps = {
  icon?: string;
  btnName?: string;
  heading: string;
  className?: string;
  path?: string;
  search?: boolean;
  filter?: boolean;
  subHeading?: string;
  onSearchChange?: (query: string) => void;
  onClick?: () => void;
};
