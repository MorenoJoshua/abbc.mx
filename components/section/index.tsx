import React from "react";
import { mergeClassNames } from "../../helpers";
type SectionProps = {
  wide?: boolean;
  center?: boolean;
  backgroundImage?: string;
  className?: string;
};
class Section extends React.Component<SectionProps> {
  render() {
    const { children, wide, backgroundImage, center, className } = this.props;
    const containerClass = wide ? "container-fluid" : "container";
    const centerClass = center ? "c-c" : "";

    return (
      <div
        className={mergeClassNames(
          className,
          containerClass,
          centerClass
        )}
        style={{
          ...(backgroundImage ? { backgroundImage } : {})
        }}
      >
        {children}
      </div>
    );
  }
}

export default Section;
