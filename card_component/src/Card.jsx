import profilepic from './assets/img.jpeg'

const Card = () => {
  return (
    <div className='card'>
        <img src={profilepic} className='card-img'></img>
        <h2 className='card-title'>Manoj Garnayak</h2>
        <p className='card-text'>Currently i am studing React for frontend and Django for backend development</p>
    </div>
  )
}

export default Card