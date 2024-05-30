import { storiesOf } from '@storybook/angular';


 storiesOf('Foundations', module)

  .add('Round Corners', () => ({
    template: `
    <div>

      <div class="box-outer-main">

        <div class="common-heading">
          <h3 class="tertiary-heading mb-12px"> Round Corners </h3>
          <p> Our design system contains various fixed units for radius of elements corners. </p>
        </div>

        <div class="box-border">
          <ul>
            <li>
              <div class="border-radius-outer">
                <div class="border-radius-box border-radius-small"></div>
                <div class="border-radius-content">
                  <h4 class="subtitle-2"> Small </h4>
                  <p> Forms </p>
                  <p> Buttons </p>
                  <p> Check boxes </p>
                  <p> Selected mark </p>
                  <p> Tooltips etc... </p>
                  <p> ( class="border-radius-small" ) </p>
                  <p> ( var="$border-radius-small" ) </p>
                </div>
              </div>
            </li>
            <li>
              <div class="border-radius-outer">
                <div class="border-radius-box border-radius-medium"></div>
                <div class="border-radius-content">
                  <h4 class="subtitle-2"> Medium </h4>
                  <p> Dropdown </p>
                  <p> Popovers </p>
                  <p> Attention box </p>
                  <p> Updates </p>
                  <p> ( class="border-radius-medium" ) </p>
                  <p> ( var="$border-radius-medium" ) </p>
                </div>
              </div>
            </li>
            <li>
              <div class="border-radius-outer">
                <div class="border-radius-box border-radius-large"></div>
                <div class="border-radius-content">
                  <h4 class="subtitle-2"> Large </h4>
                  <p> Popups </p>
                  <p> ( class="border-radius-large" ) </p>
                  <p> ( var="$border-radius-large" ) </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>

    </div>
    `
  }));
