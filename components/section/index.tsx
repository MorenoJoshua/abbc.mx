import React from "react";
import { mergeClassNames } from "../../helpers";
type SectionProps = {
  wide?: boolean;
  center?: boolean;
  backgroundImage?: string;
  className?: string;
  height?: string;
  children?: React.ElementType
};
class Section extends React.Component<SectionProps> {
  render() {
    const {
      children,
      wide,
      backgroundImage,
      center,
      className,
      height
    } = this.props;
    const containerClass = wide ? "container-fluid px-0" : "container";
    const centerClass = center ? "c-c" : "";

    return (
      <div
        className={mergeClassNames(
          className,
          // @ts-ignore
          containerClass,
          centerClass
        )}
        style={{
          ...(height && { height }),
          ...(backgroundImage ? { backgroundImage } : {})
        }}
      >
        {children}
      </div>
    );
  }
}

export default Section;
