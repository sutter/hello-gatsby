import React from 'react';
import Content from './Content';

export default {
  title: 'Base|Content',
};

export const base = () => (
  <Content>
    <h1>Hello World</h1>
    <p className="lead">
      Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>.
      Suspendisse congue mi nunc, quis posuere libero vestibulum in. Integer
      eleifend vitae augue interdum euismod. Aenean ut tortor id dolor finibus
      sagittis vel vitae lacus. Maecenas eget gravida nisl. Maecenas porta odio
      orci, quis venenatis mi faucibus quis.
    </p>
    <img src="https://placeimg.com/1000/480/animals" alt="animal" />
    <p>
      Vivamus dapibus augue eu nisl euismod, et mattis ante interdum. Mauris
      mollis pulvinar varius. Nulla pretium placerat tellus nec sodales. Proin
      non vestibulum est, eget condimentum magna. In non fringilla lacus, in
      tristique quam. Sed quis ullamcorper lacus.
    </p>
    <h2>Mauris et velit accumsan</h2>
    <p>
      Nunc non laoreet leo, sit amet blandit nulla. Sed eget consequat arcu. In
      pretium eleifend lorem, lobortis hendrerit dui tincidunt a. Mauris
      bibendum, purus nec porta ullamcorper, risus turpis pulvinar orci, ac
      luctus quam leo a tellus. Mauris et velit accumsan, feugiat arcu non,
      pellentesque mauris. Nam hendrerit placerat volutpat. Duis convallis at
      magna a vestibulum. Aenean eget lectus consequat, pretium enim et, iaculis
      odio.
    </p>
    <h3>Mauris et velit accumsan</h3>
    <ul>
      <li>Lorem ipsum dolor sit amet</li>
      <li>Consectetur adipiscing elit</li>
      <li>Integer molestie lorem at massa</li>
      <li>Faucibus porta lacus fringilla vel</li>
      <li>Aenean sit amet erat nunc</li>
      <li>Eget porttitor lorem</li>
    </ul>
  </Content>
);

export const headings = () => (
  <Content>
    <h1>h1. Content heading</h1>
    <h2>h2. Content heading</h2>
    <h3>h3. Content heading</h3>
    <h4>h4. Content heading</h4>
    <h5>h5. Content heading</h5>
    <h6>h6. Content heading</h6>
  </Content>
);

export const inlineTextElements = () => (
  <Content>
    <p>
      This is a a tag <a href="#">for link</a>.
    </p>
    <p>
      You can use the mark tag to <mark>highlight</mark> text.
    </p>
    <p>
      <del>This line of text is meant to be treated as deleted text.</del>
    </p>
    <p>
      <s>This line of text is meant to be treated as no longer accurate.</s>
    </p>
    <p>
      <ins>
        This line of text is meant to be treated as an addition to the document.
      </ins>
    </p>
    <p>
      <u>This line of text will render as underlined</u>
    </p>
    <p>
      <small>This line of text is meant to be treated as fine print.</small>
    </p>
    <p>
      <strong>This line rendered as bold text.</strong>
    </p>
    <p>
      <em>This line rendered as italicized text.</em>
    </p>
  </Content>
);

export const abbreviation = () => (
  <Content>
    <p>
      <abbr title="attribute">attr</abbr>
    </p>
    <p>
      <abbr title="HyperText Markup Language">HTML</abbr>
    </p>
  </Content>
);

export const blockquotes = () => (
  <Content>
    <blockquote>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer>
        Someone famous in <cite title="Source Title">Source Title</cite>
      </footer>
    </blockquote>
  </Content>
);

export const list = () => (
  <Content>
    <ul>
      <li>Lorem ipsum dolor sit amet</li>
      <li>Consectetur adipiscing elit</li>
      <li>Integer molestie lorem at massa</li>
      <li>Facilisis in pretium nisl aliquet</li>
      <li>
        Nulla volutpat aliquam velit
        <ul>
          <li>Phasellus iaculis neque</li>
          <li>Purus sodales ultricies</li>
          <li>Vestibulum laoreet porttitor sem</li>
          <li>Ac tristique libero volutpat at</li>
        </ul>
      </li>
      <li>Faucibus porta lacus fringilla vel</li>
      <li>Aenean sit amet erat nunc</li>
      <li>Eget porttitor lorem</li>
    </ul>
    <hr />
    <ol>
      <li>Lorem ipsum dolor sit amet</li>
      <li>Consectetur adipiscing elit</li>
      <li>Integer molestie lorem at massa</li>
      <li>Facilisis in pretium nisl aliquet</li>
      <li>
        Nulla volutpat aliquam velit
        <ol>
          <li>Phasellus iaculis neque</li>
          <li>Purus sodales ultricies</li>
          <li>Vestibulum laoreet porttitor sem</li>
          <li>Ac tristique libero volutpat at</li>
        </ol>
      </li>
      <li>Faucibus porta lacus fringilla vel</li>
      <li>Aenean sit amet erat nunc</li>
      <li>Eget porttitor lorem</li>
    </ol>
    <hr />
    <dl>
      <dt>Description lists</dt>
      <dd>A description list is perfect for defining terms.</dd>
      <dt>Euismod</dt>
      <dd>
        <p>
          Vestibulum id ligula porta felis euismod semper eget lacinia odio sem
          nec elit.
        </p>
        <p>Donec id elit non mi porta gravida at eget metus.</p>
      </dd>
      <dt>Malesuada porta</dt>
      <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
      <dt>Truncated term is truncated</dt>
      <dd>
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
        ut fermentum massa justo sit amet risus.
      </dd>
      <dt>Nesting</dt>
      <dd>
        <dl>
          <dt>Nested definition list</dt>
          <dd>
            Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.
          </dd>
        </dl>
      </dd>
    </dl>
  </Content>
);

export const table = () => (
  <Content>
    <table>
      <caption>
        This is an example table, and this is its caption to describe the
        contents.
      </caption>
      <thead>
        <tr>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
      </tbody>
    </table>
  </Content>
);

export const images = () => (
  <Content>
    <img src="https://placeimg.com/1000/480/animals" alt="animal" />
    <hr />
    <figure>
      <img src="https://placeimg.com/1000/480/animals" alt="animal" />
      <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
    </figure>
  </Content>
);
