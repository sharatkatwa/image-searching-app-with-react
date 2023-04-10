import './ImageList.css'
import ImageShow from './ImageShow'

function ImageList({ images }) {
  const renderdImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />
  })
  return <div className='image-list'>{renderdImages}</div>
}

export default ImageList
