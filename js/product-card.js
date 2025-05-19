const containerTable = document.querySelector('.compound-container');
const containerDescription = document.querySelector('.descriptions-text');
const containerUse = document.querySelector('.use-text');

const containerMarkup = `
    <table>
      <thead>
        <th>Average values</th>
        <th>Per 50g</th>
        <th>Per 100g</th>
      </thead>

      <tbody>
        <tr>
          <td>Lorem ipsum</td>
          <td>24</td>
          <td>48</td>
        </tr>
        <tr>
          <td>Lorem ipsum</td>
          <td>24</td>
          <td>48</td>
        </tr>
        <tr>
          <td>Lorem ipsum</td>
          <td>24</td>
          <td>48</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td>Lorem ipsum</td>
          <td>24</td>
          <td>48</td>
        </tr>
        <tr>
          <td>Lorem ipsum</td>
          <td>24</td>
          <td>48</td>
        </tr>
        <tr>
          <td>Lorem ipsum</td>
          <td>24</td>
          <td>48</td>
        </tr>
        <tr>
          <td>Lorem ipsum</td>
          <td>24</td>
          <td>48</td>
        </tr>
      </tfoot>
    </table>
  `;
containerTable.insertAdjacentHTML('beforeend', containerMarkup);

const descriptionsMarkup = `
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
      vulputate convallis turpis, sit amet ultricies ex ullamcorper quis.
      Ut quis pulvinar dolor. Donec semper eu nulla porta euismod. Ut
      mattis enim dolor, vel tincidunt justo dapibus et. Proin ut nisl
      vitae ex efficitur rutrum. Mauris lacinia fermentum est, nec tempor
      justo pharetra eu.
  </p>
      <br />
  <p>
    Cras gravida justo eu sapien laoreet, id malesuada massa fringilla.
    Nam eget sapien ut nisl elementum malesuada sit amet sed neque.
    Suspendisse molestie ultrices justo. Suspendisse vitae nibh
    fermentum velit vestibulum fringilla. in ut nisl vitae ex efficitur
    rutrum. Mauris lacinia fermentum est, nec tempor justo pharetra eu.
  </p> 
`;
containerDescription.insertAdjacentHTML('beforeend', descriptionsMarkup);

const useMarkup = `
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
      vulputate convallis turpis, sit amet ultricies ex ullamcorper quis.
      Ut quis pulvinar dolor. Donec semper eu nulla porta euismod. Ut
      mattis enim dolor, vel tincidunt justo dapibus et. Proin ut nisl
      vitae ex efficitur rutrum. Mauris lacinia fermentum est, nec tempor
      justo pharetra eu. Cras gravida justo eu sapien laoreet, id
      malesuada massa fringilla. Nam eget sapien ut nisl elementum
      malesuada sit amet sed neque. Suspendisse molestie ultrices justo.
      Suspendisse vitae nibh fermentum velit vestibulum fringilla.
    </p>
`;
containerUse.insertAdjacentHTML('beforeend', useMarkup);
