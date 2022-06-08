import { FILTER_LABELS } from '../utils/constants';

const Filters = (props) => {
  return (
    <>
      {FILTER_LABELS.map((name, i) => (
        <button
          key={name}
          type="button"
          className="btn"
          aria-pressed={props.active === name}
          onClick={() => props.setFilter(name)}
        >
          {name}
        </button>
      ))}
    </>
  );
};

export default Filters;
