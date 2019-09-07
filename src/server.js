/* eslint-disable no-console */
import app from './app';

import showText from './figlet';

app.listen(3003, () => {
  showText('[MeetApp]: Server On => localhost:3003');
});
