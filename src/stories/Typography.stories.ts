import { storiesOf } from '@storybook/angular';


 storiesOf('Foundations', module)

  .add('Typography', () => ({
    template: `
    <div>

      <div class="box-outer-main fl-w-full">

        <div class="common-heading fl-w-full bl-b">
          <h1 class="pb-vs"> Typography </h1>
        </div>
        <div class="common-overview fl-w-full">
          <h4 class="mb-vs"> Overview </h4>
          <p>Typography in web design is more than just choosing pretty fonts; it's about creating an optimal reading experience, reinforcing your brand identity, guiding users through your content, and ensuring accessibility and responsiveness across different devices.</p>
        </div>

        <div class="small-heading fl-w-full">
          <h4 class="fl-w-full"> Roboto Font Family </h4>
          <p> List of all kind font style which used in product. </p>
        </div>
        <div class="box-border fl-w-full">
          <div class="sb-table-outer">
            <table>
                <tr>
                  <th> Font Family </th>
                  <th> Font Weight </th>
                  <th> Class </th>
                  <th> SCSS Variable </th>
                  <th> Use Case </th>
                </tr>
                <tr>
                  <td> Roboto Light </td>
                  <td> 300 </td>
                  <td class="sb-class-color fw-medium"> fw-light </td>
                  <td class="sb-var-color fw-medium"> $font-light </td>
                  <td class="fw-light"> Any kind of font size </td>
                </tr>
                <tr>
                  <td> Roboto Regular </td>
                  <td> 400 </td>
                  <td class="sb-class-color fw-medium"> fw-regular </td>
                  <td class="sb-var-color fw-medium"> $font-regular </td>
                  <td class="fw-regular"> Any kind of font size </td>
                </tr>
                <tr>
                  <td> Roboto Medium </td>
                  <td> 500 </td>
                  <td class="sb-class-color fw-medium"> fw-medium </td>
                  <td class="sb-var-color fw-medium"> $font-medium </td>
                  <td class="fw-medium"> Any kind of font size </td>
                </tr>
                <tr>
                  <td> Roboto Bold </td>
                  <td> 700 </td>
                  <td class="sb-class-color fw-medium"> fw-bold </td>
                  <td class="sb-var-color fw-medium"> $font-bold </td>
                  <td class="fw-bold fs-16"> Use 16px font size or above </td>
                </tr>
                <tr>
                  <td> Roboto Extra Bold </td>
                  <td> 900 </td>
                  <td class="sb-class-color fw-medium"> fw-extra-bold </td>
                  <td class="sb-var-color fw-medium"> $font-extra-bold </td>
                  <td class="fw-extra-bold fs-18"> Use 18px font size or above </td>
                </tr>
            </table>
          </div>
        </div>

        <div class="small-heading fl-w-full">
          <h4 class="fl-w-full"> Font Style </h4>
          <p> Use tag and class for same font style as in figma designs. SCSS Variables for font size. </p>
        </div>
        <div class="box-border fl-w-full">
          <div class="sb-table-outer">
            <table>
                <tr>
                  <th> Tag Name </th>
                  <th> Class Name </th>
                  <th> Font Size SCSS Variable </th>
                  <th> Line Height </th>
                  <th> Transform </th>
                  <th> Preview </th>
                </tr>
                <tr>
                  <td class="primary-heading"> H1 </td>
                  <td class="sb-class-color fw-medium"> primary-heading </td>
                  <td class="sb-var-color fw-medium"> $primary-fs </td>
                  <td> N/A </td>
                  <td> Capitalize </td>
                  <td>
                    <h1> Primary Heading (Roboto 28px extrabold) </h1>
                    <p> Use as main header on a page </p>
                  </td>
                </tr>
                <tr>
                  <td class="secondary-heading"> H2 </td>
                  <td class="sb-class-color fw-medium"> secondary-heading </td>
                  <td class="sb-var-color fw-medium"> $secondary-fs </td>
                  <td> N/A </td>
                  <td> Capitalize </td>
                  <td>
                    <h2> Secondary Heading (Roboto 20px bold) </h2>
                    <p> Use as secondary header on a page </p>
                  </td>
                </tr>
                <tr>
                  <td class="tertiary-heading"> H3 </td>
                  <td class="sb-class-color fw-medium"> tertiary-heading </td>
                  <td class="sb-var-color fw-medium"> $tertiary-fs </td>
                  <td> N/A </td>
                  <td> Capitalize </td>
                  <td>
                    <h3> Tertiary Heading (Roboto 16px light) </h3>
                    <p> Use after heading, profile page headings </p>
                  </td>
                </tr>
                <tr>
                  <td class="fourth-heading"> H4 </td>
                  <td class="sb-class-color fw-medium"> fourth-heading </td>
                  <td class="sb-var-color fw-medium"> $fourth-heading-fs </td>
                  <td> N/A </td>
                  <td> Capitalize </td>
                  <td>
                    <h4> Fourth Heading (Roboto 16px bold) </h4>
                    <p> Use after heading, profile page headings </p>
                  </td>
                </tr>
                <tr>
                  <td class="subtitle-1"> H5 </td>
                  <td class="sb-class-color fw-medium"> subtitle-1 </td>
                  <td class="sb-var-color fw-medium"> $subtitle-1-fs </td>
                  <td> N/A </td>
                  <td> Capitalize </td>
                  <td>
                    <h5> Subtitle-1 (Roboto 15px medium) </h5>
                    <p> Use as subtitles for paragraphs </p>
                  </td>
                </tr>
                <tr>
                  <td class="subtitle-2"> H6 </td>
                  <td class="sb-class-color fw-medium"> subtitle-2 </td>
                  <td class="sb-var-color fw-medium"> $subtitle-2-fs </td>
                  <td> N/A </td>
                  <td> Capitalize </td>
                  <td>
                    <h6> Subtitle-2 (Roboto 13px medium) </h6>
                    <p> Use for item name, text in update </p>
                  </td>
                </tr>
                <tr>
                  <td class="normal-text"> p </td>
                  <td class="sb-class-color fw-medium"> normal-text </td>
                  <td class="sb-var-color fw-medium"> $normal-text-m-fs </td>
                  <td> N/A </td>
                  <td> Capitalize </td>
                  <td>
                    <p> Normal Text (Roboto 13px regular) </p>
                    <p> Use for general text </p>
                  </td>
                </tr>
                <tr>
                  <td class="normal-text"> a </td>
                  <td class="sb-class-color fw-medium"> link-text </td>
                  <td class="sb-var-color fw-medium"> $link-text-m-fs </td>
                  <td> N/A </td>
                  <td> Capitalize </td>
                  <td>
                    <a> Link Text (Roboto 13px medium) </a>
                    <p> Use for links </p>
                  </td>
                </tr>
                <tr>
                  <td class="label"> label </td>
                  <td class="sb-class-color fw-medium"> label </td>
                  <td class="sb-var-color fw-medium"> $label-m-fs </td>
                  <td> N/A </td>
                  <td> Capitalize </td>
                  <td>
                    <a> Label (Roboto 13px medium) </a>
                    <p> Use for item name, text in update </p>
                  </td>
                </tr>
                <tr>
                  <td class="caption"> span </td>
                  <td class="sb-class-color fw-medium"> caption </td>
                  <td class="sb-var-color fw-medium"> $caption-fs </td>
                  <td> N/A </td>
                  <td> Capitalize </td>
                  <td>
                    <span> Caption (Roboto 12px regular) </span>
                    <p> Use for small text </p>
                  </td>
                </tr>
                <tr>
                  <td class="caption-medium"> Use class or Variable on tag </td>
                  <td class="sb-class-color fw-medium"> caption-medium </td>
                  <td class="sb-var-color fw-medium"> $caption-fs </td>
                  <td> N/A </td>
                  <td> Capitalize </td>
                  <td>
                    <span class="caption-medium"> Caption (Roboto 12px medium) </span>
                    <p> Use for small text </p>
                  </td>
                </tr>

                
            </table>
          </div>
        </div>

      </div>

    </div>
    `
  }));
