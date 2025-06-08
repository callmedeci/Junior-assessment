/**
 * @module Avatar
 * @description A simple React component for displaying a user avatar.
 * It renders an image within a styled circular container.
 */

function Avatar({ imageSrc, alt }) {
  return (
    <div className='w-12 h-12 rounded-full overflow-hidden'>
      <img className='object-cover' src={imageSrc} alt={`${alt} avatar`} />
    </div>
  );
}

export default Avatar;
