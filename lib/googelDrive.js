import { google } from 'googleapis';


const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const drive = google.drive({ version: 'v3', auth: oauth2Client });


export async function getPhotos() {
  try {
    const response = await drive.files.list({
      q: "mimeType contains 'image/'",
      fields: 'files(id, name, mimeType, thumbnailLink, createdTime)',
      orderBy: 'createdTime desc',
      pageSize: 50, 
    });

    const files = response.data.files || [];

    return files.map((file) => ({
      id: file.id,
      name: file.name,
      mimeType: file.mimeType,
      thumbnail: file.thumbnailLink,
      imageUrl: `https://drive.google.com/uc?id=${file.id}`,
      createdTime: file.createdTime,
    }));
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error;
  }
}