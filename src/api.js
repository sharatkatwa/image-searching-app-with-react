import axios from 'axios'

const searchImages = async (term) => {
  const res = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID p3Xb_-5gkbW38_YuhfWS28iNmehH_w59KgedNXH8opk',
    },
    params: {
      query: term,
    },
  })
  return res.data.results
}

export default searchImages
