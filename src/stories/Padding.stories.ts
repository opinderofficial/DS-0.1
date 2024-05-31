import { storiesOf } from '@storybook/angular';


 storiesOf('Foundations', module)

  .add('Padding', () => ({
    template: `
    <div>

      <div class="box-outer-main fl-w-full">

        <div class="common-heading fl-w-full bl-b">
          <h1 class="pb-vs"> Padding </h1>
        </div>
        <div class="common-overview fl-w-full">
          <h4 class="mb-vs"> Overview </h4>
          <p>Padding is essential in web design because it enhances readability, aesthetics, interactivity, content emphasis, consistency, responsiveness, hierarchy, structure, accessibility, and content protection. Proper use of padding helps create a user-friendly, visually appealing, and well-organized website.</p>
        </div>

        <div class="small-heading fl-w-full">
          <h4 class="fl-w-full"> No Padding </h4>
        </div>
        <div class="box-border fl-w-full">
          <div class="sb-table-outer fl-w-full">
            <table>
              <thead>
                <tr>
                  <th> Padding Size </th>
                  <th> SCSS Variable </th>
                  <th> Value </th>
                  <th> Class </th>
                  <th> Properties </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>  </td>
                  <td class="sb-var-color fw-medium"> $padding-z </td>
                  <td> 0px </td>
                  <td class="sb-class-color fw-medium"> p-z </td>
                  <td> padding: 0px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> pt-z </td>
                  <td> padding-top: 0px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> pr-z </td>
                  <td> padding-right: 0px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> pb-z </td>
                  <td> padding-bottom: 0px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> pl-z </td>
                  <td> padding-left: 0px; </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="small-heading fl-w-full">
          <h4 class="fl-w-full"> Padding Tiny </h4>
        </div>
        <div class="box-border fl-w-full">
          <div class="sb-table-outer fl-w-full">
            <table>
              <thead>
                <tr>
                  <th> Padding Size </th>
                  <th> SCSS Variable </th>
                  <th> Value </th>
                  <th> Class </th>
                  <th> Properties </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> <div class="mp-size-box size-1"></div> </td>
                  <td class="sb-var-color fw-medium"> $padding-tiny </td>
                  <td> 1px </td>
                  <td class="sb-class-color fw-medium"> m-tiny </td>
                  <td> padding: 1px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mt-tiny </td>
                  <td> padding-top: 1px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mr-tiny </td>
                  <td> padding-right: 1px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mb-tiny </td>
                  <td> padding-bottom: 1px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> ml-tiny </td>
                  <td> padding-left: 1px; </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="small-heading fl-w-full">
          <h4 class="fl-w-full"> Padding VVS </h4>
        </div>
        <div class="box-border fl-w-full">
          <div class="sb-table-outer fl-w-full">
            <table>
              <thead>
                <tr>
                  <th> Padding Size </th>
                  <th> SCSS Variable </th>
                  <th> Value </th>
                  <th> Class </th>
                  <th> Properties </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> <div class="mp-size-box size-4"></div> </td>
                  <td class="sb-var-color fw-medium"> $padding-vvs </td>
                  <td> 4px </td>
                  <td class="sb-class-color fw-medium"> m-vvs </td>
                  <td> padding: 4px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mt-vvs </td>
                  <td> padding-top: 4px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mr-vvs </td>
                  <td> padding-right: 4px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mb-vvs </td>
                  <td> padding-bottom: 4px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> ml-vvs </td>
                  <td> padding-left: 4px; </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="small-heading fl-w-full">
          <h4 class="fl-w-full"> Padding VS </h4>
        </div>
        <div class="box-border fl-w-full">
          <div class="sb-table-outer fl-w-full">
            <table>
              <thead>
                <tr>
                  <th> Padding Size </th>
                  <th> SCSS Variable </th>
                  <th> Value </th>
                  <th> Class </th>
                  <th> Properties </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> <div class="mp-size-box size-8"></div> </td>
                  <td class="sb-var-color fw-medium"> $padding-vs </td>
                  <td> 8px </td>
                  <td class="sb-class-color fw-medium"> m-vs </td>
                  <td> padding: 8px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mt-vs </td>
                  <td> padding-top: 8px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mr-vs </td>
                  <td> padding-right: 8px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mb-vs </td>
                  <td> padding-bottom: 8px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> ml-vs </td>
                  <td> padding-left: 8px; </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="small-heading fl-w-full">
          <h4 class="fl-w-full"> Padding Small </h4>
        </div>
        <div class="box-border fl-w-full">
          <div class="sb-table-outer fl-w-full">
            <table>
              <thead>
                <tr>
                  <th> Padding Size </th>
                  <th> SCSS Variable </th>
                  <th> Value </th>
                  <th> Class </th>
                  <th> Properties </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> <div class="mp-size-box size-16"></div> </td>
                  <td class="sb-var-color fw-medium"> $padding-small </td>
                  <td> 16px </td>
                  <td class="sb-class-color fw-medium"> m-small </td>
                  <td> padding: 16px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mt-small </td>
                  <td> padding-top: 16px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mr-small </td>
                  <td> padding-right: 16px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mb-small </td>
                  <td> padding-bottom: 16px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> ml-small </td>
                  <td> padding-left: 16px; </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="small-heading fl-w-full">
          <h4 class="fl-w-full"> Padding Medium </h4>
        </div>
        <div class="box-border fl-w-full">
          <div class="sb-table-outer fl-w-full">
            <table>
              <thead>
                <tr>
                  <th> Padding Size </th>
                  <th> SCSS Variable </th>
                  <th> Value </th>
                  <th> Class </th>
                  <th> Properties </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> <div class="mp-size-box size-24"></div> </td>
                  <td class="sb-var-color fw-medium"> $padding-medium </td>
                  <td> 24px </td>
                  <td class="sb-class-color fw-medium"> m-medium </td>
                  <td> padding: 24px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mt-medium </td>
                  <td> padding-top: 24px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mr-medium </td>
                  <td> padding-right: 24px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mb-medium </td>
                  <td> padding-bottom: 24px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> ml-medium </td>
                  <td> padding-left: 24px; </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="small-heading fl-w-full">
          <h4 class="fl-w-full"> Padding Large </h4>
        </div>
        <div class="box-border fl-w-full">
          <div class="sb-table-outer fl-w-full">
            <table>
              <thead>
                <tr>
                  <th> Padding Size </th>
                  <th> SCSS Variable </th>
                  <th> Value </th>
                  <th> Class </th>
                  <th> Properties </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> <div class="mp-size-box size-32"></div> </td>
                  <td class="sb-var-color fw-medium"> $padding-large </td>
                  <td> 32px </td>
                  <td class="sb-class-color fw-medium"> m-large </td>
                  <td> padding: 32px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mt-large </td>
                  <td> padding-top: 32px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mr-large </td>
                  <td> padding-right: 32px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mb-large </td>
                  <td> padding-bottom: 32px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> ml-large </td>
                  <td> padding-left: 32px; </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="small-heading fl-w-full">
          <h4 class="fl-w-full"> Padding XL </h4>
        </div>
        <div class="box-border fl-w-full">
          <div class="sb-table-outer fl-w-full">
            <table>
              <thead>
                <tr>
                  <th> Padding Size </th>
                  <th> SCSS Variable </th>
                  <th> Value </th>
                  <th> Class </th>
                  <th> Properties </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> <div class="mp-size-box size-38"></div> </td>
                  <td class="sb-var-color fw-medium"> $padding-xl </td>
                  <td> 38px </td>
                  <td class="sb-class-color fw-medium"> m-xl </td>
                  <td> padding: 38px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mt-xl </td>
                  <td> padding-top: 38px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mr-xl </td>
                  <td> padding-right: 38px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mb-xl </td>
                  <td> padding-bottom: 38px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> ml-xl </td>
                  <td> padding-left: 38px; </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="small-heading fl-w-full">
          <h4 class="fl-w-full"> Padding XXL </h4>
        </div>
        <div class="box-border fl-w-full">
          <div class="sb-table-outer fl-w-full">
            <table>
              <thead>
                <tr>
                  <th> Padding Size </th>
                  <th> SCSS Variable </th>
                  <th> Value </th>
                  <th> Class </th>
                  <th> Properties </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> <div class="mp-size-box size-48"></div> </td>
                  <td class="sb-var-color fw-medium"> $padding-xxl </td>
                  <td> 48px </td>
                  <td class="sb-class-color fw-medium"> m-xxl </td>
                  <td> padding: 48px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mt-xxl </td>
                  <td> padding-top: 48px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mr-xxl </td>
                  <td> padding-right: 48px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mb-xxl </td>
                  <td> padding-bottom: 48px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> ml-xxl </td>
                  <td> padding-left: 48px; </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="small-heading fl-w-full">
          <h4 class="fl-w-full"> Padding XXXL </h4>
        </div>
        <div class="box-border fl-w-full">
          <div class="sb-table-outer fl-w-full">
            <table>
              <thead>
                <tr>
                  <th> Padding Size </th>
                  <th> SCSS Variable </th>
                  <th> Value </th>
                  <th> Class </th>
                  <th> Properties </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> <div class="mp-size-box size-64"></div> </td>
                  <td class="sb-var-color fw-medium"> $padding-xxxl </td>
                  <td> 64px </td>
                  <td class="sb-class-color fw-medium"> m-xxxl </td>
                  <td> padding: 64px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mt-xxxl </td>
                  <td> padding-top: 64px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mr-xxxl </td>
                  <td> padding-right: 64px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mb-xxxl </td>
                  <td> padding-bottom: 64px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> ml-xxxl </td>
                  <td> padding-left: 64px; </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>




      </div>

        
    `
  }));
