import React from 'react';
import { Global, css } from '@emotion/react';
import { cssVariables } from '../src/styleguide/styleguide';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
    (Story) => (
        <div style={{ margin: '3rem' }}>
            <Global
                styles={css`
                    :root {
                        ${cssVariables}
                    }
                    * {
                        font-family: "Jost", sans-serif;
                    }
                `}
            />
            <Story />
        </div>
    ),
];