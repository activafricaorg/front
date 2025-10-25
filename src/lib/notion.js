import { Client } from '@notionhq/client';

export const DATABASE_ID = process.env.NOTION_DATABASE_ID;
export const DATA_SOURCE_ID = process.env.NOTION_DATA_SOURCE_ID;
export const notion = new Client({ 
  auth: process.env.NOTION_TOKEN,
  notionVersion: "2025-09-03",
});

if (!DATABASE_ID || !DATA_SOURCE_ID) {
  throw new Error('Environment variable NOTION_DATABASE_ID and NOTION_DATA_SOURCE_ID are required');
}