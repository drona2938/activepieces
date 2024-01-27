import { PieceAuth, createPiece } from '@activepieces/pieces-framework';
import { createQuickCalendarEvent } from './lib/actions/create-quick-event';
import { calendarEventChanged } from './lib/triggers/calendar-event';
import { createEvent } from './lib/actions/create-event';
import { getEvents } from './lib/actions/get-events';
import { updateEventAction } from './lib/actions/update-event.ation';
import { deleteEventAction } from './lib/actions/delete-event.action';
import { gCalendarCustomApiCallAction } from './lib/actions/custom-api-call.action';

export const googleCalendarAuth = PieceAuth.OAuth2({
  description: '',
  authUrl: 'https://accounts.google.com/o/oauth2/auth',
  tokenUrl: 'https://oauth2.googleapis.com/token',
  required: true,
  pkce: true,
  scope: [
    'https://www.googleapis.com/auth/calendar.events',
    'https://www.googleapis.com/auth/calendar.readonly',
  ],
});

export const googleCalendar = createPiece({
  minimumSupportedRelease: '0.5.0',
  logoUrl: 'https://cdn.activepieces.com/pieces/google-calendar.png',
  displayName: 'Google Calendar',
  authors: ['osamahaikal', 'bibhuty-did-this', 'MoShizzle', 'PFernandez98'],
  auth: googleCalendarAuth,
  actions: [createQuickCalendarEvent, createEvent, getEvents, updateEventAction, deleteEventAction, gCalendarCustomApiCallAction],
  triggers: [calendarEventChanged],
});
