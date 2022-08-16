import PropTypes from 'prop-types';

export const Result = ({ url, download }) => {
  return (
    <div className={'w-full max-w-2xl  mt-5'}>
      <img src={url} alt='web-screenshots' className={'w-full h-full object-cover rounded-lg'} />
    </div>
  );
};

Result.propTypes = {
  url: PropTypes.string.isRequired,
  download: PropTypes.string.isRequired,
};
