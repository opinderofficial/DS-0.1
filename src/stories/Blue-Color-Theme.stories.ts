import { storiesOf } from '@storybook/angular';


 storiesOf('Foundations', module)

  .add('Colors', () => ({
    template: `
    <div>

      <div class="box-outer-main fl-w-full">

        <div class="common-heading fl-w-full bl-b">
          <h1 class="pb-vs"> Colors </h1>
        </div>
        <div class="common-overview fl-w-full">
          <h4 class="mb-vs"> Overview </h4>
          <p>Incorporating rounded corners into web design is more than a mere trend; it's a thoughtful approach to enhancing visual appeal, usability, and user satisfaction.</p>
        </div>

        <div class="small-heading fl-w-full">
          <h4 class="fl-w-full"> Blue Color Scheme </h4>
        </div>

        <div class="box-border">

          <div class="outer-color">
            <div class="color-code primary-bg"></div>
            <div class="color-content">
              <h2 class="sub-heading"> primary-color </h2>
              <p> Use this to emphasise main ui components ( class= "primary-bg" ) </p>
            </div>
          </div>
          <div class="outer-color">
            <div class="color-code primary-bg-hover"></div>
            <div class="color-content">
              <h2 class="sub-heading"> primary-hover-color </h2>
              <p> Use only as a hover on primary color ( class= "primary-bg-hover" ) </p>
            </div>
          </div>
          <div class="outer-color">
            <div class="color-code primary-bg-active"></div>
            <div class="color-content">
              <h2 class="sub-heading"> primary-selected-color </h2>
              <p> Use this to indicate selected state of primary items ( class= "primary-bg-active" ) </p>
            </div>
          </div>

          <div class="outer-color">
            <div class="color-code secondary-bg"></div>
            <div class="color-content">
              <h2 class="sub-heading"> secondary-color </h2>
              <p> Use this to emphasise main ui components ( class= "secondary-bg" ) </p>
            </div>
          </div>
          <div class="outer-color">
            <div class="color-code secondary-bg-hover"></div>
            <div class="color-content">
              <h2 class="sub-heading"> secondary-hover-color </h2>
              <p> Use only as a hover on secondary color ( class= "secondary-bg-hover" ) </p>
            </div>
          </div>
          <div class="outer-color">
            <div class="color-code secondary-bg-active"></div>
            <div class="color-content">
              <h2 class="sub-heading"> secondary-selected-color </h2>
              <p> Use this to indicate selected state of secondary items ( class= "secondary-bg-active" ) </p>
            </div>
          </div>
          <div class="outer-color">
            <div class="color-code secondary-bg-light"></div>
            <div class="color-content">
              <h2 class="sub-heading"> secondary-light </h2>
              <p> Use this to indicate light background state of secondary items ( class= "secondary-bg-light" ) </p>
            </div>
          </div>

          <div class="outer-color">
            <div class="color-code positive-bg"></div>
            <div class="color-content">
              <h2 class="sub-heading"> positive-color </h2>
              <p> Use when you want to indicate sometime positive (success, completion of something...) ( class= "positive-bg" ) </p>
            </div>
          </div>
          <div class="outer-color">
            <div class="color-code positive-bg-hover"></div>
            <div class="color-content">
              <h2 class="sub-heading"> positive-color-hover </h2>
              <p> Use only as hover color on positive color ( class= "positive-bg-hover" ) </p>
            </div>
          </div>
          <div class="outer-color">
            <div class="color-code positive-bg-active"></div>
            <div class="color-content">
              <h2 class="sub-heading"> positive-color-selected </h2>
              <p> Use only as selected indication for a positive colors ( class= "positive-bg-active" ) </p>
            </div>
          </div>
          <div class="outer-color">
            <div class="color-code positive-bg-light"></div>
            <div class="color-content">
              <h2 class="sub-heading"> positive-light </h2>
              <p> Use only as selected indication for a positive colors ( class= "positive-bg-light" ) </p>
            </div>
          </div>

          <div class="outer-color">
            <div class="color-code negative-bg"></div>
            <div class="color-content">
              <h2 class="sub-heading"> negative-color </h2>
              <p> Use when you want to indicate a negative action/state (delete, failed action..., error) ( class= "negative-bg" ) </p>
            </div>
          </div>
          <div class="outer-color">
            <div class="color-code negative-bg-hover"></div>
            <div class="color-content">
              <h2 class="sub-heading"> negative-color-hover </h2>
              <p> Use only as hover color on negative color ( class= "negative-bg-hover" ) </p>
            </div>
          </div>
          <div class="outer-color">
            <div class="color-code negative-bg-active"></div>
            <div class="color-content">
              <h2 class="sub-heading"> negative-color-selected </h2>
              <p> Use only as selected indication for a negative colors ( class= "negative-bg-active" ) </p>
            </div>
          </div>
          <div class="outer-color">
            <div class="color-code negative-bg-light"></div>
            <div class="color-content">
              <h2 class="sub-heading"> negative-light </h2>
              <p> Use only as background indication for a negative colors ( class= "negative-bg-light" ) </p>
            </div>
          </div>

          <div class="outer-color">
            <div class="color-code warning-bg"></div>
            <div class="color-content">
              <h2 class="sub-heading"> warning-color </h2>
              <p> Use when you want to indicate a warning state ( class= "warning-bg" ) </p>
            </div>
          </div>
          <div class="outer-color">
            <div class="color-code warning-bg-hover"></div>
            <div class="color-content">
              <h2 class="sub-heading"> warning-color-hover </h2>
              <p> Use only as hover color on warning color ( class= "warning-bg-hover" ) </p>
            </div>
          </div>
          <div class="outer-color">
            <div class="color-code warning-bg-active"></div>
            <div class="color-content">
              <h2 class="sub-heading"> warning-color-selected </h2>
              <p> Use only as selected indication for a warning colors ( class= "warning-bg-active" ) </p>
            </div>
          </div>
          <div class="outer-color">
            <div class="color-code warning-bg-light"></div>
            <div class="color-content">
              <h2 class="sub-heading"> warning-light </h2>
              <p> Use only as background indication for a warning colors ( class= "warning-bg-light" ) </p>
            </div>
          </div>

          <div class="outer-color">
            <div class="color-code disable-color-bg"></div>
            <div class="color-content">
              <h2 class="sub-heading"> Disabled </h2>
              <p> Disabled background color ( class= "disable-color-bg" ) </p>
            </div>
          </div>

          <div class="outer-color">
            <div class="color-code inverted-bg"></div>
            <div class="color-content">
              <h2 class="sub-heading"> inverted-color-background </h2>
              <p> Inverted background color (opposite of primary background color) ( class= "inverted-bg" ) </p>
            </div>
          </div>

          <div class="outer-color">
            <div class="color-code icon-color-bg"></div>
            <div class="color-content">
              <h2 class="sub-heading"> icon-color </h2>
              <p> Default color for icons ( class= "icon-color" ) </p>
            </div>
          </div>

        </div>

      </div>





      <div class="box-outer-main">

        <div class="common-heading mt-48px">
          <h3 class="tertiary-heading"> Background colors </h3>
        </div>

        <div class="box-border">

          <div class="outer-color">
            <div class="color-code primary-background layout-border"></div>
            <div class="color-content">
              <h2 class="sub-heading"> primary-background-color </h2>
              <p> Primary background color ( class= "primary-background" ) </p>
            </div>
          </div>
          <div class="outer-color">
            <div class="color-code secondary-background layout-border"></div>
            <div class="color-content">
              <h2 class="sub-heading"> secondary-background-color </h2>
              <p> Secondary background color ( class= "secondary-background" ) </p>
            </div>
          </div>
          <div class="outer-color">
            <div class="color-code primary-background-hover"></div>
            <div class="color-content">
              <h2 class="sub-heading"> primary-background-hover-color </h2>
              <p> Use as hover color ( class= "primary-background-hover" ) </p>
            </div>
          </div>
          <div class="outer-color">
            <div class="color-code inverted-color-background"></div>
            <div class="color-content">
              <h2 class="sub-heading"> primary-background-hover-color </h2>
              <p> Use as hover color ( class= "inverted-color-background" ) </p>
            </div>
          </div>
          <div class="outer-color">
            <div class="color-code grey-background"></div>
            <div class="color-content">
              <h2 class="sub-heading"> Grey-Background </h2>
              <p> Use as grey background ( class= "grey-background" ) </p>
            </div>
          </div>

        </div>

      </div>






      <div class="box-outer-main">

        <div class="common-heading mt-48px">
          <h3 class="tertiary-heading"> Text colors </h3>
        </div>

        <div class="box-border">

          <div class="outer-color">
            <div class="color-code primary-text-color-bg"></div>
            <div class="color-content">
              <h2 class="sub-heading"> primary-text-color </h2>
              <p> Use for default text color ( class= "primary-text-color" ) </p>
            </div>
          </div>
          <div class="outer-color">
            <div class="color-code secondary-text-color-bg"></div>
            <div class="color-content">
              <h2 class="sub-heading"> secondary-text-color </h2>
              <p> Use when you need text with lesser importance ( class= "secondary-text-color" ) </p>
            </div>
          </div>
          <div class="outer-color">
            <div class="color-code text-color-on-inverted-bg ui-border"></div>
            <div class="color-content">
              <h2 class="sub-heading"> text-color-on-inverted </h2>
              <p> Inverted text color (opposite of primary text color) ( class= "text-color-on-inverted" ) </p>
            </div>
          </div>
          <div class="outer-color">
            <div class="color-code text-color-on-primary-bg ui-border"></div>
            <div class="color-content">
              <h2 class="sub-heading"> text-color-on-primary </h2>
              <p> Use for text on primary color ( class= "text-color-on-primary" ) </p>
            </div>
          </div>
          <div class="outer-color">
            <div class="color-code disabled-text-color-bg"></div>
            <div class="color-content">
              <h2 class="sub-heading"> disabled-text-color </h2>
              <p> Use as text in disabled components ( class= "disabled-text-color" ) </p>
            </div>
          </div>
          <div class="outer-color">
            <div class="color-code placeholder-color-bg"></div>
            <div class="color-content">
              <h2 class="sub-heading"> placeholder-color </h2>
              <p> Use for placeholder text in inputs fields ( class= "placeholder-color" ) </p>
            </div>
          </div>
          <div class="outer-color">
            <div class="color-code link-color-bg"></div>
            <div class="color-content">
              <h2 class="sub-heading"> link-color </h2>
              <p> Use only for links ( class= "link-color" ) </p>
            </div>
          </div>

        </div>

      </div>




      <div class="box-outer-main">

        <div class="common-heading mt-48px">
          <h3 class="tertiary-heading"> Border colors </h3>
        </div>

        <div class="box-border">

          <div class="outer-color">
            <div class="color-code ui-border-color"></div>
            <div class="color-content">
              <h2 class="sub-heading"> ui-border-color </h2>
              <p> Border color for ui elements and components (Button, Input...) ( class= "ui-border" ) </p>
            </div>
          </div>
          <div class="outer-color">
            <div class="color-code layout-border-color"></div>
            <div class="color-content">
              <h2 class="sub-heading"> layout-border-color </h2>
              <p> Border color for general layout and separators (Leftpane, Menu Divider...) ( class= "layout-border" ) </p>
            </div>
          </div>

        </div>

      </div>




    </div>
    `
  }));
