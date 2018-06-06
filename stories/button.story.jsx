import React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';
import Button from '../src/button/Button';

setAddon(JSXAddon);

const click = action('Button');

storiesOf('Button', module)
  .addWithJSX('Primary button', () => (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <Button onClick={() => click('Primary click')}>Primary Button</Button>
      </div>
      <Button
        onClick={() => {}}
        disabled
      >
          Primary Disabled
      </Button>
    </div>
  ))
  .addWithJSX('Alt button', () =>
    (
      <div>
        <div style={{ marginBottom: '10px' }}>
          <Button
            type="alt"
            onClick={() => click('Alt click')}
          >
            Alt Button
          </Button>
        </div>
        <Button
          type="alt"
          onClick={() => {}}
          disabled
        >
          Alt Disabled
        </Button>
      </div>
    ))
  .addWithJSX('Danger button', () => (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <Button
          type="danger"
          onClick={() => click('Danger click')}
        >
          Danger Button
        </Button>
      </div>
      <Button
        type="danger"
        onClick={() => {}}
        disabled
      >
          Danger Disabled
      </Button>
    </div>
  ));