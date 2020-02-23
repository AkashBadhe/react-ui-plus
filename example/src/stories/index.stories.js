import React from 'react';
import { ExampleComponent, Button } from 'react-ui-plus'
import componentNotes from './notes.md'

export default {
  title: 'MyComponent',
  parameters: { notes: componentNotes },
};


export const button = () => <Button text="Test" variant="primary"></Button>;
export const exampleComponent = () => <ExampleComponent text='Modern React component module' className="secondary" />;

export const special = () => <Button text="The Boss" />;
special.story = {
  parameters: { notes: componentNotes },
};
