import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/calendar.events.readonly'];

// Provide a friendly type for our events to keep the front-end clean
export interface CalendarEvent {
    id: string;
    summary: string;
    description?: string;
    start: string; // ISO date string
    end: string;   // ISO date string
    location?: string;
    htmlLink?: string;
}

export async function getUpcomingEvents(): Promise<CalendarEvent[]> {
    const calendarId = process.env.GOOGLE_CALENDAR_ID;

    // If no credentials, return empty array to prevent crashing (or mock data for dev)
    if (!process.env.GOOGLE_CALENDAR_API_KEY && !process.env.GOOGLE_APPLICATION_CREDENTIALS) {
        console.warn('Missing Google Calendar credentials. Returning empty list.');
        return [];
    }

    if (!calendarId) {
        console.warn('Missing GOOGLE_CALENDAR_ID. Returning empty list.');
        return [];
    }

    try {
        // Authenticate - supports API key or Service Account implicitly if env vars are set
        // For public calendars, API key is sufficient. For private, need Service Account.
        const auth = new google.auth.GoogleAuth({
            scopes: SCOPES,
            // If using API Key only for public calendar:
            apiKey: process.env.GOOGLE_CALENDAR_API_KEY,
        });

        const calendar = google.calendar({ version: 'v3', auth });

        const response = await calendar.events.list({
            calendarId,
            timeMin: new Date().toISOString(),
            maxResults: 10,
            singleEvents: true,
            orderBy: 'startTime',
        });

        const events = response.data.items;
        if (!events || events.length === 0) {
            return [];
        }

        return events.map((event) => ({
            id: event.id || '',
            summary: event.summary || 'No Title',
            description: event.description || '',
            start: event.start?.dateTime || event.start?.date || '',
            end: event.end?.dateTime || event.end?.date || '',
            location: event.location || '',
            htmlLink: event.htmlLink || '',
        }));

    } catch (error) {
        console.error('Error fetching calendar events:', error);
        return [];
    }
}
