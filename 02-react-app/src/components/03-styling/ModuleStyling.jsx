
import moduleStyles from "./ModuleStyling.module.css";
export default function ModuleStyling() {
  return (
      <div className={moduleStyles.moduleContainerStyle}>
          <h1 className={moduleStyles.moduleHeadingStyle}>MODULE STYLING</h1>

          <p id={moduleStyles.moduleStyleParagraph}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur ab sapiente nisi, iste sunt quisquam veniam eum esse
              sed inventore.
          </p>
      </div>
  );
}
