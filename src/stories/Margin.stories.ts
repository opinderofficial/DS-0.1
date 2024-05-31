import { storiesOf } from '@storybook/angular';


 storiesOf('Foundations', module)

  .add('Margin', () => ({
    template: `
    <div>

      <div class="box-outer-main fl-w-full">

        <div class="common-heading fl-w-full bl-b">
          <h1 class="pb-vs"> Margin </h1>
        </div>
        <div class="common-overview fl-w-full">
          <h4 class="mb-vs"> Overview </h4>
          <p>Margins play a vital role in enhancing readability, aesthetics, user experience, content focus, consistency, responsiveness, hierarchy, and accessibility in web design. They are a key tool for creating well-structured, engaging, and user-friendly websites.</p>
        </div>

        <div class="small-heading fl-w-full">
          <h4 class="fl-w-full"> No Margin </h4>
        </div>
        <div class="box-border fl-w-full">
          <div class="sb-table-outer fl-w-full">
            <table>
              <thead>
                <tr>
                  <th> Margin Size </th>
                  <th> SCSS Variable </th>
                  <th> Value </th>
                  <th> Class </th>
                  <th> Properties </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>  </td>
                  <td class="sb-var-color fw-medium"> $margin-z </td>
                  <td> 0px </td>
                  <td class="sb-class-color fw-medium"> m-z </td>
                  <td> margin: 0px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mt-z </td>
                  <td> margin-top: 0px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mr-z </td>
                  <td> margin-right: 0px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mb-z </td>
                  <td> margin-bottom: 0px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> ml-z </td>
                  <td> margin-left: 0px; </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="small-heading fl-w-full">
          <h4 class="fl-w-full"> Margin Tiny </h4>
        </div>
        <div class="box-border fl-w-full">
          <div class="sb-table-outer fl-w-full">
            <table>
              <thead>
                <tr>
                  <th> Margin Size </th>
                  <th> SCSS Variable </th>
                  <th> Value </th>
                  <th> Class </th>
                  <th> Properties </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> <div class="mp-size-box size-1"></div> </td>
                  <td class="sb-var-color fw-medium"> $margin-tiny </td>
                  <td> 1px </td>
                  <td class="sb-class-color fw-medium"> m-tiny </td>
                  <td> margin: 1px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mt-tiny </td>
                  <td> margin-top: 1px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mr-tiny </td>
                  <td> margin-right: 1px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mb-tiny </td>
                  <td> margin-bottom: 1px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> ml-tiny </td>
                  <td> margin-left: 1px; </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="small-heading fl-w-full">
          <h4 class="fl-w-full"> Margin VVS </h4>
        </div>
        <div class="box-border fl-w-full">
          <div class="sb-table-outer fl-w-full">
            <table>
              <thead>
                <tr>
                  <th> Margin Size </th>
                  <th> SCSS Variable </th>
                  <th> Value </th>
                  <th> Class </th>
                  <th> Properties </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> <div class="mp-size-box size-4"></div> </td>
                  <td class="sb-var-color fw-medium"> $margin-vvs </td>
                  <td> 4px </td>
                  <td class="sb-class-color fw-medium"> m-vvs </td>
                  <td> margin: 4px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mt-vvs </td>
                  <td> margin-top: 4px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mr-vvs </td>
                  <td> margin-right: 4px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mb-vvs </td>
                  <td> margin-bottom: 4px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> ml-vvs </td>
                  <td> margin-left: 4px; </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="small-heading fl-w-full">
          <h4 class="fl-w-full"> Margin VS </h4>
        </div>
        <div class="box-border fl-w-full">
          <div class="sb-table-outer fl-w-full">
            <table>
              <thead>
                <tr>
                  <th> Margin Size </th>
                  <th> SCSS Variable </th>
                  <th> Value </th>
                  <th> Class </th>
                  <th> Properties </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> <div class="mp-size-box size-8"></div> </td>
                  <td class="sb-var-color fw-medium"> $margin-vs </td>
                  <td> 8px </td>
                  <td class="sb-class-color fw-medium"> m-vs </td>
                  <td> margin: 8px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mt-vs </td>
                  <td> margin-top: 8px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mr-vs </td>
                  <td> margin-right: 8px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mb-vs </td>
                  <td> margin-bottom: 8px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> ml-vs </td>
                  <td> margin-left: 8px; </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="small-heading fl-w-full">
          <h4 class="fl-w-full"> Margin Small </h4>
        </div>
        <div class="box-border fl-w-full">
          <div class="sb-table-outer fl-w-full">
            <table>
              <thead>
                <tr>
                  <th> Margin Size </th>
                  <th> SCSS Variable </th>
                  <th> Value </th>
                  <th> Class </th>
                  <th> Properties </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> <div class="mp-size-box size-16"></div> </td>
                  <td class="sb-var-color fw-medium"> $margin-small </td>
                  <td> 16px </td>
                  <td class="sb-class-color fw-medium"> m-small </td>
                  <td> margin: 16px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mt-small </td>
                  <td> margin-top: 16px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mr-small </td>
                  <td> margin-right: 16px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mb-small </td>
                  <td> margin-bottom: 16px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> ml-small </td>
                  <td> margin-left: 16px; </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="small-heading fl-w-full">
          <h4 class="fl-w-full"> Margin Medium </h4>
        </div>
        <div class="box-border fl-w-full">
          <div class="sb-table-outer fl-w-full">
            <table>
              <thead>
                <tr>
                  <th> Margin Size </th>
                  <th> SCSS Variable </th>
                  <th> Value </th>
                  <th> Class </th>
                  <th> Properties </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> <div class="mp-size-box size-24"></div> </td>
                  <td class="sb-var-color fw-medium"> $margin-medium </td>
                  <td> 24px </td>
                  <td class="primary-color fw-medium"> m-medium </td>
                  <td> margin: 24px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mt-medium </td>
                  <td> margin-top: 24px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mr-medium </td>
                  <td> margin-right: 24px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mb-medium </td>
                  <td> margin-bottom: 24px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> ml-medium </td>
                  <td> margin-left: 24px; </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="small-heading fl-w-full">
          <h4 class="fl-w-full"> Margin Large </h4>
        </div>
        <div class="box-border fl-w-full">
          <div class="sb-table-outer fl-w-full">
            <table>
              <thead>
                <tr>
                  <th> Margin Size </th>
                  <th> SCSS Variable </th>
                  <th> Value </th>
                  <th> Class </th>
                  <th> Properties </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> <div class="mp-size-box size-32"></div> </td>
                  <td class="sb-var-color fw-medium"> $margin-large </td>
                  <td> 32px </td>
                  <td class="sb-class-color fw-medium"> m-large </td>
                  <td> margin: 32px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mt-large </td>
                  <td> margin-top: 32px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mr-large </td>
                  <td> margin-right: 32px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mb-large </td>
                  <td> margin-bottom: 32px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> ml-large </td>
                  <td> margin-left: 32px; </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="small-heading fl-w-full">
          <h4 class="fl-w-full"> Margin XL </h4>
        </div>
        <div class="box-border fl-w-full">
          <div class="sb-table-outer fl-w-full">
            <table>
              <thead>
                <tr>
                  <th> Margin Size </th>
                  <th> SCSS Variable </th>
                  <th> Value </th>
                  <th> Class </th>
                  <th> Properties </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> <div class="mp-size-box size-38"></div> </td>
                  <td class="sb-var-color fw-medium"> $margin-xl </td>
                  <td> 38px </td>
                  <td class="sb-class-color fw-medium"> m-xl </td>
                  <td> margin: 38px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mt-xl </td>
                  <td> margin-top: 38px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mr-xl </td>
                  <td> margin-right: 38px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mb-xl </td>
                  <td> margin-bottom: 38px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> ml-xl </td>
                  <td> margin-left: 38px; </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="small-heading fl-w-full">
          <h4 class="fl-w-full"> Margin XXL </h4>
        </div>
        <div class="box-border fl-w-full">
          <div class="sb-table-outer fl-w-full">
            <table>
              <thead>
                <tr>
                  <th> Margin Size </th>
                  <th> SCSS Variable </th>
                  <th> Value </th>
                  <th> Class </th>
                  <th> Properties </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> <div class="mp-size-box size-48"></div> </td>
                  <td class="sb-var-color fw-medium"> $margin-xxl </td>
                  <td> 48px </td>
                  <td class="shareable-color fw-medium"> m-xxl </td>
                  <td> margin: 48px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mt-xxl </td>
                  <td> margin-top: 48px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mr-xxl </td>
                  <td> margin-right: 48px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mb-xxl </td>
                  <td> margin-bottom: 48px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> ml-xxl </td>
                  <td> margin-left: 48px; </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="small-heading fl-w-full">
          <h4 class="fl-w-full"> Margin XXXL </h4>
        </div>
        <div class="box-border fl-w-full">
          <div class="sb-table-outer fl-w-full">
            <table>
              <thead>
                <tr>
                  <th> Margin Size </th>
                  <th> SCSS Variable </th>
                  <th> Value </th>
                  <th> Class </th>
                  <th> Properties </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> <div class="mp-size-box size-64"></div> </td>
                  <td class="sb-var-color fw-medium"> $margin-xxxl </td>
                  <td> 64px </td>
                  <td class="sb-class-color fw-medium"> m-xxxl </td>
                  <td> margin: 64px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mt-xxxl </td>
                  <td> margin-top: 64px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mr-xxxl </td>
                  <td> margin-right: 64px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> mb-xxxl </td>
                  <td> margin-bottom: 64px; </td>
                </tr>
                <tr>
                  <td>  </td>
                  <td>  </td>
                  <td>  </td>
                  <td class="sb-class-color fw-medium"> ml-xxxl </td>
                  <td> margin-left: 64px; </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>




      </div>

        
    `
  }));
