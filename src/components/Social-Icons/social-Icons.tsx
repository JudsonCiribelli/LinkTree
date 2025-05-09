import { ReactNode } from "react";

interface SocialIconsProps{
  url: string,
  children: ReactNode
}

const SocialIcons = ({url, children}: SocialIconsProps) => {
  return ( 
    <a href={url} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
   );
}
 
export default SocialIcons;