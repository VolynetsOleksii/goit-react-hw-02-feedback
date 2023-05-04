import PropTypes from 'prop-types';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
   return  options.map((key) => (
    <button key={key} type="button" onClick={() => onLeaveFeedback(key)}>{key}</button>
   ))
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
