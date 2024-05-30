import { storiesOf } from '@storybook/angular';


 storiesOf('Foundations', module)

  .add('Typography', () => ({
    template: `
    <div>

      <div class="box-outer-main">

        <div class="common-heading">
          <h3 class="tertiary-heading mb-12"> Overview </h3>
          <p> Like in other ui in mondays interface, typography works by principle of accessibility before aesthetics. Therefore the text should be readable and help the user understand what’s important by well contrasted size and colors hierarchy. </p>
        </div>

        <div class="typography-outer">

          <table>
              <tr>
                <th> Style Name </th>
                <th> Line Height </th>
                <th> Demo </th>
              </tr>
              <tr>
                <td class="primary-heading"> H1 </td>
                <td> 42 </td>
                <td>
                  <h1 class="primary-heading"> Primary heading (Roboto 32px bold) </h1>
                  <p> Use as main header on a page ( class= "primary-heading" ) , ( var= " $primary-fs " ) </p>
                </td>
              </tr>
              <tr>
                <td class="secondary-heading"> H2 </td>
                <td> 30 </td>
                <td>
                  <h2 class="secondary-heading"> Secondary heading (Roboto 24px bold) </h2>
                  <p> Use as secondary header on a page ( class= "secondary-heading" ) , ( var= " $secondary-fs " ) </p>
                </td>
              </tr>
              <tr>
                <td class="tertiary-heading"> H3 </td>
                <td> 30 </td>
                <td>
                  <h3 class="tertiary-heading"> Tertiary heading (Roboto 24px light) </h3>
                  <p> Use after heading, profile page headings ( class= "tertiary-heading" ) , ( var= " $tertiary-fs " ) </p>
                </td>
              </tr>
              <tr>
                <td class="fourth-heading"> H4 </td>
                <td> 26 </td>
                <td>
                  <h3 class="fourth-heading"> Fourth heading (Roboto 18px bold) </h3>
                  <p> Use after heading, profile page headings ( class= "fourth-heading" ) , ( var= " $fourth-heading-fs " ) </p>
                </td>
              </tr>
              <tr>
                <td class="subtitle-1"> H5 </td>
                <td> 24 </td>
                <td>
                  <h3 class="subtitle-1"> Subtitle-1 (Roboto 16px bold) </h3>
                  <p> Use as subtitles for paragraphs ( class= "subtitle-1" ) , ( var= " $subtitle-1-fs " ) </p>
                </td>
              </tr>
              <tr>
                <td class="subtitle-2"> H6 </td>
                <td> 22 </td>
                <td>
                  <h3 class="subtitle-2"> Subtitle-2 (Roboto 14px bold) </h3>
                  <p> Use for item name, text in update ( class= "subtitle-2" ) , ( var= " $subtitle-2-fs " ) </p>
                </td>
              </tr>
              <tr>
                <td class="caption-bold"> caption-bold </td>
                <td> 20 </td>
                <td>
                  <h3 class="caption-bold"> Subtitle-2-Small (Roboto 12px bold) </h3>
                  <p> Use for item name, text in update ( class= "caption-bold" ) , ( var= " $caption-bold-fs " ) </p>
                </td>
              </tr>
              <tr>
                <td class="general-text"> text </td>
                <td> 22 </td>
                <td>
                  <h3 class="general-text"> UI labels / General text (Roboto 14px normal) </h3>
                  <p> Use for general text or labels ( class= "general-text" ) , ( var= " $general-text-fs " ) </p>
                </td>
              </tr>
              <tr>
                <td class="capitalize-heading"> Capitalize Heading </td>
                <td> 22 </td>
                <td>
                  <h3 class="capitalize-heading"> Capitalize Heading (Roboto 14px bold) </h3>
                  <p> Use for general Capitalize Heading ( class= "capitalize-heading" ) , ( var= " $capitalize-heading-fs " ) </p>
                </td>
              </tr>
              <tr>
                <td class="label"> Label </td>
                <td> 22 </td>
                <td>
                  <h3 class="label"> Label (Roboto 14px medium) </h3>
                  <p> Use for item name, text in update ( class= "label" ) , ( var= " $label-fs " ) </p>
                </td>
              </tr>
              <tr>
                <td class="small"> small </td>
                <td> 20 </td>
                <td>
                  <small class="small"> Label (Roboto 12px regular) </small>
                  <p> Use for item name, text in update ( class= "small" ) , ( var= " $label-fs " ) </p>
                </td>
              </tr>
          </table>

        </div>

      </div>

    </div>
    `
  }));
