import { getPhotos } from "../../../../lib/googelDrive";

export async function GET(request) {
  try {
    const photos = await getPhotos();
    return Response.json(photos, { status: 200 });
  } catch (error) {
    console.error('Error in photos API:', error);
    return Response.json(
      {
        message: 'Error fetching photos',
        error: error.message
      },
      { status: 500 }
    );
  }
}