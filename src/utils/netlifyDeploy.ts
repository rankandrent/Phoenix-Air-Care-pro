import { COMPANY_PHONE } from '../components/ContactInfo';

const NETLIFY_AUTH_TOKEN = process.env.NETLIFY_AUTH_TOKEN;
const SITE_ID = 'ef26518e-c509-4c9c-968f-effb077bc738';

export async function deployToNetlify(buildOutput: string) {
  try {
    // First, create a new deploy
    const deployResponse = await fetch(`https://api.netlify.com/api/v1/sites/${SITE_ID}/deploys`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${NETLIFY_AUTH_TOKEN}`
      },
      body: JSON.stringify({
        files: {
          '/': {
            content: buildOutput
          }
        }
      })
    });

    if (!deployResponse.ok) {
      throw new Error(`Deploy failed: ${deployResponse.statusText}`);
    }

    const deployData = await deployResponse.json();
    
    return {
      deploy_id: deployData.id,
      deploy_url: deployData.deploy_url,
      site_url: deployData.url
    };

  } catch (error) {
    console.error('Deployment failed:', error);
    throw error;
  }
}