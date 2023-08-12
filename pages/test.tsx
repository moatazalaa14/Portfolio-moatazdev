// Import necessary packages
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Define the types for the LinkedIn recommendation data
interface RecommendationData {
  id: string;
  firstName: string;
  lastName: string;
  recommendationText: string;
}

// Define the types for the Next.js API route
interface APIRouteResponse {
  message?: string;
  data?: RecommendationData[];
}

// Create a Next.js API route to handle LinkedIn API calls
function handler(req, res) {
  const { query: { access_token } } = req; // Get the access token from the query parameters

  // Call the LinkedIn Recommendations API
  axios.get(`https://api.linkedin.com/v2/people/~:(id,firstName,lastName,recommendationsReceived)?oauth2_access_token=${access_token}`)
    .then(response => {
      const recommendations = response.data.recommendationsReceived;

      // Format the recommendations data as needed
      const formattedRecommendations: RecommendationData[] = recommendations.map(recommendation => ({
        id: recommendation.id,
        firstName: recommendation.recommender.firstName,
        lastName: recommendation.recommender.lastName,
        recommendationText: recommendation.recommendationText
      }));

      // Return the formatted recommendations data to the client
      const responseData: APIRouteResponse = { data: formattedRecommendations };
      res.status(200).json(responseData);
    })
    .catch(error => {
      console.error(error);
      const responseData: APIRouteResponse = { message: 'Failed to retrieve recommendations' };
      res.status(500).json(responseData);
    });
}

// Create a React component to display the recommendations data
export default function Recommendations() {
  const router = useRouter();
  const [recommendations, setRecommendations] = useState<RecommendationData[]>([]);

  // Fetch the recommendations data from the API route
  useEffect(() => {
    const accessToken = router.query.access_token;
    axios.get<APIRouteResponse>(`/api/linkedin/recommendations?access_token=${accessToken}`)
      .then(response => {
        if (response.data && response.data.data) {
          setRecommendations(response.data.data);
        }
      })
      .catch(error => console.error(error));
  }, []);

  // Render the recommendations data
  return (
    <div>
      <h1>LinkedIn Recommendations</h1>
      <ul>
        {recommendations.map(recommendation => (
          <li key={recommendation.id}>
            <h2>{recommendation.firstName} {recommendation.lastName}</h2>
            <p>{recommendation.recommendationText}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
