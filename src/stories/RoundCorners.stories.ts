import { storiesOf } from '@storybook/angular';


 storiesOf('Foundations', module)

  .add('Round Corners', () => ({
    template: `
    <div>

      <div class="box-outer-main fl-w-full">

        <div class="common-heading fl-w-full bl-b">
          <h1 class="pb-vs"> Round Corners </h1>
        </div>
        <div class="common-overview fl-w-full">
          <h4 class="mb-vs"> Overview </h4>
          <p>Incorporating rounded corners into web design is more than a mere trend; it's a thoughtful approach to enhancing visual appeal, usability, and user satisfaction.</p>
        </div>

        <div class="box-border fl-w-full">
          <ul>
            <li>
              <div class="border-radius-outer">
                <div class="border-radius-box brs"></div>
                <div class="border-radius-content">
                  <h4> Small </h4>
                  <p> Forms </p>
                  <p> Buttons </p>
                  <p> Check boxes </p>
                  <p> Selected mark </p>
                  <p> Tooltips etc... </p>
                  <h6> SCSS Variable <span class="sb-var-color"> ( $border-radius-small ) </span> </h6>
                  <h6> Class <span class="sb-class-color"> ( brs ) </span> </h6>
                </div>
              </div>
            </li>
            <li>
              <div class="border-radius-outer">
                <div class="border-radius-box brm"></div>
                <div class="border-radius-content">
                  <h4> Medium </h4>
                  <p> Dropdown </p>
                  <p> Popovers </p>
                  <p> Attention box </p>
                  <p> Updates </p>
                  <h6> SCSS Variable <span class="sb-var-color"> ( $border-radius-medium ) </span> </h6>
                  <h6> Class <span class="sb-class-color"> ( brm ) </span> </h6>
                </div>
              </div>
            </li>
            <li>
              <div class="border-radius-outer">
                <div class="border-radius-box brl"></div>
                <div class="border-radius-content">
                  <h4> Large </h4>
                  <p> Popups </p>
                  <h6> SCSS Variable <span class="sb-var-color"> ( $border-radius-large ) </span> </h6>
                  <h6> Class <span class="sb-class-color"> ( brl ) </span> </h6>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>

    </div>
    `
  }));
