import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

// "as" prop specifies which HTML element the "Button" component will be used as
type ButtonProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

// Defaault html type is button.
// USAGE : <Button as="a">Click me</Button>
export default function Button<T extends ElementType = "button">({ as, children, ...rest }: ButtonProps<T>) {
  /* ComponentPropsWithoutRef can be used to take all the native
  attributes of an HTML element or take props type of your component*/

  /* type Button = ComponentPropsWithoutRef<"button">
  This brings all native attrbiutes of button */

  // This makes html tag type dynamic
  const Component = as || "button";

  return <Component {...rest}>{children}</Component>;
}
