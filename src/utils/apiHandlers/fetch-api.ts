import SERVER_URL from '../../config/serverUrl'
import { auth } from '../../firebase/authentication'

export default async function fetchAPI(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT',
  body?: Record<string, any>,
) {
  const headers: Record<string, any> = {
    'Content-Type': 'application/json',
  }
  const token = auth.currentUser ? await auth.currentUser.getIdToken() : ''
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const payload: Record<string, any> = {
    method,
    headers,
    mode: 'cors',
  }
  if (body) {
    payload.body = JSON.stringify(body)
  }
  try {
    const res = await fetch(`${SERVER_URL}/api/${endpoint}`, payload)

    const responseData = await res.json()
    if (responseData.ok) {
      return responseData.data
    } else {
      throw new Error(responseData.error || 'Error Fetching API')
    }
  } catch (e: any) {
    throw new Error(e.message || 'Error Fetching API')
  }
}
