import { getPhotos } from "../../lib/googelDrive";

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const photos = await getPhotos();
    res.status(200).json(photos);
  } catch (error) {
    console.error('Error in photos API:', error);
    res.status(500).json({
      message: 'Error fetching photos',
      error: error.message
    });
  }
}